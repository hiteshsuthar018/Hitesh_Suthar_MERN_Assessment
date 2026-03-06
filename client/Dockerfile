# Use Node image
FROM node:20

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project
COPY . .

# Build React app
RUN npm run build

# Install serve to run build
RUN npm install -g serve

# Expose port
EXPOSE 5173

# Run frontend
CMD ["serve", "-s", "dist", "-l", "5173"]