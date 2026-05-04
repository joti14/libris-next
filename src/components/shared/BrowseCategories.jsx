import Link from 'next/link';

const BrowseCategories = async () => {
    const res = await fetch('https://libris-next.vercel.app/category.json', { next: { revalidate: 60 } });
    const categories = await res.json();

    const bgColors = ['bg-red-50/50', 'bg-blue-50/60', 'bg-green-50/60'];
    const iconColors = ['bg-red-100', 'bg-blue-100', 'bg-green-100'];

    return (
        <div className="bg-orange-50 py-10 my-20">
            <div className="container mx-auto px-4">
                <div className="mb-10">
                    <h2 className="text-4xl font-bold text-zinc-900">
                        Browse by{' '}
                        <span className="text-red-800 italic">Category</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categories.map((category, index) => {
                        const name = category.name.toLowerCase();

                        return (
                            <Link
                                key={category.id}
                                href={`/all-books?category=${name}`}
                                className={`group flex items-center gap-5 rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-lg ${bgColors[index]}`}
                            >
                                <div
                                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-3xl ${iconColors[index]}`}
                                >
                                    {category.icon}
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-900">
                                        {category.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-green-800/70">
                                        {category.totalBooks} books available
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BrowseCategories;