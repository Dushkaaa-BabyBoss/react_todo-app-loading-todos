import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';
// 2257
export const USER_ID = 223;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

// Add more methods here
