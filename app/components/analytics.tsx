import Script from "next/script";
import { cloudflareAnalyticsToken } from "../constants/analytics";

/** Cookie-free visitor stats via Cloudflare Web Analytics. */
export default function Analytics() {
  if (!cloudflareAnalyticsToken) return null;

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token: cloudflareAnalyticsToken })}
      strategy="afterInteractive"
    />
  );
}
