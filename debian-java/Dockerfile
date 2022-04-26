FROM maven:3.8.1 as build
WORKDIR /app
COPY . /app
RUN mvn -f /app/pom.xml clean package

FROM openjdk:11-jre
COPY --from=build /app/target/ssh-0.0.1-SNAPSHOT.jar /app/ssh-0.0.1-SNAPSHOT.jar

COPY sshd_config /etc/ssh/

RUN apt-get update \
    && apt-get install -y --no-install-recommends dialog \
    && apt-get install -y --no-install-recommends openssh-server \
    && echo "root:Docker!" | chpasswd \
    && chmod u+x /app/init_container.sh
    
EXPOSE 8080
ENTRYPOINT [ "/app/init_container.sh" ]