"use client";

import { useParams, useRouter } from "next/navigation";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { OrderColumn, columns } from "./columns";

interface OrderProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderProps> = ({
  data
}) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`orders (${data.length})`}
          description="Manage orders for your store."
        />
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="label" />
    </>
  );
}