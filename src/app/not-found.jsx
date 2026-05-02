import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4">
      <div className="text-center">

        <p className="text-[8rem] md:text-[12rem] font-bold text-[#8B1A1A] opacity-10 leading-none select-none"
          style={{ fontFamily: "Playfair Display, serif" }}>
          404
        </p>

        <h1 className="text-3xl font-semibold text-[#1A1208] mb-3"
          style={{ fontFamily: "Playfair Display, serif" }}>
          Page Not Found
        </h1>

        <p className="text-[#8A7F72] text-sm leading-relaxed mb-8 max-w-sm mx-auto">
          This page seems to have wandered off the shelves.
          Let's get you back to something good.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link href="/"
            className="bg-[#8B1A1A] text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-[#C0392B] transition-colors">
            Go Home
          </Link>
          <Link href="/books"
            className="border border-[#E8E0D5] text-[#1A1208] px-6 py-2.5 rounded text-sm font-medium hover:border-[#8B1A1A] hover:text-[#8B1A1A] transition-colors">
            Browse Books
          </Link>
        </div>

      </div>
    </div>
  );
}
export default NotFoundPage;