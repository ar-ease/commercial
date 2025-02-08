import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";

import bcrypt from "bcrypt";

const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your@email.com" },
        password: { label: "Password", type: "password" },
        adminToken: { label: "Admin Token", type: "text", required: false },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // Find the user in the database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          select: { id: true, email: true, password: true, isAdmin: true },
        });

        if (!user) return null;

        // Check if the password is correct
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValidPassword) return null;

        // Check if the user provided the correct admin token
        if (credentials.adminToken === ADMIN_TOKEN) {
          if (!user.isAdmin) {
            // Upgrade the user to admin if the admin token is correct
            await prisma.user.update({
              where: { email: user.email },
              data: { isAdmin: true },
            });
            user.isAdmin = true;
          }
        }

        return { id: user.id, email: user.email, isAdmin: user.isAdmin };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
