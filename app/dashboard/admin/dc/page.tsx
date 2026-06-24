import Link from "next/link";

// Placeholder dok se ne postavi baza
const DC_LIST: {
  id: string;
  sifra: string;
  naziv: string;
  sefDc: string | null;
  supervizor: string | null;
  active: boolean;
}[] = [];

export default function DCListPage() {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/dashboard/admin" className="hover:text-orange-500 transition-colors">
          Admin Dashboard
        </Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Distributivni centri</span>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Distributivni centri</h1>
          <p className="text-gray-500 text-sm">Svaki DC ima šifru, šefa i supervizora</p>
        </div>
        <Link
          href="/dashboard/admin/dc/novi"
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Dodaj DC
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        {DC_LIST.length === 0 ? (
          <div className="p-12 text-center text-gray-400">
            <svg className="w-10 h-10 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <p className="text-sm font-medium text-gray-500 mb-1">Nema distributivnih centara</p>
            <p className="text-xs text-gray-400">Dodaj prvi DC klikom na dugme gore</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Šifra</th>
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Naziv DC</th>
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Šef DC</th>
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Supervizor</th>
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3.5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {DC_LIST.map((dc) => (
                <tr key={dc.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono font-medium text-orange-600">{dc.sifra}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{dc.naziv}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{dc.sefDc ?? <span className="text-gray-300">—</span>}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{dc.supervizor ?? <span className="text-gray-300">—</span>}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      dc.active ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-500"
                    }`}>
                      {dc.active ? "Aktivan" : "Neaktivan"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/dashboard/admin/dc/${dc.id}`}
                      className="text-sm font-medium text-orange-500 hover:text-orange-700 transition-colors"
                    >
                      Uredi
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
