#!/bin/sh

echo "Starting SSH ..."
service ssh start

# Run the application
dotnet debian-netcore6.dll