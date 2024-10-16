import { Todo } from "~/types/todo.type";
import { TODO_MOCK } from "~/mock";
export default defineEventHandler((event) => {
  // handle GET requests for the `api/todos` endpoint
  // TODO: integrar com Supabase
  return TODO_MOCK;
});
