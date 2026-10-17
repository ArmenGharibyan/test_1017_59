import { useEffect, useRef, useState } from "react";
import "./Images.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

export default function Images() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") || "";

  // const page = searchParams.get("page") || "";
  const searchRef = useRef();
  const navigate = useNavigate();

  async function getImages() {
    setIsLoading(true);
    let response = await fetch(
      `https://pixabay.com/api/?key=${process.env.MY_KEY}&q=${search}&image_type=photo&page=1`,
    );
    let result = await response.json();
    setIsLoading(false);
    setImages(result.hits);
    console.log(result.hits);
  }

  useEffect(() => {
    getImages();
  }, [search]);

  function findImage() {
    // setSearch(searchRef.current.value);
    setSearchParams({ q: searchRef.current.value });
  }

  return (
    <div>
      <div className="up">
        <input ref={searchRef} type="search" />
        <button
          onClick={(e) => {
            findImage();
          }}
        >
          search
        </button>
      </div>
      <div className="box">
        {!isLoading ? (
          images.map((image) => {
            return (
              <div
                key={image.id}
                onClick={() => navigate(`/images/${image.id}`)}
              >
                <h2>{image.name}</h2>
                <img width={400} src={image.largeImageURL} alt={image.name} />
              </div>
            );
          })
        ) : (
          <img src="./loading.gif" alt="loading" />
        )}
      </div>
      <Pagination />
    </div>
  );
}
