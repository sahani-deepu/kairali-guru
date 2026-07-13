import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "sitemap.xml");
    const xml = fs.readFileSync(filePath, "utf8");
    
    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    });
  } catch (error) {
    return new NextResponse("<error>Sitemap not found</error>", {
      status: 404,
      headers: { "Content-Type": "application/xml" },
    });
  }
}
