/* eslint-disable react/prop-types */
export default function Pagination({ changePage, page }) {
  const sendPage = (newPage) => {
    changePage(newPage);
  };

  const count = [1, 2, 3, 4, 5];
  return (
    <>
      <button
        onClick={() => sendPage(page - 1)}
        className="inter m-2 rounded border border-gray-400 bg-gray-300 px-6 py-1 font-light"
      >
        Prev
      </button>
      {count.map((element, index) => (
        <button
          className={
            page === index
              ? "inter m-2 rounded border border-white bg-gray-400 px-6 py-1 font-light text-white"
              : "inter m-2 rounded border border-gray-400 bg-gray-300 px-6 py-1 font-light"
          }
          key={index}
          onClick={() => sendPage(index)}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => sendPage(page + 1)}
        className="inter m-2 rounded border border-gray-400 bg-gray-300 px-6 py-1 font-light"
      >
        Next
      </button>
    </>
  );
}
