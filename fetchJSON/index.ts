import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  const { id, title, completed } = response.data as Todo;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`the todo with ${id} has a title of ${title} is ${completed} `);
};
