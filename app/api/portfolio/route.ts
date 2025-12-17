import { NextRequest, NextResponse } from "next/server"
import { readFile, writeFile } from "fs/promises"
import { join } from "path"
import { PortfolioData } from "@/lib/types"

export async function GET() {
  try {
    const filePath = join(process.cwd(), "data", "portfolio.json")
    const fileContents = await readFile(filePath, "utf-8")
    const data = JSON.parse(fileContents)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read portfolio data" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: PortfolioData = await request.json()
    const filePath = join(process.cwd(), "data", "portfolio.json")
    await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8")
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update portfolio data" },
      { status: 500 }
    )
  }
}


