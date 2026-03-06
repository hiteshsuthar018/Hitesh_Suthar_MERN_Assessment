# Use official Node image
FROM node:20

# Set working directory
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build TypeScript
RUN npx tsc

# Expose backend port
EXPOSE 3000

# Start the server
CMD ["node", "dist/index.js"]