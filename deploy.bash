#!/bin/bash

set -e

# Build and push the backend Docker image to Railway.app
cd backend/server
docker build -t businesseducated-server .
echo "$RAILWAY_API_KEY" | docker login -u "$RAILWAY_USERNAME" --password-stdin registry.app.railway.com
docker tag businesseducated-server registry.app.railway.com/my-app/my-backend
docker push registry.app.railway.com/my-app/my-backend

# Build and push the strapi-cms Docker image to Railway.app
cd ../strapi-cms
docker build -t businesseducated-cms .
echo "$RAILWAY_API_KEY" | docker login -u "$RAILWAY_USERNAME" --password-stdin registry.app.railway.com
docker tag businesseducated-cms registry.app.railway.com/my-app/my-strapi-cms
docker push registry.app.railway.com/my-app/my-strapi-cms

# Build and deploy the frontend to Netlify
cd ../../frontend
npm install
npm run build
echo "$NETLIFY_API_KEY" | netlify deploy --prod
