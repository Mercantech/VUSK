# VUSK — Web- og spildesign

En enkel hjemmeside til Web- og spildesign på Viborg Ungdomsskole. Forsiden samler holdets praktiske information, kode-spillene ligger på `/css-spil`, Roblox-guiden ligger på `/roblox`, og AI-forløbet ligger på `/ai-lab`.

## Udvikling

```bash
npm install
npm run dev
```

## Docker

Byg og start den produktionsklare app lokalt:

```bash
docker compose up --build -d
```

Appen er derefter tilgængelig på [http://localhost:8081](http://localhost:8081).

Stop den igen med:

```bash
docker compose down
```
