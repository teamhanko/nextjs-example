"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export function NewTodo() {
  const [newItem, setNewItem] = useState("");

  const router = useRouter();
  const create = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await fetch(`/api/todo`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newItem,
      }),
    });

    router.refresh();
    setNewItem("");
  };

  return (
    <div className="mx-8 mt-4 mb-6">
      <form onSubmit={create} className="flex gap-3 items-center">
        <input
          type="text"
          name="title"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New todo"
          className=" border border-color-shade-1 rounded-full flex-1  py-1 px-2 outline-none focus-within:border-base-color bg-background-color focus-within:bg-background-color/30 placeholder:text-color-shade-1"
          required
        />
        <button
          type="submit"
          className="  bg-brand-contrast-color rounded-full p-1 border border-color-shade-1 text-color-shade-1 hover:text-base-color text-base hover:ring-0 hover:ring-base-color hover:border-base-color"
        >
          <p className=" text-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus"
            >
              <line x1="12" x2="12" y1="5" y2="19" />
              <line x1="5" x2="19" y1="12" y2="12" />
            </svg>
          </p>
        </button>
      </form>
    </div>
  );
}
