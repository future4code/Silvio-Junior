import GlobalState from "./context/GlobalState";
import RouterPages from "./route/RouterPages";
import GlobalStyle from "./theme/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalState>
      <GlobalStyle />
      <RouterPages/>
      </GlobalState>
    </div>
  );
}

export default App;
