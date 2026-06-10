import { getServerSideConfig } from "@/app/config/server";
import {
  OPENROUTER_BASE_URL,
  ApiPath,
  ModelProvider,
} from "@/app/constant";
import { prettyObject } from "@/app/utils/format";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/api/auth";

const serverConfig = getServerSideConfig();

export async function handle(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  console.log("[OpenRouter Route] params ", params);

  if (req.method === "OPTIONS") {
    return NextResponse.json({ body: "OK" }, { status: 200 });
  }

  const authResult = auth(req, ModelProvider.OpenRouter);
  if (authResult.error) {
    return NextResponse.json(authResult, {
      status: 401,
    });
  }

  try {
    const response = await request(req);
    return response;
  } catch (e) {
    console.error("[OpenRouter] ", e);
    return NextResponse.json(prettyObject(e));
  }
}

async function request(req: NextRequest) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  // strip the /api/openrouter prefix to get the actual API path
  let path = `${req.nextUrl.pathname}`.replaceAll(ApiPath.OpenRouter, "");

  let baseUrl = serverConfig.openrouterUrl || OPENROUTER_BASE_URL;

  if (!baseUrl.startsWith("http")) {
    baseUrl = `https://${baseUrl}`;
  }

  if (baseUrl.endsWith("/") && path.startsWith("/")) {
    path = path.slice(1);
  }

  const fetchUrl = `${baseUrl}${path}`;
  console.log("[OpenRouter] fetchUrl", fetchUrl);

  try {
    const res = await fetch(fetchUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${serverConfig.openrouterApiKey || process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": serverConfig.openrouterReferer || "https://heychat.club",
        "X-Title": serverConfig.openrouterTitle || "HeyChat",
      },
      method: req.method,
      body: req.body,
      // @ts-ignore
      duplex: "half",
      signal: controller.signal,
    });

    return res;
  } finally {
    clearTimeout(timeoutId);
  }
}

export const POST = async (
  req: NextRequest,
  { params }: { params: { path: string[] } },
) => handle(req, { params });
export const GET = async (
  req: NextRequest,
  { params }: { params: { path: string[] } },
) => handle(req, { params });

export const runtime = "edge";