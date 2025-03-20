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
- [AWS Amplify](https://aws.amazon.com/amplify/) - For backend deployment
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

## Installation and Setup

### Frontend

1. Clone the repository
   ```
   git clone https://git.cs.dal.ca/salmi/csci3172.git
   cd csci3172/labs/lab7/frontend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Update API endpoints in `src/pages/Home.js` and `src/pages/Projects.js` to point to your backend server

4. Run the development server
   ```
   npm start
   ```

5. Build for production
   ```
   npm run build
   ```

### Backend

1. Navigate to the backend directory
   ```
   cd ../backend
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

## API Endpoints

- `GET /api/projects` - Returns a list of all projects
- `GET /api/weather` - Returns current weather data for Halifax

## Manual Testing

### Theme Switcher Testing

| Test Case | Steps | Expected Result | Actual Result |
|-----------|-------|-----------------|---------------|
| Light/Dark Toggle | 1. Click the theme toggle button<br>2. Refresh the page | 1. Theme changes from light to dark<br>2. Theme persists after refresh | PASS |
| Accessibility | Test with screen reader and keyboard navigation | All controls accessible and properly labeled | PASS |

### Skills Filter Testing

| Test Case | Steps | Expected Result | Actual Result |
|-----------|-------|-----------------|---------------|
| Text Search | Type "Python" in the search box | Only Python skills shown in results | PASS |
| Category Filter | Click on "Frontend" button | Only Frontend skills displayed | PASS |
| Real-time Updates | Start typing in search box | Results update as you type | PASS |
| No Results | Search for non-existent skill | "No skills match your search" message shown | PASS |

### API Integration Testing

| Test Case | Steps | Expected Result | Actual Result |
|-----------|-------|-----------------|---------------|
| Projects Loading | Navigate to Projects page | Loading spinner shown, then projects displayed | PASS |
| Weather Widget | Load home page | Weather data for Halifax displayed | PASS |
| Error Handling | Simulate API failure | Error message displayed with retry option | PASS |
| Backend Connectivity | Start backend server and load frontend pages | Data successfully fetched from backend | PASS |

### Responsiveness Testing

| Test Case | Device/Screen Size | Expected Result | Actual Result |
|-----------|-------------------|-----------------|---------------|
| Desktop Layout | >1200px | Full layout with sidebars visible | PASS |
| Tablet Layout | 768px-1199px | Adjusted layout with proper spacing | PASS |
| Mobile Layout | <767px | Single column layout with hamburger menu | PASS |

## Accessibility

The website implements WCAG Guidelines for accessibility:

- Semantic HTML structure
- Proper heading hierarchy
- Sufficient color contrast in both light and dark themes
- Accessible navigation
- Keyboard navigation support
- Screen reader compatibility
- ARIA attributes where appropriate

## Deployment

### Frontend (Netlify)
1. Connect GitHub repository to Netlify
2. Configure build settings: `npm run build`
3. Set environment variables for API URLs
4. Deploy

### Backend (Express on AWS Amplify)
1. Create AWS account and set up Amplify
2. Connect GitHub repository
3. Configure build settings
4. Set environment variables for API keys
5. Deploy

## Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the CSS framework
- [React Router](https://reactrouter.com/) for routing capabilities
- [Google Fonts](https://fonts.google.com/) for typography
- [OpenWeatherMap](https://openweathermap.org/) for weather data API
- Special thanks to Dalhousie University for providing a strong foundation in web development best practices.
