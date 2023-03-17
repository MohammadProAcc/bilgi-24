import { Footer, Header } from "$/ui";
import styled from "@emotion/styled";

export function Layout(props) {
  return (
    <>
      <Header headerMode={props.headerMode} />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.div`
  min-height: calc(100vh - 7.25rem);
`;
