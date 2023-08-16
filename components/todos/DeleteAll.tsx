"use client";

import { useRouter } from "next/navigation";
import { Todo } from "@prisma/client";

export const DeleteAll = ({ todos }: { todos: Todo[] }) => {
  const router = useRouter();
  const deleteAll = async (todos: Todo[]) => {
    await fetch(`/api/todo`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todos,
      }),
    });
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={() => deleteAll(todos)}
      className="rounded-full bg-brand-color hover:bg-brand-color-shade-1 px-12 py-1 text-base-color shadow-sm font-IBM leading-7 xl:text-xl"
    >
      Delete All
    </button>
  );
};
