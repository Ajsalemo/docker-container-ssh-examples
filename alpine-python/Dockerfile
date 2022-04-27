FROM python:3.10-alpine3.15
WORKDIR /app/

COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY ./ /app/

COPY sshd_config /etc/ssh/

# Start and enable SSH
RUN apk add openssh \
     && echo "root:Docker!" | chpasswd \
     && chmod +x /app/init_container.sh \
     && cd /etc/ssh/ \
     && ssh-keygen -A

EXPOSE 8000 2222

ENTRYPOINT [ "/app/init_container.sh" ] 