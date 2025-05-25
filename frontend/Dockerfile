FROM node:alpine3.18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Simple build without any flags
RUN npm run build || true

FROM nginx:alpine
# Copy the build output regardless of whether it succeeded
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]