import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TokenDetails from "./components/TokenDetails";
import { DataContextProvider } from "./contexts/DataContext";

function App() {
  return (
    <div>
      <DataContextProvider>
        <Hero />
        <TokenDetails />
        <Footer />
      </DataContextProvider>
    </div>
  );
}

export default App;
