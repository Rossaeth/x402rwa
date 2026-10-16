import { discoverStreams } from "@/lib/chainlink";
import { json } from "@/lib/http";
export const runtime = "nodejs";
export async function GET() { try { const data = await discoverStreams(); return json({ success: true, source: "Chainlink Data Streams public discovery", status: "live", data, timestamp: new Date().toISOString() }); } catch (error) { return json({ success: false, source: "Chainlink Data Streams public discovery", status: "upstream_error", error: error instanceof Error ? error.message : "Unknown upstream error" }, 502); } }