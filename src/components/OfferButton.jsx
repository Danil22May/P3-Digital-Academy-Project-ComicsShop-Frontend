/* eslint-disable react/prop-types */

export default function OfferButton({ text }) {
  return (
    <>
      <button className="rounded border-2 border-gray-500 bg-gray-400 px-8 py-2 font-medium text-white">
        {text}
      </button>
    </>
  );
}
