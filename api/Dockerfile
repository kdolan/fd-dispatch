FROM node:12
#Setup timezone
ENV TZ=America/New_York
RUN echo | date

# Create app directory
WORKDIR /usr/src/app/

# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY . ./
#COPY config/ config/

EXPOSE 3000
CMD [ "npm", "start" ]
