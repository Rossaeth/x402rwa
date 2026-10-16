const endpoints = [
  ["Discovery", "Public Chainlink stream catalog. Check available IDs before requesting reports.", "/api/rwa/discovery"],
  ["Markets", "Market-data overview from configured accessible feeds.", "/api/rwa/markets"],
  ["Tokenized Treasuries", "Treasury research when a matching feed or external source is configured.", "/api/rwa/treasuries"],
  ["Commodities", "Precious metals and commodity feed research.", "/api/rwa/commodities"],
  ["Tokenized Assets", "Tokenized-equity and other supported asset streams.", "/api/rwa/tokenized-assets"],
  ["Private Credit", "Research connector status for private-credit assets.", "/api/rwa/private-credit"],
  ["Real Estate", "Research connector status for tokenized real estate.", "/api/rwa/real-estate"],
  ["Valuation", "NAV/AUM data only when a matching source is configured.", "/api/rwa/valuation"],
  ["Proof of Reserve", "Reserve feeds and connector status.", "/api/rwa/proof-of-reserve"],
  ["Research", "Combined source-aware RWA research summary.", "/api/rwa/research"]
];
export default function Home() { return <main><div className="eyebrow">Real-world asset intelligence</div><h1>Research tokenized assets with source transparency.</h1><p className="lead">x402rwa brings available Chainlink data and explicitly attributed external sources into one API for AI agents and builders. No fabricated prices, reserves, or valuations.</p><div className="status">Phase 1 · Data foundation · x402 payments disabled</div><h2>API endpoints</h2><div className="grid">{endpoints.map(([name, description, path]) => <article className="card" key={path}><h2>{name}</h2><p>{description}</p><a href={path}><code>{path}</code></a></article>)}</div><footer>Data availability depends on feed coverage, account permissions, chain, and third-party provider access. Research outputs are informational and not investment advice.</footer></main>; }