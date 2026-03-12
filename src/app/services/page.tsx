import SearchAndFilter from "./components/SearchAndFilter/SearchAndFilter";
import ServiceCard from "./components/ServiceCard/ServiceCard";

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>;
}) {
  const params = await searchParams;
  const search = params.search || "";
  const category = params.category || "";

  // API কল (অবশ্যই আপনার API URL ঠিক থাকতে হবে)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services?search=${search}&category=${category}`,
    { cache: "no-store" }
  );
//   const services = await res.json();
  	const services: [] = []

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* হেডার */}
      <div className="bg-slate-900 pt-10 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">লয়াপাড়া সেবা ডিরেক্টরি</h1>
          <p className="text-gray-400">আপনার প্রয়োজনীয় দক্ষ কারিগর এখন এক ক্লিকেই</p>
        </div>
      </div>

      {/* মেইন কন্টেন্ট */}
      <div className="max-w-6xl mx-auto px-4 -mt-10">
        <SearchAndFilter />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.length > 0 ? (
            services.map((service: any) => (
              <ServiceCard key={service._id} service={service} />
            ))
          ) : (
            <div className="col-span-full bg-white rounded-2xl p-20 text-center border shadow-sm">
              <div className="text-5xl mb-4">🔍</div>
              <h2 className="text-xl font-bold text-gray-800">কোনো ফলাফল পাওয়া যায়নি!</h2>
              <p className="text-gray-500">অন্য কোনো নাম বা ক্যাটাগরি দিয়ে চেষ্টা করুন।</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}