const CLIENT_ID = process.env.REACT_APP_CLIENTID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECTURI;
const AUTHORIZATION_ENDPOINT = process.env.REACT_APP_AUTHORIZATIONENDPOINT;
const TOKEN_ENDPOINT = process.env.REACT_APP_TOKENENDPOINT;
const USERINFO_ENDPOINT = process.env.REACT_APP_USERINFOENDPOINT;
const SCOPE = process.env.REACT_APP_SCOPE;

const authService = {
  redirectToSSO: () => {
    const authUrl = `${AUTHORIZATION_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;
    window.location.href = authUrl;
  },

  getUser: async () => {
    const token = localStorage.getItem("access_token");
    if (!token) return null;

    try {
      const response = await fetch(USERINFO_ENDPOINT, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return await response.json();
    } catch (error) {
      console.error("Error fetching user info:", error);
      return null;
    }
  },

  getToken: async (code) => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: process.env.REACT_APP_BASICTOKEN,
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const data = await response.json();
    if (data.access_token) {
      localStorage.setItem("access_token", data.access_token);
    }
    return data;
  },
};

export default authService;
