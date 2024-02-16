import { Plus, List } from "@phosphor-icons/react";

import { Button } from "../Button";

import { Container, Menu } from "./styles";

export function Header({ handleMenuOpen }) {
  return (
    <Container>
      <Menu >
        <List onClick={handleMenuOpen}/>
      </Menu>
      <h1>Tarefas</h1>
      <Button icon={Plus} title="Nova tarefa" />
    </Container>
  );
}