import { useAppSelector } from "./app/hooks";
import { Navbar } from "./components";
import { Main } from "./sections";

function App() {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
