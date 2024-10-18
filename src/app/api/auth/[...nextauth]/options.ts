// import
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import User from "@/models/user.model";
import { connect } from "@/config/dbConnect";

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
        await connect();

        try {
          console.log(credentials);
          const user = await User.findOne({ email: credentials.email });
          // const users = await User.find();
          // console.log(user,users);
          console.log(user);
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
    async signIn({ user }) {
      console.log("Test");
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id?.toString();
        token.email = user.email;
        token.role = user.role;
        token.firstName = user.firstName;
      }

      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.firstName = token.firstName;
      }
      return session;
    },
  },
  secret: process.env.TOKEN_SECRET,
};
