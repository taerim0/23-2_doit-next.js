'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
const params = useSearchParams()


const userId = params.get('id')

console.log(`hey ${userId}`)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Link href="/">
          <Image
          src="/img/AJOU_LOGO.png"
          width={100}
          height={100}
          alt="AjouLogo"
          />
        </Link>
        <Link  href="/ultra/course">
          코스 
        </Link>
        <Link  href="/ultra/organization">
          조직 
        </Link>
        <Link  href="/ultra/calendar">
          캘린더 
        </Link>
        <Link href="/ultra/messages">
          메시지 
        </Link>
        {children}
      </body>
    </html>
  )
}