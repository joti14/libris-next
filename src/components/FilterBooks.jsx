import Link from "next/link";

const FilterBooks = async ({ activeCategory }) => {
    const res = await fetch('https://libris-next.vercel.app/category.json');
    const categories = await res.json();

    return (
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 lg:p-6 shadow-sm">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-black">Filter Categories</h2>
            <ul className="flex flex-col gap-2 lg:gap-3 mt-4 lg:mt-6">
                <li
                    className={`rounded-md font-bold text-sm lg:text-base
                        ${!activeCategory
                            ? 'bg-yellow-700 text-white'
                            : 'hover:bg-slate-100'
                        }`}
                >
                    <Link
                        href="/all-books"
                        className="block p-2"
                    >
                        All Books
                    </Link>
                </li>
                {categories.map(category => (
                    <li
                        key={category.id}
                        className={`rounded-md font-bold text-sm lg:text-base
                            ${activeCategory === category.name.toLowerCase()
                                ? 'bg-yellow-700 text-white'
                                : 'hover:bg-slate-100'
                            }`}
                    >
                        <Link
                            href={`?category=${category.name.toLowerCase()}`}
                            className="block p-2"
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterBooks;