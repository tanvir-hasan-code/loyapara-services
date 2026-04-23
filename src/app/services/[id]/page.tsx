import DetailsModal from "@/Components/DetailsModal/DetailsModal";
import HandleOpenModal from "@/Components/DetailsModal/HandleOpenModal";
import Link from "next/link";

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // আপনার নির্দিষ্ট আইডি দিয়ে ডাটা ফেচ করুন
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl font-bold">তথ্য পাওয়া যায়নি!</p>
      </div>
    );
  }

  const serviceData = await res.json();

  return (
    <DetailsModal>
      <div className="min-h-screen  py-10 px-4">
        <div className="max-w-xl mx-auto">
          {/* পেছনে যাওয়ার বাটন */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 mb-6 transition-colors font-medium"
          >
            ← ফিরে যান
          </Link>

          {/* মেইন কন্টেন্ট: এখানে আপনার সেই সুন্দর ডিজাইনগুলো লোড হবে */}
          <div className=" rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
            <HandleOpenModal data={serviceData} />
          </div>
        </div>
      </div>
    </DetailsModal>
  );
}
