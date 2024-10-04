import Nitesh from "./Nitesh";
import Nite from "./Nite";

function App() {
  return (
    /* 
        <> </> -> are called fragments | Nitesh is component | extension for component file can be
        .js or .jsx but some libraries force us to use .jsx like(vite) and file name of component shd 
        sart with capital letter.
    */
    <>
      <h1>This is my page.</h1>
      <Nitesh />
      <Nite />
    </>
  );
}

export default App;
