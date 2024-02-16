import { CheckCircle, House, Folder, PlusSquare, Note, SignOut, X } from "@phosphor-icons/react";

import { Container, Footer, Nav, Title, Header, Button } from "./styles";

export function SideMenu({ menuIsOpen, handleCloseMenu }) {
  return (
    <Container data-menuIsOpen = {menuIsOpen}>
      <Header>
        <Title><CheckCircle /> e-Tasks</Title>
        <Button >
          <X onClick={handleCloseMenu}/>
        </Button>
      </Header>

      <Nav>
        <a href="#" data-menu-active="true"><House /> Home</a>
        <a href="#"><PlusSquare /> Nova tarefa</a>
        <a href="#"><Folder /> Projetos</a>
        <a href="#"><Note /> Relatórios</a>
      </Nav>

      <Footer>
        <img src="https://avatars.githubusercontent.com/u/104041138?s=400&u=45d3d6131060744044938fafe7cd98c1847be438&v=4" alt="Foto do usuário" />
        <div>
          <strong>Marlus Weber Midginski</strong>
          <small>marluswm7@gmail.com</small>
        </div>

        <Button type="button">
          <SignOut />
        </Button>
      </Footer>
    </Container>
  );
}