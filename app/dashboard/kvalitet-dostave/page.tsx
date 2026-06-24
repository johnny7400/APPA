import Link from "next/link";

export default function KvalitetDostave() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Kvalitet dostave</h1>
          <p className="text-gray-500 text-sm">Dnevni unos i mjesečni pregledi po DC-u</p>
        </div>
        <Link
          href="/dashboard/kvalitet-dostave/novi"
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Novi izvještaj
        </Link>
      </div>

      {/* Filteri */}
      <div className="flex gap-3 mb-6">
        <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400">
          <option>Svi DC-ovi</option>
        </select>
        <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400">
          <option>Juni 2026</option>
          <option>Maj 2026</option>
          <option>April 2026</option>
        </select>
        <button className="flex items-center gap-2 border border-gray-200 hover:border-green-400 hover:text-green-600 text-gray-600 text-sm font-medium px-4 py-2.5 rounded-xl transition-colors bg-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Excel izvoz
        </button>
      </div>

      {/* Tabela placeholder */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="p-8 text-center text-gray-400">
          <svg className="w-10 h-10 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-sm">Nema izvještaja za odabrani period.</p>
        </div>
      </div>
    </div>
  );
}
