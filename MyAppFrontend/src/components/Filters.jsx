export default function Filters({ filter, setFilter }) {
  const categories = ["VEG", "NONVEG", "ICECREAMS", "SNACKS", "STARTER", "MAIN COURSE", "All"];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`px-4 py-2 rounded-lg border ${
            filter === cat
              ? "bg-green-500 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
