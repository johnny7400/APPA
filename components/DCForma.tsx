"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface DCFormaProps {
  dcId?: string;
}

// Placeholder korisnici dok se ne postavi baza
const SEFOVI: { id: string; name: string }[] = [];
const SUPERVIZORI: { id: string; name: string }[] = [];

export default function DCForma({ dcId }: DCFormaProps) {
  const router = useRouter();
  const isEdit = !!dcId;

  const [sifra, setSifra] = useState("");
  const [naziv, setNaziv] = useState("");
  const [sefDcId, setSefDcId] = useState("");
  const [supervizorId, setSupervizorId] = useState("");
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(isEdit ? `/api/dc/${dcId}` : "/api/dc", {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sifra, naziv, sefDcId: sefDcId || null, supervizorId: supervizorId || null, active }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message ?? "Greška pri snimanju.");
        return;
      }

      router.push("/dashboard/admin/dc");
      router.refresh();
    } catch {
      setError("Greška pri snimanju. Pokušajte ponovo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-xl">
      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Šifra DC <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              value={sifra}
              onChange={(e) => setSifra(e.target.value.toUpperCase())}
              required
              placeholder="npr. DC001"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 font-mono focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 focus:bg-white transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Naziv DC <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              value={naziv}
              onChange={(e) => setNaziv(e.target.value)}
              required
              placeholder="npr. DC Sarajevo"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Šef DC
          </label>
          <select
            value={sefDcId}
            onChange={(e) => setSefDcId(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 focus:bg-white transition-all"
          >
            <option value="">— Odaberi šefa DC —</option>
            {SEFOVI.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          {SEFOVI.length === 0 && (
            <p className="text-xs text-gray-400 mt-1.5">Nema dostupnih šefova DC. Dodaj korisnike sa ulogom "Šef DC" prvo.</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Supervizor DC
          </label>
          <select
            value={supervizorId}
            onChange={(e) => setSupervizorId(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 focus:bg-white transition-all"
          >
            <option value="">— Odaberi supervizora —</option>
            {SUPERVIZORI.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          {SUPERVIZORI.length === 0 && (
            <p className="text-xs text-gray-400 mt-1.5">Nema dostupnih supervizora. Dodaj korisnike sa ulogom "Supervizor" prvo.</p>
          )}
        </div>

        {isEdit && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActive(!active)}
              className={`relative w-11 h-6 rounded-full transition-colors ${active ? "bg-orange-500" : "bg-gray-200"}`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${active ? "translate-x-5" : ""}`} />
            </button>
            <span className="text-sm font-medium text-gray-700">
              {active ? "Aktivan" : "Neaktivan"}
            </span>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl px-4 py-3">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold rounded-xl py-3 text-sm transition-colors"
          >
            {loading ? "Snimanje..." : isEdit ? "Sačuvaj izmjene" : "Dodaj DC"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/dashboard/admin/dc")}
            className="px-6 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-xl py-3 text-sm transition-colors"
          >
            Otkaži
          </button>
        </div>
      </form>
    </div>
  );
}
