import { ReactNode } from "react";

interface todolistContainerBox {
  children: ReactNode;
}

export function TodolistContainer(props: todolistContainerBox) {
  return <div className="todolist-container">{props.children}</div>;
}
