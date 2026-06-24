import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("Admin123!", 12);

  const admin = await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      name: "Administrator",
      username: "admin",
      password: hashedPassword,
      role: Role.ADMIN,
      active: true,
    },
  });

  console.log("Seed završen. Admin korisnik:", admin.username);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
