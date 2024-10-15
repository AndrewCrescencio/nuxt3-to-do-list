import { Todo } from "~/types/todo.type";

export default defineEventHandler((event) => {
  // handle GET requests for the `api/todos` endpoint
  // TODO: integrar com Supabase
  const todo: Todo = {
    description: "Uma descrição para a tarefa",
    id: 1,
    title: "Fazer coisas legais",
    user_id: "223aad",
    createdAt: "",
    status: true,
  };
  return todo;
});
