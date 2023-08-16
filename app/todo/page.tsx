import { NewTodo } from "@/components/todos/NewTodo";
import { TodoItem } from "@/components/todos/TodoItem";
import { prisma } from "@/db";
import { Footer } from "@/components/Footer";
import { Topper } from "@/components/Topper";
import { Navbar } from "@/components/navbar/Navbar";
import { HamburgerBtn } from "@/components/navbar/HamburgerBtn";
import { DeleteAll } from "@/components/todos/DeleteAll";
import { userId } from "@/app/api/todo/route";

export default async function Todo() {
  const userID = await userId();

  const todos = await prisma.todo.findMany({
    where: {
      userId: { equals: userID },
    },
  });

  return (
    <main className="bg-background-color flex flex-col min-h-screen justify-between text-base-color relative">
      <div className="top-8 flex justify-between items-center absolute w-full mx-auto px-6 lg:hidden ">
        <Topper />
        <HamburgerBtn />
      </div>
      <Navbar />
      <section className="mx-auto my-56  ">
        <div className="relative bg-brand-contrast-color rounded-3xl py-6 mt-10 w-[350px] h-[400px] md:w-[450px]  flex flex-col">
          <h1 className="text-2xl md:text-3xl xl:text-4xl text-center">
            My to dos
          </h1>
          <NewTodo />
          <ul className="mb-20 px-6  overflow-auto">
            <TodoItem todos={todos} />
          </ul>
          <div className="absolute bottom-6 xl:bottom-9 w-full justify-center flex">
            <DeleteAll todos={todos} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
