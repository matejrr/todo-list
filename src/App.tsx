import "./Components/bodyContainer/body.css";
import "./Components/bodyContainer/todolist-container.css";
import "./Components/header/header.css";
import "./Components/subheader/subheader.css";
import "./Components/itemsContainer/items-container.css";
import "./Components/itemsContainer/items.css";
import { TodolistContainer } from "./Components/bodyContainer/todolist-container";
import "./App.css";
import { Header } from "./Components/header/header";
import { SubHeader } from "./Components/subheader/subheader";
import { ItemsContainer } from "./Components/itemsContainer/items-container";
import { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "./Components/itemsContainer/item";

<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
  rel="stylesheet"
/>;

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
function App() {
  const [items, setItems] = useState<Todo[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => setItems(response.data));
  }, []);

  function removeItem(clickedId: number) {
    const removal = items.filter((el) => {
      return el.id !== clickedId;
    });
    setItems(removal);
  }

  return (
    <TodolistContainer>
      <Header />
      <SubHeader items={items} setItems={setItems} />
      <ItemsContainer>
        {items.map((el) => {
          return (
            <Item
              key={el.id}
              title={el.title}
              id={el.id}
              completed={el.completed}
              removeItem={removeItem}
              items={items}
              setItems={setItems}
              userId={el.userId}
            />
          );
        })}
      </ItemsContainer>
    </TodolistContainer>
  );
}
export default App;
