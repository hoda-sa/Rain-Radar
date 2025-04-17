# Rain Radar

A modern, responsive React application for checking weather forecasts using the OpenWeatherMap API.

<div align="center">
  <img src="src/assets/weather-app-screenshot.png" alt="Weather App Screenshot" width="800"/>
</div>

## 🌦️ Live Demo

Check out the live demo [here](https://www.rainradar.hodaaghaei.com/).

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any location worldwide
- **5-Day Forecast**: Plan ahead with accurate multi-day weather predictions
- **City Search**: Search for weather information for any city around the globe
- **Temperature Unit Toggle**: Switch easily between Celsius and Fahrenheit 
- **Local Time Display**: View the actual local time at the searched location
- **Responsive Design**: Enjoy a seamless experience across all device sizes
- **Weather Details**: Access comprehensive data including temperature, humidity, wind speed, pressure, and visibility
- **Dynamic Styling**: Experience changing backgrounds based on weather conditions and time of day
- **Error Handling**: Receive clear notifications when issues occur

## 🛠️ Technologies Used

- **React**: Frontend UI library for building the user interface
- **React Hooks**: For state management and side effects
- **Custom Hooks**: To encapsulate and reuse weather fetching logic
- **Bootstrap**: CSS framework for responsive design and UI components
- **OpenWeatherMap API**: For fetching detailed weather data
- **Vite**: Modern build tool and development server for fast development
- **Environment Variables**: For secure API key management
- **Async/Await**: For clean, readable asynchronous code

## 📋 Project Structure

The application follows a modular component-based architecture:

```
rain-radar/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images and other media files
│   ├── components/          # React UI components
│   │   ├── CurrentWeather/  # Current weather display
│   │   ├── ForecastList/    # 5-day forecast container
│   │   ├── ForecastItem/    # Individual day forecast
│   │   ├── SearchBar/       # City search functionality
│   │   ├── UnitToggle/      # Temperature unit switcher
│   │   ├── WeatherDetails/  # Detailed weather metrics
│   │   └── ...              # Other UI components
│   ├── utils/               # Helper functions and utilities
│   │   ├── weatherApi.js    # API integration functions
│   │   └── useWeather.js    # Custom hook for weather data
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── .env                     # Environment variables
└── vite.config.js           # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rain-radar.git
   cd rain-radar
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   VITE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 💡 Key Concepts Used

### Custom Hook Pattern
The application uses a custom `useWeather` hook that encapsulates all weather-related state and logic:

```javascript
const useWeather = (defaultCity) => {
  // State declarations for weather data, loading state, etc.
  
  // Function to fetch weather data
  const fetchWeatherData = async (city) => {
    // Fetch and process weather data
  };
  
  // Return data and functions for components to use
  return { weatherData, forecastData, loading, handleSearch, ... };
};
```

### API Integration
The app connects to OpenWeatherMap API using clean, reusable functions:

```javascript
export const fetchWeatherByCity = async (city, units) => {
  // Make API request and handle response
};
```

### Component Composition
UI is built from small, focused components that work together:

```jsx
// Main component structure
<Header />
<SearchBar onSearch={handleSearch} />
<UnitToggle units={units} onUnitChange={handleUnitChange} />
<CurrentWeather data={weatherData} units={units} />
<ForecastList data={forecastData} units={units} />
```

## 🔍 API Usage

The application interacts with two main OpenWeatherMap API endpoints:

1. **Current Weather**:  
   `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units={units}`

2. **5-Day Forecast**:  
   `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units={units}`

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This generates optimized files in the `dist` directory that can be deployed to any static hosting service.

## 🔮 Future Enhancements

- **Geolocation**: Automatically detect and display user's current location weather
- **Weather Maps**: Integrate visual weather maps for more detailed visualization
- **Hourly Forecasts**: Add detailed hour-by-hour predictions
- **Weather Alerts**: Display severe weather warnings for selected locations
- **Favorites**: Allow users to save frequently checked locations
- **Historical Data**: View past weather patterns and trends
- **PWA Support**: Enable offline functionality and home screen installation

## 📄 License

This project is licensed under the MIT License.