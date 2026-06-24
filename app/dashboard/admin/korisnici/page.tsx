export default function KorisniciPage() {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <span>Admin Dashboard</span>
        <span>/</span>
        <span className="text-gray-700 font-medium">Korisnici</span>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Korisnici</h1>
        <p className="text-gray-500 text-sm">Korisnici web aplikacije — Admin, Šef DC, Supervizor</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-gray-400">
        <svg className="w-10 h-10 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className="text-sm">Još uvijek nema korisnika. Dodaj prvog.</p>
      </div>
    </div>
  );
}
