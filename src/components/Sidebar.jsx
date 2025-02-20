import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FilterList, Search } from '@mui/icons-material';
import {
  TextField, IconButton, FormControl, InputLabel, Select, MenuItem, InputAdornment
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const drawerWidth = 190;

// Theme Overrides
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            height: '36px', // Set consistent height
            padding: '0px 8px',
          },
          '& .MuiOutlinedInput-input': {
            padding: '8px 10px',
            fontSize: '12px',  // Reduced font size for text input
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: '36px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          fontSize: '12px',  // Reduced font size here
        },
        select: {
          fontSize: '12px',  // Reduced font size for options
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '12px',  // Reduced font size for label
        },
      },
    },
  },
});

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: drawerWidth,
}));

const data = {
  filters: {
    language: { label: 'Language', default: 'English', options: ['English', 'Spanish', 'French'] },
    channels: { label: 'Channels', default: 'Voice', options: ['Voice', 'Email', 'Chat'] },
    country: { label: 'Country', default: 'USA', options: ['USA', 'Canada', 'UK'] },
    site: { label: 'Site', default: 'Site 1', options: ['Site 1', 'Site 2', 'Site 3'] },
    partner: { label: 'Partner', default: 'Partner 1', options: ['Partner 1', 'Partner 2', 'Partner 3'] }
  },
  date: { label: 'Select Date', default: dayjs() },
  search: { placeholder: 'Search...', default: '' }
};

export default function PersistentDrawerLeft() {
  const [filters, setFilters] = React.useState(
    Object.keys(data.filters).reduce((acc, key) => {
      acc[key] = data.filters[key].default;
      return acc;
    }, {})
  );

  const [selectedDate, setSelectedDate] = React.useState(data.date.default);
  const [searchQuery, setSearchQuery] = React.useState(data.search.default);

  const handleFilterChange = (field) => (event) => {
    setFilters({ ...filters, [field]: event.target.value });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              marginTop: '90px',
              padding: '8px',
            },
          }}
          variant="persistent"
          anchor="left"
          open={true}
        >
          <Divider />
          <List>
            <div style={{ marginTop: '-30px' }}>
              <ListItem>
                <IconButton edge="start" aria-label="filter">
                  <FilterList />
                </IconButton>
                <h6 style={{ fontSize: '14px', marginLeft: '6px' }}>Queue Selection</h6>
              </ListItem>
            </div>
            <div style={{ marginTop: '-35px' }}>
              {/* Search Field */}
              <ListItem>
                <TextField
                  fullWidth
                  placeholder={data.search.placeholder}
                  variant="outlined"
                  size="small"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
              </ListItem>

              {/* Dynamic Dropdowns */}
              {Object.keys(data.filters).map((filterKey) => {
                const { label, options } = data.filters[filterKey];
                return (
                  <ListItem key={filterKey}>
                    <FormControl fullWidth size="small" variant="outlined">
                      <InputLabel>{label}</InputLabel>
                      <Select
                        value={filters[filterKey]}
                        onChange={handleFilterChange(filterKey)}
                        label={label}
                        MenuProps={{
                          PaperProps: { style: { maxHeight: 200 } },
                          disableScrollLock: true,
                        }}
                        sx={{
                          fontSize: '12px',  // Apply font size reduction here
                        }}
                      >
                        {options.map(option => (
                          <MenuItem key={option} value={option} sx={{ fontSize: '12px' }}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </ListItem>
                );
              })}

              {/* Date Picker */}
              <ListItem>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label={data.date.label}
                    value={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                    renderInput={(params) => (
                      <TextField 
                        {...params} 
                        size="small" 
                        fullWidth 
                        sx={{
                          fontSize: '12px',  // Reduced font size for the input
                          '& .MuiInputBase-input': {
                            fontSize: '12px',  // Reduced font size for the date input
                          },
                        }} 
                      />
                    )}
                  />
                </LocalizationProvider>
              </ListItem>

            </div>
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
