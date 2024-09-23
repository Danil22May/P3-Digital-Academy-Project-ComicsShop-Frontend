export default function Pagination() {
  const count = [1, 2, 3];
  return (
    <>
      <button className="inter px-6 py-1 font-light bg-gray-300 rounded border border-gray-400 m-2">
        Prev
      </button>
      {count.map((element, index) => (
        <button
          className="inter px-6 py-1 font-light bg-gray-300 rounded border border-gray-400 m-2"
          key={element.id}
        >
          {index + 1}
        </button>
      ))}
      <button className="inter px-6 py-1 font-light bg-gray-300 rounded border border-gray-400 m-2">
        Next
      </button>
    </>
  );
}
