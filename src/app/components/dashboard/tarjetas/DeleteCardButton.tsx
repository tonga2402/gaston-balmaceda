'use client'

import { useRouter } from "next/navigation";

type DeleteCardButtonProps = {
  token: string;
  accountId: number;
  cardId: number;
};

const DeleteCardButton = ({
  token,
  accountId,
  cardId,
}: DeleteCardButtonProps) => {

    const router = useRouter()
    
  const  handleDelete  = async () => {
    await fetch(
        `https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards/${cardId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );
      router.refresh()
  };

  return <button onClick={handleDelete}>Eliminar</button>;
};

export default DeleteCardButton;
