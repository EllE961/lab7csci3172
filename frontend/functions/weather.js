// Mock weather data function for Netlify
exports.handler = async function(event, context) {
  try {
    // Return mock weather data
    const weatherData = {
      city: "Halifax",
      country: "CA",
      temperature: {
        current: 12,
        feels_like: 10,
        min: 8,
        max: 15
      },
      humidity: 65,
      description: "Partly Cloudy",
      icon: "☁️"
    };
    
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(weatherData)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching weather data", error: error.message })
    };
  }
}; 