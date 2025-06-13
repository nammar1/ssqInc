FROM node:alpine3.18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --verbose
COPY . .
# Build the application - fail if there are any errors
RUN npm run build

FROM nginx:alpine
# Copy the build output
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]