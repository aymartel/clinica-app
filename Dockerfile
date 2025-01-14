# pull official base image
FROM node:16.13.2-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json yarn.lock ./

RUN yarn install

# add app
COPY . ./

# start app
CMD ["yarn", "dev"]
