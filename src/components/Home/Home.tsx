import { useState } from "react";
import type { FactResult } from "../../App";
import FactCheckForm from "../FactCheckForm";
import FactCheckResult from "../FactCheckResult";
import MainComponent from "../MainComponent";

export default function Home() {
  const [result, setResult] = useState<FactResult | null>(null);

  return (
    <MainComponent>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 text-center text-xl font-semibold">
          Fact-Checking Portal
        </header>

        <main className="max-w-2xl mx-auto p-6">
          <FactCheckForm onCheck={setResult} />
          {result && <FactCheckResult result={result} />}
        </main>
      </div>
    </MainComponent>
  );
}
