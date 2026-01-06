import Home from "./components/Home/Home";

export interface FactResult {
  claim: string;
  status: "True" | "False" | "Unverified";
}

function App() {
  return <Home />;
}

export default App;
