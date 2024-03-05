import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Carousel = ({ images }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const handlePrev = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div>
      <div className="relative transition-all">
        {" "}
        <div className=" flex ">
          {" "}
          <MdKeyboardArrowLeft
            onClick={handlePrev}
            className="text-8xl text-black/20 cursor-pointer absolute sm:left-32 sm:top-[50%] left-20 top-[90%] p-3 "
          />
          <MdKeyboardArrowRight
            onClick={handleNext}
            className="text-8xl flex cursor-pointer   text-black/20 absolute sm:right-32 sm:top-[50%] right-20 top-[90%] p-3"
          />
        </div>
        <div className=" flex justify-center items-center mt-12">
          <img
            src={images[currentIndex]}
            alt=""
            className="object-cover w-96 h-60 sm:w-[900px] sm:h-[600px] p-2 sm:m-3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
