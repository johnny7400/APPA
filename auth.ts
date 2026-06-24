import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

// TODO: zamijeniti sa pravom bazom kada se postavi Neon
const DEV_USERS = [
  {
    id: "dev-admin-1",
    name: "Nikola G",
    username: "nikolag",
    password: "120024",
    role: "ADMIN" as const,
    active: true,
  },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "Korisničko ime", type: "text" },
        password: { label: "Lozinka", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        const user = DEV_USERS.find(
          (u) =>
            u.username === credentials.username &&
            u.password === credentials.password &&
            u.active
        );

        if (!user) return null;

        return {
          id: user.id,
          name: user.name,
          email: `${user.username}@dc-sistem.com`,
          role: user.role,
        };
      },
    }),
  ],
});
