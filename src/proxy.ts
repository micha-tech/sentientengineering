import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "sentientengineering.com.ng";
const ALTERNATIVE_HOSTS = new Set([
  "sentientengineering.com",
  "www.sentientengineering.com",
]);

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers
    .get("x-forwarded-host")
    ?.split(",")[0]
    .trim();
  const host = forwardedHost ?? request.headers.get("host");
  const hostname = (host?.split(":")[0] ?? request.nextUrl.hostname).toLowerCase();
  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    .trim();

  if (
    ALTERNATIVE_HOSTS.has(hostname) ||
    (hostname === CANONICAL_HOST && forwardedProtocol === "http")
  ) {
    const destination = request.nextUrl.clone();
    destination.protocol = "https:";
    destination.hostname = CANONICAL_HOST;
    destination.port = "";
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
