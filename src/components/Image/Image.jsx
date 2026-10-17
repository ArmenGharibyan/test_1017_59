import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Image() {
  const { id } = useParams();
  const [singleImage, setSingleImage] = useState();
  console.log(id);

  async function findImg() {
    const response = await fetch(
      `https://pixabay.com/api/?key=46221666-a950de05f195b2a5f95fa642f&id=${id}&image_type=photo&page=2`,
    );
    const result = await response.json();

    console.log(result.hits[0]);
    setSingleImage(result.hits[0]);
  }

  useEffect(() => {
    findImg();
  }, []);

  return (
    <div>
      {singleImage ? (
        <>
          <h1>name : {singleImage?.name}</h1>
          <h2> 💖 : {singleImage?.likes}</h2>
          <h2> com : {singleImage?.comments}</h2>
          <img src={singleImage?.largeImageURL} />
        </>
      ) : (
        "...Loading"
      )}
    </div>
  );
}
