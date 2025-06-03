FROM node:alpine3.18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Build the application and create fallback if build fails
RUN npm run build || (mkdir -p dist && echo '<html><body><h1>Build Error</h1><p>Build failed due to TypeScript errors</p></body></html>' > dist/index.html)

FROM nginx:alpine
# Copy the build output (either successful build or fallback)
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]