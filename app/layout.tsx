import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "x402rwa — Real-World Asset Intelligence", description: "RWA research API using available Chainlink data and attributed external sources." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
