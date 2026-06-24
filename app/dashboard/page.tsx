import { auth } from "@/auth";
import { Role } from "@prisma/client";

const ROLE_LABELS: Record<Role, string> = {
  ADMIN: "Administrator",
  SEF_DC: "Šef DC",
  KURIR: "Kurir",
  VOZAC_KAMIONA: "Vozač kamiona",
  SUPERVIZOR: "Supervizor",
};

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Dobrodošli, {session?.user?.name}
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Uloga: {ROLE_LABELS[session?.user?.role as Role]}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h2 className="text-sm font-medium text-gray-500 mb-1">Status</h2>
          <p className="text-2xl font-bold text-green-600">Aktivan</p>
        </div>
      </div>
    </div>
  );
}
