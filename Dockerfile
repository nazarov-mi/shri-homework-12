FROM node:9

WORKDIR /usr/src/app
COPY . .

RUN npm config set loglevel warn
RUN npm install
RUN npm run build

CMD npm run start