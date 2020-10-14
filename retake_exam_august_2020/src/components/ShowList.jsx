import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";

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
      <div class="display-show">
        <img
          src={`${show.content.images.landscape.url}`}
          alt="serieImage"
          data-cy="image"
        ></img>
      </div>
    );
  });

  return <Container>{dataShow}</Container>;
};

export default ShowList;
