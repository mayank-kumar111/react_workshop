import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  CircularProgress,
  Stack,
  Divider,
} from "@mui/material";
import {
  WbSunny, Cloud, AcUnit, Grain, Thunderstorm,
} from "@mui/icons-material";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const PLACEHOLDER_API_KEY = "YOUR_OPENWEATHERMAP_API_KEY_HERE";
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY || PLACEHOLDER_API_KEY;

  const mockWeather = {
    name: "Jaipur",
    sys: { country: "IN" },
    main: { temp: 28, feels_like: 30, temp_min: 25, temp_max: 32, humidity: 65 },
    weather: [{ main: "Clouds", description: "broken clouds" }],
    wind: { speed: 4.1 },
    dt: Date.now() / 1000,
    cod: 200,
  };

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }
    setLoading(true);
    setError("");
    setWeather(null);

    if (apiKey === PLACEHOLDER_API_KEY) {
      setTimeout(() => {
        setWeather(mockWeather);
        setLoading(false);
        setError("Note: Using mock data. Replace the placeholder API key for live data.");
      }, 1000);
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        setError(data.message);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Error fetching weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isDarkBackground = () => {
    if (!weather) return false;
    const description = weather.weather[0].main.toLowerCase();
    // Only Thunderstorm provides a dark background that needs white text
    return description.includes("thunderstorm");
  };

  const getCardTextColor = () => {
    // If the background is dark, use white text; otherwise, use a dark color (like primary dark)
    return isDarkBackground() ? "white" : "#1a237e";
  };

  const getWeatherIcon = (description) => {
    const iconColor = getCardTextColor(); // Use the dynamic text color for the icon
    const style = { fontSize: 60, color: iconColor };
    const main = description.toLowerCase();
    
    if (main.includes("clear")) return <WbSunny sx={style} />;
    if (main.includes("cloud")) return <Cloud sx={style} />;
    if (main.includes("snow")) return <AcUnit sx={style} />;
    if (main.includes("rain") || main.includes("drizzle")) return <Grain sx={style} />;
    if (main.includes("thunderstorm")) return <Thunderstorm sx={style} />;
    return <WbSunny sx={style} />;
  };

  const getBackgroundGradient = () => {
    if (!weather) return "linear-gradient(to right, #e0f7fa, #ffffff)";
    const description = weather.weather[0].main.toLowerCase();
    if (description.includes("clear")) return "linear-gradient(to right, #64b5f6, #42a5f5)";
    if (description.includes("cloud")) return "linear-gradient(to right, #90a4ae, #b0bec5)";
    if (description.includes("rain") || description.includes("drizzle")) return "linear-gradient(to right, #64b5f6, #90caf9)";
    if (description.includes("snow")) return "linear-gradient(to right, #b3e5fc, #e3f2fd)";
    if (description.includes("thunderstorm")) return "linear-gradient(to right, #263238, #455a64)";
    return "linear-gradient(to right, #e0f7fa, #ffffff)";
  };

  const formatUpdateTime = (dt) => {
    if (!dt) return '';
    const date = new Date(dt * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const textColor = getCardTextColor();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        background: getBackgroundGradient(),
        p: 4,
        transition: 'background 0.5s ease-in-out',
      }}
    >
      <Typography 
        variant="h3" 
        fontWeight="bold" 
        sx={{ 
          mb: 4, 
          color: isDarkBackground() ? 'white' : '#1a237e', 
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)' 
        }}
      >
        Weather App
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4, width: '100%', maxWidth: 400 }}>
        <TextField
          label="Enter city"
          variant="filled"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') fetchWeather(); }}
          sx={{ bgcolor: 'white', borderRadius: 1 }}
        />
        <Button variant="contained" color="primary" onClick={fetchWeather} size="large" sx={{ fontWeight: 'bold' }}>
          Search
        </Button>
      </Stack>

      {loading && <CircularProgress color="primary" sx={{ my: 4 }} />}

      {error && (
        <Typography color="error" variant="body1" align="center" sx={{ mt: 2, p: 2, bgcolor: 'rgba(255,255,255,0.8)', borderRadius: 2 }}>
          {error}
        </Typography>
      )}

      {weather && (
        <Card
          sx={{
            minWidth: 300,
            maxWidth: 400,
            p: 3,
            textAlign: "center",
            boxShadow: 8,
            borderRadius: 4,
            // Highly visible semi-transparent white/gray background for contrast
            background: isDarkBackground() ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.7)', 
            backdropFilter: 'blur(10px)',
            color: textColor, // Dynamic text color for contrast
            border: '1px solid rgba(255, 255, 255, 0.3)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        >
          <CardContent>
            <Typography variant="h4" fontWeight="bold" gutterBottom color={textColor}>
              {weather.name}, {weather.sys.country}
            </Typography>
            <Typography variant="h2" fontWeight="light" sx={{ mb: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }} color={textColor}>
              {Math.round(weather.main.temp)}°C
            </Typography>
            <Box sx={{ mb: 2 }}>
              {getWeatherIcon(weather.weather[0].main)}
              <Typography variant="h6" color={textColor}>
                {weather.weather[0].description}
              </Typography>
            </Box>
            <Stack direction="row" justifyContent="space-between" sx={{ mt: 2, pt: 2, borderTop: `1px solid ${textColor}` }}>
              <Box>
                <Typography variant="caption" display="block" color={textColor}>Feels Like</Typography>
                <Typography variant="subtitle1" fontWeight="bold" color={textColor}>{Math.round(weather.main.feels_like)}°C</Typography>
              </Box>
              <Box>
                <Typography variant="caption" display="block" color={textColor}>Min/Max</Typography>
                <Typography variant="subtitle1" fontWeight="bold" color={textColor}>{Math.round(weather.main.temp_min)}°C / {Math.round(weather.main.temp_max)}°C</Typography>
              </Box>
              <Box>
                <Typography variant="caption" display="block" color={textColor}>Humidity</Typography>
                <Typography variant="subtitle1" fontWeight="bold" color={textColor}>{weather.main.humidity}%</Typography>
              </Box>
            </Stack>
            <Divider sx={{ my: 2, bgcolor: isDarkBackground() ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }} />
            <Typography variant="caption" color={textColor}>
              Last Updated: {formatUpdateTime(weather.dt)}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Weather;