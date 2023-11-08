import prisma from '@/app/lib/prisma'
import * as bcrypt from 'bcrypt'

interface RequestBody {
  userId : string;
  password : string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const user = await prisma.user.create({
    data: {
      userId : body.userId,
      password: await bcrypt.hash(body.password, 10),
    },
  })

  const { password, ...result } = user
  return new Response(JSON.stringify(result))
}