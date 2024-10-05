FROM node:20-alpine
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci
COPY . ./

EXPOSE 3000
CMD ["npm", "run", "serve"]
