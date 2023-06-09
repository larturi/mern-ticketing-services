# MERN Ticketing Services App

- Services: Node 16 & Express & TypeScript
- Frontend: Next.js
- Infra: K8S
  
# Services

## Auth Service

Run the development app:

```bash
npm install

npm start
```

Listening at <http://localhost:4000>

### Tests

```bash
cd node-auth-service

npm install

npm run test 
```

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

# Ingress
<!-- https://kubernetes.github.io/ingress-nginx/deploy/#quick-start -->

```bash
kubectl apply -f ingress-srv.yaml

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.7.0/deploy/static/provider/cloud/deploy.yaml

kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission
```

# Add in etc/hosts
127.0.0.1          localhost ticketing.com


# Secrets

```bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf1234
```


# Delete All Services and Pods

```bash

```