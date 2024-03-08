import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  // Memo: hot-reloadingが発生した際に、新しいPrismaインスタンスが作成されるのではなく、既存のインスタンスが使用されるようになる
  globalThis.prisma = prismadb;
}

export default prismadb;
