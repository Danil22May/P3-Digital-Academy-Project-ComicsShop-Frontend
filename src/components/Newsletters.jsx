export default function Newsletters() {
  return (
    <form method="post">
      <h2 className="text-small px-2 font-light italic text-gray-500">
        Subscribe to our newsletters
      </h2>
      <input
        type="text"
        className="rounded border-2 border-gray-400 px-5"
        placeholder="___________"
      />
      <button
        type="submit"
        className="m-2 rounded border-2 border-gray-400 bg-gray-400 px-2 text-gray-600"
      >
        Submit
      </button>
    </form>
  );
}
