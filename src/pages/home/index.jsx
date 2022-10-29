import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardItems } from "../../components";
import SearchBar from "../../components/searchBar";
import { BASE_URL } from "../../utils";

function Home() {
  const [fetchedData, updateFetchedData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetchCharactersData();
  }, []);
  const fetchCharactersData = async () => {
    const api = `${BASE_URL}/character`;
    await fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setResult(data.results);
      });
  };

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <SearchBar setSearchText={setSearchText} />
      <div className="container">
        <div className="row">
          Filter
          <div className="col-lg-8 col-12">
            <div className="row">
              <CardItems result={result} />
            </div>
          </div>
        </div>
      </div>
      paging
    </div>
  );
}

export default Home;
