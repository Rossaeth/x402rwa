import { createClient } from "@chainlink/data-streams-sdk";
const DISCOVERY_URL = "https://api.dataengine.chain.link/api/v1/discovery";
export function getChainlinkClient() {
  const apiKey = process.env.CHAINLINK_API_KEY;
  const userSecret = process.env.CHAINLINK_API_SECRET;
  if (!apiKey || !userSecret) return null;
  return createClient({ apiKey, userSecret, endpoint: process.env.CHAINLINK_DATA_STREAMS_URL || "https://api.dataengine.chain.link", wsEndpoint: "wss://ws.dataengine.chain.link" });
}
export async function discoverStreams() {
  const response = await fetch(DISCOVERY_URL, { cache: "no-store" });
  if (!response.ok) throw new Error("Chainlink Discovery returned HTTP " + response.status);
  return response.json();
}
export async function getLatestReport(feedId: string) {
  if (!/^0x[a-fA-F0-9]{64}$/.test(feedId)) throw new Error("feedId must be a 32-byte hex ID beginning with 0x");
  const client = getChainlinkClient();
  if (!client) { const error = new Error("Missing CHAINLINK_API_KEY or CHAINLINK_API_SECRET"); Object.assign(error, { statusCode: 503 }); throw error; }
  return client.getLatestReport(feedId);
}
export function configuredFeedIds(...envNames: string[]) { return [...new Set(envNames.flatMap((name) => (process.env[name] || "").split(",").map((value) => value.trim()).filter(Boolean)))]; }