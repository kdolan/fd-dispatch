# build environment
# http://mherman.org/blog/2017/12/07/dockerizing-a-react-app/
FROM node:11.7.0 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json /usr/src/app/

RUN npm install react-scripts@2.1.5 -g

COPY . /usr/src/app

RUN npm install && \
    npm run import-install && \
    npm install --only=production && \
    npm prune --production && \
    npm run build

# production environment
FROM nginx:stable-alpine
# Remove dault ngnix config
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]