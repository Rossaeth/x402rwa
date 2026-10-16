import { json } from "@/lib/http";
export const runtime = "nodejs";
export async function GET() { return json({ success: true, service: "x402rwa", status: "ok", integrations: { chainlinkCredentialsConfigured: Boolean(process.env.CHAINLINK_API_KEY && process.env.CHAINLINK_API_SECRET), x402Enabled: process.env.X402_ENABLED === "true" }, payments: "not_implemented", timestamp: new Date().toISOString() }); }
