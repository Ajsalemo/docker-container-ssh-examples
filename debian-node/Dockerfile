FROM node:16.4.2

WORKDIR /app/
COPY package.json /app/

RUN yarn install && \
    yarn global add pm2

COPY . /app/
 
RUN apt-get update \
    && apt-get install -y --no-install-recommends dialog \
    && apt-get install -y --no-install-recommends openssh-server \
    && echo "root:Docker!" | chpasswd \
    && chmod u+x /app/init_container.sh

COPY sshd_config /etc/ssh/

EXPOSE 3000 2222
ENTRYPOINT [ "/app/init_container.sh" ]