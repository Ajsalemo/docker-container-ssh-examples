FROM maven:3.8.5-eclipse-temurin-11-alpine as build
WORKDIR /app
COPY . /app
RUN mvn -f /app/pom.xml clean package

FROM adoptopenjdk/openjdk11:jdk-11.0.1.13-alpine
COPY --from=build /app/target/ssh-0.0.1-SNAPSHOT.jar /app/ssh-0.0.1-SNAPSHOT.jar
COPY --from=build /app/init_container.sh /app/
COPY --from=build /app/sshd_config /etc/ssh/
 
RUN apk add openssh \
     && echo "root:Docker!" | chpasswd \
     && chmod +x /app/init_container.sh \
     && cd /etc/ssh/ \
     && ssh-keygen -A
    
EXPOSE 8080 2222
ENTRYPOINT [ "/app/init_container.sh" ]