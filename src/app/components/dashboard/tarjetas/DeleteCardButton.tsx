"use client";

import { DeleteCardButtonProps } from "@/app/types/dashboard.types";
import { useRouter } from "next/navigation";

const DeleteCardButton = ({
  token,
  accountId,
  cardId,
}: DeleteCardButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    await fetch(
      `${process.env.API_URL}/api/accounts/${accountId}/cards/${cardId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    router.refresh();
  };

  return <button onClick={handleDelete}>Eliminar</button>;
};

export default DeleteCardButton;
