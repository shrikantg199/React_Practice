import Carousel from "./components/Carousel";

const App = () => {
  const imageUrl = [
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://img.freepik.com/free-vector/indian-flag-theme-independence-day-decorative-background-vector_1055-10866.jpg?w=826&t=st=1709631515~exp=1709632115~hmac=7a12a8e300398cfa2760d43bc496b71a879e9970f45dfb6b8da88ecf552816f7",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1709631538~exp=1709632138~hmac=3970a26e5b2ba0e1608dfcec4aaf47694f84a5aca5b8da0dc4040819badea681",
    "https://img.freepik.com/free-photo/digital-art-moon-boat_23-2150918859.jpg?t=st=1709634441~exp=1709638041~hmac=a47a5747e8a1f97b28674a1345be24171385aaec829617c37c18c5d60ef07323&w=1060",
    "https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div>
      <Carousel images={imageUrl} interval={2000} />
    </div>
  );
};

export default App;
