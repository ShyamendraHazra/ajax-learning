#!/bin/bash

source php.env

date=$(date +"%Y-%m-%d");

echo "CREATE DATABASE IF NOT EXISTS $DATABASE;
USE $DATABASE;
CREATE TABLE IF NOT EXISTS demo (sl_no INT(10) AUTO_INCREMENT PRIMARY KEY, user VARCHAR(25) NOT NULL, name VARCHAR(25) NOT NULL, date DATE NOT NULL);
INSERT INTO demo (user,name,date) VALUES ROW('Krishna02','Krishnamurty Saha','$date'), ROW('Gopla08','Gopal Krishna Roy','$date'), ROW('Bhairab06','Bhairab Guha','$date');" > mysql/init/run.sql