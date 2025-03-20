const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Projects data
const projects = [
  {
    id: 1,
    name: "GitEllE",
    author: "Yahya Al Salmi",
    date: "Jan 2024 – Mar 2024",
    description:
      "A lightweight, educational implementation of Git written in Python. It aims to provide a clear understanding of Git's internal mechanisms while maintaining compatibility with the original Git commands.",
    languages: ["Python", "Git", "Version Control", "System Design"],
  },
  {
    id: 2,
    name: "Face-Mask-Detection",
    author: "Yahya Al Salmi",
    date: "Oct 2023 – Dec 2023",
    description:
      'A Faster R-CNN-based face mask detection project that trains on annotated images to classify faces as "with_mask" or "without_mask," supporting real-time detection via webcam but requiring further accuracy improvements.',
    languages: [
      "Python",
      "TensorFlow",
      "Faster R-CNN",
      "OpenCV",
      "Computer Vision",
    ],
  },
  {
    id: 3,
    name: "Spam-Email-Detection",
    author: "Yahya Al Salmi",
    date: "Aug 2023 – Sep 2023",
    description:
      "A Naive Bayes-based SMS spam classifier that analyzes message patterns, generates data visualizations, and achieves 96% accuracy in distinguishing spam from ham messages.",
    languages: ["Python", "Scikit-learn", "Pandas", "Naive Bayes", "NLP"],
  },
  {
    id: 4,
    name: "Fake-News-Detection",
    author: "Yahya Al Salmi",
    date: "May 2023 – Jul 2023",
    description:
      "Developed a machine learning model to identify fake news articles using NLP techniques. Implemented multiple algorithms including LSTM networks and achieved 93% accuracy in identifying misleading content.",
    languages: ["Python", "NLTK", "TensorFlow", "Keras", "NLP"],
  },
  {
    id: 5,
    name: "Multi-Genre Classification of Novels",
    author: "Yahya Al Salmi",
    date: "Sep 2024 – Dec 2024",
    description:
      "NLP pipeline using Project Gutenberg data. Implemented TF-IDF vectorization, machine learning models (logistic regression, random forests, Naïve Bayes) for multi-class classification of novel genres.",
    languages: ["Python", "NLTK", "Scikit-learn", "Pandas"],
  },
  {
    id: 6,
    name: "Text Processor",
    author: "Yahya Al Salmi",
    date: "Sep 2024",
    description:
      "GUI-based Python application for paraphrasing and summarizing text. Created a PyQt5 interface for easy generation of paraphrased content, summaries, and simple clipboard copy functionality.",
    languages: ["Python", "PyQt5", "NLTK"],
  },
  {
    id: 7,
    name: "Quick Cash",
    author: "Yahya Al Salmi",
    date: "Jan 2023 – Apr 2023",
    description:
      "Mobile app to connect job seekers with employers, including job posting, browsing, and communication features. Built with Java and SQLite in Android Studio as part of a team-based university course project.",
    languages: ["Java", "Android Studio", "SQLite"],
  },
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the portfolio API!' });
});

// Get all projects
app.get('/api/projects', (req, res) => {
  try {
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get weather data
app.get('/api/weather', async (req, res) => {
  try {
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const city = req.query.city || 'Halifax,ca';
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error(`OpenWeatherMap API responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      
      const weatherData = {
        city: data.name,
        country: data.sys.country,
        temperature: {
          current: data.main.temp,
          feels_like: data.main.feels_like,
          min: data.main.temp_min,
          max: data.main.temp_max,
        },
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon
      };
      
      res.json(weatherData);
    } catch (fetchError) {
      console.log("Using mock weather data instead of API call", fetchError);
      
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
      
      res.json(weatherData);
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ message: 'Error fetching weather data', error: error.message });
  }
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; 