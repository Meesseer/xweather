import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Input, Box, Button, Card, CardContent, Typography, Stack, CircularProgress } from '@mui/material';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading

  const fetchData = async () => {
    setLoading(true); // Set loading to true when fetching data
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
        params: {
          key: "d37e0689e23e437aa14132519240311",
          q: city
        }
      });
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      alert("Failed to fetch weather data: " + error.message);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const handleSubmit = () => {
    fetchData();
  };

  return (
    <Box className="App">
      <Stack direction="column">
        <Box mb={2}>
          <input
            type='text'
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <button variant="contained" onClick={handleSubmit} disabled={loading}>
            {loading ? <p>Loading data…</p> : 'Search'}
          </button>
        </Box>
        <Box mt={2} className="weather-cards">
          <Stack direction='row' spacing={2}>
            {weatherData && (
              <>
                <Card className="weather-card" sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                      Temperature
                    </Typography>
                    <Typography variant="body2">
                      {weatherData.current.temp_c} °C
                    </Typography>
                  </CardContent>
                </Card>
                
                <Card className="weather-card" sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                      Humidity
                    </Typography>
                    <Typography variant="body2">
                      {weatherData.current.humidity} %
                    </Typography>
                  </CardContent>
                </Card>

                <Card className="weather-card" sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                      Condition
                    </Typography>
                    <Typography variant="body2">
                      {weatherData.current.condition.text}
                    </Typography>
                  </CardContent>
                </Card>

                <Card className="weather-card" sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                      Wind Speed
                    </Typography>
                    <Typography variant="body2">
                      {weatherData.current.wind_kph} kph
                    </Typography>
                  </CardContent>
                </Card>
              </>
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
