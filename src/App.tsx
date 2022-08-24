import { useAppSelector } from "./app/hooks";
import { Navbar } from "./components";
import { Main, Work } from "./sections";

function App() {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Main />
      <Work />
    </div>
  );
}

export default App;
