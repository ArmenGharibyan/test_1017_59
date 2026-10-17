import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Pagination() {
  const pages = [1, 2, 3, 4, 5];
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") || "";

  return (
    <div>
      {pages.map((page) => {
        return (
          <button
            onClick={() => {
              setSearchParams({ q: search, page: `${page}` });
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
