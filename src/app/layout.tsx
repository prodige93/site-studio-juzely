import { Metadata } from "next"
import { Inter } from "next/font/google"
import { getServerSession } from "next-auth/next"
import { SessionProvider } from "@/components/providers/session-provider"
import { authOptions } from "@/lib/auth"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Labwear Studios OS",
  description: "The manufacturing platform of the future",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <SessionProvider session={session}>{children}</SessionProvider>
        <Analytics />
      </body>
    </html>
  )
}
