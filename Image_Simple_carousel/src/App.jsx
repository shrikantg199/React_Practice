import Carousel from "./components/Carousel";

const App = () => {
  const imageUrl = [
    "https://img.freepik.com/free-photo/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_181624-21317.jpg?w=996&t=st=1709631478~exp=1709632078~hmac=5511fcf3c3411b709adc6578d9c89e2fe093b9d73fe05ff3a456b39c260982a8",
    "https://img.freepik.com/free-vector/indian-flag-theme-independence-day-decorative-background-vector_1055-10866.jpg?w=826&t=st=1709631515~exp=1709632115~hmac=7a12a8e300398cfa2760d43bc496b71a879e9970f45dfb6b8da88ecf552816f7",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1709631538~exp=1709632138~hmac=3970a26e5b2ba0e1608dfcec4aaf47694f84a5aca5b8da0dc4040819badea681",
    "https://img.freepik.com/free-photo/digital-art-moon-boat_23-2150918859.jpg?t=st=1709634441~exp=1709638041~hmac=a47a5747e8a1f97b28674a1345be24171385aaec829617c37c18c5d60ef07323&w=1060",
    "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?t=st=1709634476~exp=1709638076~hmac=a6c6ff50fa77067897cd571ca2b420d868b868ca030bd12adf133226cd082dba&w=996",
  ];
  return (
    <div>
      <Carousel images={imageUrl} interval={2000} />
    </div>
  );
};

export default App;
