import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "./API_KEY";
const App = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const videos = async () => {
      //try-catch
      try {
        // step-1 Make a GET request
        const { data } =
          await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=10&key=${API_KEY} 
        `);

        console.log(data.items);
        //step-2 fetched video items
        setVideo(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    videos();
  }, []);
  return (
    //step-3 render data
    <div className="te m-2">
      {video.map((item, index) => (
        <div key={index} className=" flex  m-2">
          <img src={item.snippet.thumbnails.high.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default App;
