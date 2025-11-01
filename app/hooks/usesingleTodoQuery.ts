import { useQuery } from "@tanstack/react-query"
import { fetchSigleTodo } from "../lib/api/todos"

export const useSingleTodoQuery = (id: string) => {
    return useQuery({
        queryKey: ['todo', id],
        queryFn: () => fetchSigleTodo(id),
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}