# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine3.15 AS build
WORKDIR /source

# copy csproj and restore as distinct layers
COPY *.sln .
COPY *.csproj ./
RUN dotnet restore

# copy everything else and build app
COPY . ./
WORKDIR /source/
RUN dotnet publish -c release -o /app --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine3.15
WORKDIR /app
COPY --from=build /app ./
COPY sshd_config /etc/ssh/
COPY init_container.sh /opt/

RUN apk add openssh \
    && echo "root:Docker!" | chpasswd \
    && chmod +x /opt/init_container.sh \
    && cd /etc/ssh/ \
    && ssh-keygen -A

EXPOSE 8080 2222
ENTRYPOINT ["/opt/init_container.sh"]