#!/bin/sh

echo "Starting SSH ..."
/usr/sbin/sshd

# Run the application
dotnet alpine-dotnet6.dll