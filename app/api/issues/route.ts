import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "../../ValidationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validations = createIssueSchema.safeParse(body);
  if (!validations.success)
    return NextResponse.json(validations.error.format(), { status: 400 });
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
