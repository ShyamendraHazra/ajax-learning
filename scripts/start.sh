#!/bin/bash
./scripts/setup.sh
./scripts/setup-mysql-demo-table.sh
docker compose build
docker-compose up -d
echo "server started at : http://localhost:8000"
