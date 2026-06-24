import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("Admin123!", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@dc-app.com" },
    update: {},
    create: {
      name: "Administrator",
      email: "admin@dc-app.com",
      password: hashedPassword,
      role: Role.ADMIN,
      active: true,
    },
  });

  console.log("Seed završen. Admin korisnik:", admin.email);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
