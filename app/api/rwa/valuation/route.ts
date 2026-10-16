import { configuredFeedIds } from "@/lib/chainlink";
import { notConfigured } from "@/lib/http";

export const runtime = "nodejs";

const feedEnvNames = ["CHAINLINK_NAV_FEED_IDS","CHAINLINK_AUM_FEED_IDS"];

export async function GET() {
  const feedIds = configuredFeedIds(...feedEnvNames);
  return notConfigured(
    feedIds.length
      ? "Feed IDs are configured. Fetch and validate each feed before treating this category as live market data."
      : "No matching feed IDs or external data provider have been configured for this category.",
    {
      category: "NAV and AUM valuation research",
      source: "Chainlink / external providers",
      configuredFeedCount: feedIds.length,
      configuredFeedIds: feedIds,
      data: [],
      liveDataAvailable: false,
      timestamp: new Date().toISOString()
    }
  );
}
