# x402rwa — RWA Research API

A Next.js API for researching tokenized real-world assets (RWA), designed to combine available Chainlink data with clearly attributed external sources and optional x402 payments.

## Status
- Chainlink public Data Streams discovery proxy: implemented.
- Authenticated latest-report retrieval: implemented with the official @chainlink/data-streams-sdk.
- RWA category endpoints: scaffolded; no synthetic asset records or prices.
- x402 payment enforcement: not enabled yet. X402_ENABLED=false is the safe default.
- NAV, AUM and Proof of Reserve: only available when a matching feed / supported onchain contract is configured.

## Endpoints
- GET /api/health
- GET /api/rwa/discovery — public Chainlink Data Streams discovery
- GET /api/rwa/markets
- GET /api/rwa/treasuries
- GET /api/rwa/commodities
- GET /api/rwa/private-credit
- GET /api/rwa/real-estate
- GET /api/rwa/tokenized-assets
- GET /api/rwa/valuation
- GET /api/rwa/proof-of-reserve
- GET /api/rwa/research
- GET /api/chainlink/report?feedId=0x... — requires credentials and feed access

Category endpoints return configured feed results only and say not_configured where no matching feed/source is connected.

## Local setup
Requires Node.js 20+.
1. Run npm install
2. Copy .env.example to .env.local
3. Run npm run dev

Set CHAINLINK_API_KEY and CHAINLINK_API_SECRET only if you have Chainlink Data Streams credentials. Never commit secrets.

## Vercel
Add environment variables in Project Settings → Environment Variables. See .env.example.

## Important
This is a research API, not investment advice. Do not describe data as live unless a successful source result and timestamp are returned. Chainlink does not guarantee that every private-credit, real-estate, Treasury, NAV, AUM, or reserve dataset is available to every account. Check feed availability, permissions and data terms before commercial use.

References:
- https://docs.chain.link/data-streams
- https://docs.chain.link/data-streams/tutorials/ts-sdk-fetch
- https://data.chain.link/smartdata