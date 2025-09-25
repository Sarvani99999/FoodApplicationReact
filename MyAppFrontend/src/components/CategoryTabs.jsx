export default function CategoryTabs({ categories, current, onChange, counts }) {
  return (
    <div className="tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`tab ${current === cat ? "active" : ""}`}
          onClick={() => onChange(cat)}
        >
          {cat} ({counts[cat] || 0})
        </button>
      ))}
    </div>
  );
}
