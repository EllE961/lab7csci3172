// Mock projects data function for Netlify
exports.handler = async function(event, context) {
  try {
    // Return mock projects data
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
    
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(projects)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching projects data", error: error.message })
    };
  }
}; 