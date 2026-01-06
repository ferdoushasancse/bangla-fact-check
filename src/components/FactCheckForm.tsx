import { useState } from "react";
import type { FactResult } from "../App";

interface Props {
  onCheck: (result: FactResult) => void;
}

export default function FactCheckForm({ onCheck }: Props) {
  const [claim, setClaim] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Placeholder logic (replace with real API later)
    const statuses: FactResult["status"][] = ["True", "False", "Unverified"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    onCheck({ claim, status: randomStatus });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <label className="block mb-2 font-medium">
        Enter a claim to fact-check:
      </label>
      <textarea
        className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring"
        rows={3}
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Check Fact
      </button>
    </form>
  );
}
