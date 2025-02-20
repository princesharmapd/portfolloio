const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const fetchDataUsingPuppeteer = async (url, res, attempt = 1) => {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: "new", // Use headless mode
      executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", // Use Chrome installed on Windows
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-blink-features=AutomationControlled",
        "--disable-web-security",
        "--disable-features=IsolateOrigins,site-per-process",
      ],
    });

    const page = await browser.newPage();

    // Set headers to mimic a real browser
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36"
    );
    await page.setExtraHTTPHeaders({
      Accept: "application/json",
      "Accept-Language": "en-US,en;q=0.9",
      Referer: "https://www.nseindia.com/",
    });

    await page.goto(url, { waitUntil: "networkidle2", timeout: 10000 });

    const body = await page.evaluate(() => document.body.innerText);

    // Ensure the response is valid JSON
    let jsonResponse;
    try {
      jsonResponse = JSON.parse(body);
    } catch (jsonError) {
      if (attempt < 3) {
        console.warn(`⚠️ Invalid JSON response. Retrying... (Attempt ${attempt})`);
        await browser.close();
        await new Promise(resolve => setTimeout(resolve, Math.random() * 3000 + 2000)); // Wait 2-5s before retry
        return fetchDataUsingPuppeteer(url, res, attempt + 1);
      }
      throw new Error("Invalid JSON response from NSE after multiple attempts.");
    }

    await browser.close();
    res.json(jsonResponse);
  } catch (error) {
    console.error(`❌ Fetch Error from ${url}:`, error.message);
    if (browser) await browser.close();
    res.status(500).json({ error: error.message });
  }
};

// Define API endpoints
const endpoints = [
  { path: "/api/marketStatus", url: "https://www.nseindia.com/api/marketStatus" },
  { path: "/api/card1", url: "https://www.nseindia.com/api/chart-databyindex-dynamic?index=NIFTY%2050&indices=true" },
  { path: "/api/card2", url: "https://www.nseindia.com/api/chart-databyindex-dynamic?index=NIFTY%20NEXT%2050&indices=true" },
  { path: "/api/card3", url: "https://www.nseindia.com/api/chart-databyindex-dynamic?index=NIFTY%20MIDCAP%20SELECT&indices=true" },
  { path: "/api/card4", url: "https://www.nseindia.com/api/chart-databyindex-dynamic?index=NIFTY%20BANK&indices=true" },
  { path: "/api/card5", url: "https://www.nseindia.com/api/chart-databyindex-dynamic?index=NIFTY%20FINANCIAL%20SERVICES&indices=true" },
  { path: "/api/executivegraph", url: "https://www.nseindia.com/api/live-analysis-price-band-hitter" },
  { path: "/api/homecorporate", url: "https://www.nseindia.com/api/home-corporate-actions?index=equities" },
  { path: "/api/homeboardmeetings", url: "https://www.nseindia.com/api/home-board-meetings?index=equities" },
  { path: "/api/homecorporateannouncemnet", url: "https://www.nseindia.com/api/home-corporate-announcements?index=homepage" },
  { path: "/api/allIndices", url: "https://www.nseindia.com/api/allIndices" },

];

// Create routes dynamically
endpoints.forEach(endpoint => {
  app.get(endpoint.path, (req, res) => fetchDataUsingPuppeteer(endpoint.url, res));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
