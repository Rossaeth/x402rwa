import { NextResponse } from "next/server";
export function json(data: unknown, status = 200) { return NextResponse.json(data, { status, headers: { "Cache-Control": "no-store" } }); }
export function notConfigured(message: string, extra: Record<string, unknown> = {}) { return json({ success: false, status: "not_configured", message, data: null, ...extra }); }
