import type { FactResult } from "../App";

interface Props {
  result: FactResult;
}

const statusColors = {
  True: "text-green-600",
  False: "text-red-600",
  Unverified: "text-yellow-600",
};

export default function FactCheckResult({ result }: Props) {
  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Result</h2>
      <p className="mb-2">
        <strong>Claim:</strong> {result.claim}
      </p>
      <p className={`font-bold ${statusColors[result.status]}`}>
        Status: {result.status}
      </p>
    </div>
  );
}
