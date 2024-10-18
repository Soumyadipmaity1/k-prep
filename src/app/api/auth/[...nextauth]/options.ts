// import 
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import GitHubProvider from "next-auth/providers/github";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "ab@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        // await connect();

        try {
          console.log(credentials);
          const user = await User.findOne({ email: credentials.email });
          // const users = await User.find();
          // console.log(user,users);
          if (!user) {
            throw new Error("User not found");
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isValid) {
            throw new Error("Wrong password");
          }

          return user;
        } catch (error: any) {
          throw new Error(error.message || "Authorization failed");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user.id?.toString();
        token.email = user.email;
      }

      return token;
    },
    async session({ session, user, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: process.env.TOKEN_SECRET,
};



