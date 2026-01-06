import { useState } from "react";
import type { FactResult } from "../../App";
import FactCheckForm from "../FactCheckForm";
import FactCheckResult from "../FactCheckResult";
import MainComponent from "../MainComponent";

export default function Home() {
  const [result, setResult] = useState<FactResult | null>(null);

  return (
    <MainComponent>
      <div className="bg-gray-100">
        <main className="max-w-2xl mx-auto p-6">
          <FactCheckForm onCheck={setResult} />
          {result && <FactCheckResult result={result} />}
        </main>
      </div>
    </MainComponent>
  );
}
