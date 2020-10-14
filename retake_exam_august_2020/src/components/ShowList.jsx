import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get(
        "https://content.viaplay.se/pc-se/serier/samtliga"
      );
      setData(
        result.data._embedded["viaplay:blocks"][0]._embedded["viaplay:products"]
      );
    };
    fetchData();
  }, []);

  let dataShow = data.map((show) => {
  
    return (
      <div>
        <img src={`${show.content.images.landscape.url}`} alt="serieImage"></img>
      </div>
    );
  });

  return <div>
    {dataShow}
  </div>;
};

export default ShowList;
