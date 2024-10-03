export default function Pagination() {
  const count = [1, 2, 3, 4, 5];
  return (
    <>
      <button className="inter m-2 rounded border border-gray-400 bg-gray-300 px-6 py-1 font-light">
        Prev
      </button>
      {count.map((element, index) => (
        <button
          className="inter m-2 rounded border border-gray-400 bg-gray-300 px-6 py-1 font-light"
          key={element.id}
        >
          {index + 1}
        </button>
      ))}
      <button className="inter m-2 rounded border border-gray-400 bg-gray-300 px-6 py-1 font-light">
        Next
      </button>
    </>
  );
}
