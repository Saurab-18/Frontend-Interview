import "./App.css";
import { RenderPropPattern } from "./components/RenderPropPattern";

function App() {
  return (
    <>
      <RenderPropPattern
        render={() => {
          return <h1>I am Render Prop Pattern Example</h1>;
        }}
      />
    </>
  );
}

export default App;
