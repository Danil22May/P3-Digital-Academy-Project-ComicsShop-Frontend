import { useEffect, useState } from "react";

const images = [
  "https://sm.ign.com/t/ign_es/screenshot/default/blob_n6vk.1280.jpg",
  "https://static.posters.cz/image/750/31869.jpg",
  "https://www.academiataure.com/wp-content/uploads/2024/02/1366_2000.jpg",
];
const href = [
  "https://sm.ign.com/t/ign_es/screenshot/default/blob_n6vk.1280.jpg",
  "wiki.com",
  "wiki.com",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="w-90 relative my-10 h-44 overflow-hidden rounded-xl border-4 border-gray-300 shadow sm:m-10">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <a
            href={href[index]}
            target="_blank"
            className="z-0 h-full w-full flex-shrink-0"
            key={index}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="z-0 w-full object-cover"
            />
          </a>
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow"
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
}
