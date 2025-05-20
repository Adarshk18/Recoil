import { todosAtomFamily } from "./atoms";
import { RecoilRoot, useRecoilStateLoadable, useRecoilValue } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={1} />
      <Todo id={1} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

  if (todo.state === "loading") {
    return <div>loading...</div>;
  } else if (todo.state === "hasValue") {
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
      </>
    );
  } else if (todo.state === "hasError") {
    return <div>Error while getting data from backend.</div>;
  }
}
export default App;
