"use client";

import { useRouter } from "next/navigation";
import { Todo } from "@prisma/client";

export function TodoItem({ todos }: { todos: Todo[] }) {
  const router = useRouter();
  const update = async (todo: Todo) => {
    await fetch(`/api/todo/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !todo.complete,
      }),
    });
    router.refresh();
  };

  const deleteTodo = async (todo: Todo) => {
    await fetch(`/api/todo/${todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todo.id,
      }),
    });

    router.refresh();
  };

  return (
    <div>
      {todos.map((todo) => {
        const id = todo.id;
        const title = todo.title;
        const checked = todo.complete;

        return (
          <li key={id} className="flex px-4">
            <span className="flex gap-2 flex-1">
              <input
                type="checkbox"
                name="check"
                checked={checked}
                onChange={() => update(todo)}
                className="peer cursor-pointer accent-color-shade-1 "
              />
              <label
                htmlFor={id}
                className="peer-checked:line-through peer-checked:text-color-shade-1 cursor-pointer xl:text-xl  w-[150px] h-6"
              >
                {title}
              </label>
            </span>
            <button
              onClick={() => deleteTodo(todo)}
              className="text-color-shade-1  hover:text-base-color mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </li>
        );
      })}
    </div>
  );
}
