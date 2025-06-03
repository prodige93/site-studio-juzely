import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is where you would typically validate against your database
        // For demo purposes, we'll use a simple check
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials')
        }

        // Demo user - in production, you would fetch this from your database
        if (credentials.email === "demo@example.com" && credentials.password === "password") {
          return {
            id: "1",
            email: credentials.email,
            name: "Demo User",
          }
        }

        throw new Error('Invalid credentials')
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
}
