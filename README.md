# MERN Blog Services App

- Services: Node & Express & TypeScript
- Frontend: Next.js
- Infra: K8S

# Frontend

Run the development server:

```bash
npm install

npm start
```

Listening at <http://localhost:8000>

# Services

## Auth Service

Run the development app:

```bash
npm install

npm start
```

Listening at <http://localhost:4000>


# Docker

```bash

# Generate Image Auth Service
cd node-auth-service
docker build -t larturi/ticketing-auth-serv .
docker push larturi/ticketing-auth-serv:latest

```

# Skaffold

To run all Kubernetes Objects (Services, Deployments and Pods) in Local run:

```bash
skaffold dev
```

##### Made with ❤️ by Leandro Arturi
