import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

/*
TODO: 这个路由的功能是 接收 templateSlug 页面生成的内容存储到 Neon数据库
MARK: 存储到 Neon数据库
*/
export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('User not Authenticated', { status: 401 })
    }

    const { title, description, templateUsed } = await req.json()

    const newOutput = await db.aIOutput.create({
      data: {
        userId: userId,
        title: title,
        description: description,
        templateUsed: templateUsed,
      },
    })

    revalidatePath('/')
    return NextResponse.json(newOutput)

  } catch (error) {
    return new NextResponse('AI generation error', { status: 500 })
  }
}

