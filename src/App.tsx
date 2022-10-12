import styled from "styled-components";
import "./App.css";
import Cell from "./components/Cell";
import LeftRender from "./components/Container";

function App() {
  return (
    <Page>
      <Cell />
      <LeftRender/>
    </Page>
  );
}

export default App;

export const Page = styled.div``;
