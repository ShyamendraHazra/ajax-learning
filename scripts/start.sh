#!/bin/bash
./scripts/setup.sh
./scripts/setup-mysql-demo-table.sh
docker compose build
docker-compose up -d
echo "PHP server started at : http://localhost:8000"
echo "Adminer server started at : http://localhost:3000"
