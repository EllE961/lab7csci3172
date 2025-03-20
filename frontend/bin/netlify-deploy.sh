#!/bin/bash

# Build the React app
npm run build

# Create a deployable build package
cd build
zip -r ../build.zip *
cd ..

# Use netlify-cli to deploy (if installed)
if command -v netlify >/dev/null 2>&1; then
  echo "Deploying to Netlify..."
  # If you're using netlify CLI, uncomment the line below:
  # netlify deploy --prod
else
  echo "Netlify CLI not found. Manual deployment required."
  echo "Please upload the build.zip file to Netlify manually or install netlify-cli with: npm install -g netlify-cli"
fi 