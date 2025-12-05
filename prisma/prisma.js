// prisma/prisma.js
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pkg from "pg";

const connectionString = process.env.DATABASE_URL;
const pool = new pkg.Pool({ connectionString });

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({
  adapter,
});
