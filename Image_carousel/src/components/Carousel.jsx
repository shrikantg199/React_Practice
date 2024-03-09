import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Carousel = ({ images }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const handlePrev = () => {
    setcurrentIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setcurrentIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out"
          style={{ transform: `translateX(${currentIndex * 100}%)` }}
        >
          {images.map((item, index) => (
            <img
              src={item}
              alt=""
              key={index}
              className="object-cover w-96 h-60 sm:w-[900px] sm:h-[600px] p-2 sm:m-3"
            />
          ))}
        </div>
      </div>
      <MdKeyboardArrowLeft
        onClick={handlePrev}
        className="text-8xl text-black/20 cursor-pointer absolute sm:left-32 sm:top-[50%] left-20 top-[90%] p-3"
      />
      <MdKeyboardArrowRight
        onClick={handleNext}
        className="text-8xl flex cursor-pointer text-black/20 absolute sm:right-32 sm:top-[50%] right-20 top-[90%] p-3"
      />
    </div>
  );
};

export default Carousel;
