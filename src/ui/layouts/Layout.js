import { BreakPoint } from "$/design";
import { Footer, Header } from "$/ui";
import styled from "@emotion/styled";
import Head from "next/head";

export function Layout(props) {
  return (
    <>
      <Head>
        <title>Bilgi 24</title>
      </Head>
      <Header headerMode={props.headerMode} authorized={props.authorized} />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.div`
  min-height: calc(100vh - 7.25rem);

  @media ${BreakPoint.device.max.md} {
    min-height: calc(100vh - 4rem);
  }
`;
