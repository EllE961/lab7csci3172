# Lab 7: Enhanced Portfolio with Interactive Features and API Integration

A React-based personal portfolio website showcasing education, skills, and projects. Enhanced with interactive features, API integration, and theme switching. This project was created for CSCI 3172 Lab 7.

- _Date Created_: 20 Mar 2025
- _Last Modification Date_: 20 Mar 2025
- _Frontend URL_: [https://yahya-portfolio.netlify.app/](https://yahya-portfolio.netlify.app/)
- _Backend URL_: [https://yahya-portfolio-api.amplifyapp.com/](https://yahya-portfolio-api.amplifyapp.com/)
- _GitLab URL_: [https://git.cs.dal.ca/salmi/csci3172/-/tree/main/labs/lab7/](https://git.cs.dal.ca/salmi/csci3172/-/tree/main/labs/lab7/)

## Project Structure

This project consists of two separate applications:

1. **Frontend**: A React application (in the `frontend` directory)
2. **Backend**: An Express.js API (in the `backend` directory)

## Author

- **Yahya Al Salmi** ([yh247885@dal.ca](mailto:yh247885@dal.ca)) - Developer

## Built With

### Frontend

- [React](https://reactjs.org/) - Frontend library
- [React Router](https://reactrouter.com/) - For client-side routing
- [Bootstrap 5](https://getbootstrap.com/) - CSS framework for styling
- [Axios](https://axios-http.com/) - For API requests
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Custom styling
- [JavaScript ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Frontend logic
- [Netlify](https://www.netlify.com/) - For frontend deployment

### Backend

- [Express](https://expressjs.com/) - Backend API framework
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [OpenWeatherMap API](https://openweathermap.org/api) - Weather data
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variables

## Features Added in Lab 7

1. **Theme Switcher (Light/Dark Mode)**

   - Implemented using React useState
   - Theme persists between sessions using localStorage
   - CSS variables for dynamic theming

2. **Interactive Skill Filtering**

   - Real-time search functionality for skills
   - Category-based filtering
   - Dynamic UI updates based on user input

3. **API Data Integration**

   - Projects fetched from backend API
   - Weather widget on homepage using OpenWeatherMap API
   - Loading states and error handling

4. **Responsive Design Enhancements**

   - Improved mobile experience
   - Hamburger menu for smaller screens
   - Consistent UI across device sizes

5. **Separate Backend API**
   - RESTful API built with Express.js
   - Projects data endpoint
   - Weather data integration with OpenWeatherMap
   - Error handling and status codes

## Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the CSS framework
- [React Router](https://reactrouter.com/) for routing capabilities
- [Google Fonts](https://fonts.google.com/) for typography
- [OpenWeatherMap](https://openweathermap.org/) for weather data API
- Special thanks to Dalhousie University for providing a strong foundation in web development best practices.
