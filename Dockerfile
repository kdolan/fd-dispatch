FROM node:12

# Add ennviornment variables from build
ARG TAG_VERSION
ARG COMMIT_REF
ENV TAG_VERSION=$TAG_VERSION
ENV COMMIT_REF=$COMMIT_REF

#Setup timezone
ENV TZ=America/New_York
RUN echo | date

# Create app directory
WORKDIR /usr/src/app/

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm ci && rm -f .npmrc

# Bundle app source
COPY . .
#COPY config/ config/

EXPOSE 3000
RUN echo Enviornment: $NODE_ENV
CMD [ "npm", "start" ]
