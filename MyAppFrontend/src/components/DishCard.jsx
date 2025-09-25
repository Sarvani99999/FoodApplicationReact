export default function DishCard({ dish, onAdd }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h2 className="text-lg font-semibold">{dish.name}</h2>
      <p className="text-gray-600 text-sm">{dish.description}</p>
      <p className="text-green-600 font-bold mt-2">₹{dish.price}</p>
      <button
        onClick={() => onAdd(dish)}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
