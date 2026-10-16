import { getLatestReport } from "@/lib/chainlink";
import { json } from "@/lib/http";
export const runtime = "nodejs";
export async function GET(request: Request) {
  const feedId = new URL(request.url).searchParams.get("feedId");
  if (!feedId) return json({ success: false, error: "Missing required query parameter: feedId" }, 400);
  try { const report = await getLatestReport(feedId); return json({ success: true, source: "Chainlink Data Streams", status: "live", feedId, data: report, timestamp: new Date().toISOString() }); }
  catch (error) { const statusCode = Number((error as { statusCode?: number })?.statusCode || 502); return json({ success: false, source: "Chainlink Data Streams", status: statusCode === 503 ? "not_configured" : "upstream_error", error: error instanceof Error ? error.message : "Unknown upstream error" }, statusCode); }
}