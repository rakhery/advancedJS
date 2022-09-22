FROM       node:alpine

MAINTAINER https://github.com/rakHery/blockchain-js

EXPOSE     3000

WORKDIR    /blockchain-js

COPY       package.json /blockchain-js

RUN        npm install

COPY       . /blockchain-js

CMD        ["node", "bin/www"]
