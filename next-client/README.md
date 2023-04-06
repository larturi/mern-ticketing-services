# MERN Ticketing Services App

- Services: Node 16 & Express & TypeScript
- Frontend: Next.js
- Infra: K8S
  
# Next App Client

Run the development app:

```bash
npm install

npm run dev
```

Listening at <http://localhost:3000>

# Docker

```bash
# Generate Image Auth Service
docker build -t larturi/ticketing-next-client .
docker push larturi/ticketing-next-client
```