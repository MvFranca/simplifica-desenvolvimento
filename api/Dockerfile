FROM node:20.14.0-alpine3.20

WORKDIR /app

COPY . .

RUN npm install && npm run build

EXPOSE 8000

CMD ["node", "dist/index.js"]
