FROM node

WORKDIR /src
COPY package*.json ./
RUN yarn
COPY . .
CMD ["yarn", "start"]
