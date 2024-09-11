FROM node:20 as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
# RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]

# CMD ["npx" , "serve" , "-s" , "dist" , "-l" , "5173"]

