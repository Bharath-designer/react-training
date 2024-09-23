import { TodoApp } from './TodoApp';
import { useGetTodos } from '../api/react-query';

export const ReactQueryApp = () => {
  const { data, isFetching, error,refetch } = useGetTodos();

  return (
    <TodoApp todos={data?.data} isLoading={isFetching} error={error?.message} refetch={refetch} />
  );
};
