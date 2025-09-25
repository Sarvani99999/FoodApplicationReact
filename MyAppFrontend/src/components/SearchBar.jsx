export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search dishes..."
      className="border rounded-lg px-4 py-2 w-full mb-4"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
