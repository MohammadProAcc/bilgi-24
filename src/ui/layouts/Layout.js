import styled from "@emotion/styled";
import { Footer, Header } from "$/ui";

export function Layout(props) {
  return (
    <>
      <Header transparent={props.transparentHeader} />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.div`
  min-height: calc(100vh - 7.25rem);
`;
