# My Portfolio Backend API

Backend API for my personal portfolio website built with Express.js.

## Features

- RESTful API endpoints for projects data
- Weather data integration with OpenWeatherMap API
- CORS enabled for cross-origin requests
- Error handling and proper status codes

## API Endpoints

- `GET /` - Home route, returns a welcome message
- `GET /api/projects` - Returns all projects
- `GET /api/weather` - Returns weather data for Halifax (or specified city)

## Setup and Installation

1. Clone the repository
   ```
   git clone https://git.cs.dal.ca/salmi/csci3172.git
   cd csci3172/labs/lab7/backend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file with your OpenWeatherMap API key
   ```
   PORT=3001
   OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Run the server
   ```
   npm start
   ```
   
   Or for development with auto-reload:
   ```
   npm run dev
   ```

## Deployment

For AWS Amplify deployment:

1. Create AWS account and set up Amplify
2. Connect GitHub repository
3. Configure build settings
4. Set environment variables for API keys
5. Deploy

## Technologies Used

- Express.js - Web framework
- Node.js - JavaScript runtime
- dotenv - Environment variables
- cors - CORS middleware

## Author

- **Yahya Al Salmi** ([yh247885@dal.ca](mailto:yh247885@dal.ca)) 