import Link from "next/link";
import DCForma from "@/components/DCForma";

export default function NoviDCPage() {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/dashboard/admin" className="hover:text-orange-500 transition-colors">Admin Dashboard</Link>
        <span>/</span>
        <Link href="/dashboard/admin/dc" className="hover:text-orange-500 transition-colors">Distributivni centri</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Novi DC</span>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Dodaj distributivni centar</h1>
        <p className="text-gray-500 text-sm">Unesite podatke za novi DC</p>
      </div>

      <DCForma />
    </div>
  );
}
