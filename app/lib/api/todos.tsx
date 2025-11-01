import { apiClient } from "./client";

export const fetchTodoList = async (): Promise<any> => {
    const { data } = await apiClient.get('/api/todos');
    return data;
}

export const fetchSigleTodo = async (id: string): Promise<any> => {
    const { data } = await apiClient.get(`/api/todos/${id}`);
    return data;
}