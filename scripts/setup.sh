#!/bin/bash

projectName=${PWD##*/};

databaseName=$(echo "$projectName" | tr '-' '_');
databaseName=$(echo "$projectName" | tr ' ' '_');

echo "HOSTNAME=mysql
USERNAME="shyam"
PASSWORD="Kishori@9"
DATABASE=$databaseName" > php.env;

echo "MYSQL_USER=shyam
MYSQL_PASSWORD=Kishori@9
MYSQL_DATABASE=$databaseName
MYSQL_ALLOW_EMPTY_PASSWORD=1
TZ=Asia/Kolkata" > mysql.env;
