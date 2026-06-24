export default function VozaciPage() {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <span>Admin Dashboard</span>
        <span>/</span>
        <span className="text-gray-700 font-medium">Vozači</span>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Vozači</h1>
        <p className="text-gray-500 text-sm">Kuriri, vozači kamiona i ispomoć</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-gray-400">
        <svg className="w-10 h-10 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        <p className="text-sm">Još uvijek nema vozača. Dodaj prvog.</p>
      </div>
    </div>
  );
}
