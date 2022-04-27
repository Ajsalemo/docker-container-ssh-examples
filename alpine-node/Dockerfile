FROM node:16.4.2-alpine3.14

WORKDIR /app/
COPY package.json /app/

RUN yarn install && \
    yarn global add pm2

COPY . /app/
 
# Start and enable SSH
RUN apk add openssh \
     && echo "root:Docker!" | chpasswd \
     && chmod +x /app/init_container.sh \
     && cd /etc/ssh/ \
     && ssh-keygen -A

COPY sshd_config /etc/ssh/

EXPOSE 3000 2222
ENTRYPOINT [ "/app/init_container.sh" ]