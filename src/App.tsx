import { useAppSelector } from "./app/hooks";
import { Footer, Navbar } from "./components";
import { Contact, Main, Skills, Work } from "./sections";

function App() {
  const { theme } = useAppSelector((state) => state.theme);

  console.log("What are you doing here? ^.*");

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Main />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
