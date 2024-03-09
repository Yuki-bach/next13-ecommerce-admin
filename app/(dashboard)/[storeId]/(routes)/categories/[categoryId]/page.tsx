import prismadb from "@/lib/prismadb";

import { CategoryForm } from "../components/category-form";

const CategoriesPage = async ({
  params
}: {
  params: { storeId: string, categoryId: string }
}) => {
  const category = await prismadb.category.findFirst({
    where: {
      id: params.categoryId
    }
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId
    }
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  )
};

export default CategoriesPage;