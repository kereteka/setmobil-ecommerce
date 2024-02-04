import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProider from 'next-auth/providers/google';

const authOption: NextAuthOptions = {
  providers: [
    GoogleProider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
};
export const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
