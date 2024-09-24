/* eslint-disable react/prop-types */

export default function OfferButton({ text }) {
  return (
    <>
      <button className="rounded border-4 border-gray-500 bg-gray-400 px-4 py-2 font-medium text-gray-100">
        {text}
      </button>
    </>
  );
}
