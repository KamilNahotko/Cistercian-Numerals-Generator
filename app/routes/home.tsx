import type { Route } from "./+types/home";
import { CistercianGenerator } from "~/components/organisms";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cistercian Numerals Generator" },
    {
      name: "description",
      content: "Convert decimal numbers to Cistercian numerals",
    },
  ];
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Cistercian Numerals Generator
          </h1>
          <p className="text-slate-500">
            Convert decimal number to its Cistercian numeral.
          </p>
        </div>
        <CistercianGenerator />
      </div>
    </main>
  );
}
