import React, { useEffect, useState } from "react";
import { CardItems } from "../../components";
import SearchBar from "../../components/searchBar";
import { BASE_URL } from "../../utils";
import { useDebounce } from "../../utils/hook";

function Home() {
  const [searchTerm, setSearchTerm] = useState("rick");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(()=>{
    fetchCharactersData()
  },[])

  useEffect(() => {
    fetchDebounceApi();

  }, [debouncedSearchTerm]);

  const fetchDebounceApi = () => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetchCharactersData(debouncedSearchTerm).then((res) => {
        setIsSearching(false);
        setResults(res);
      });
    } else {
      setResults([]);
      setIsSearching(false);
    }
  };

  const fetchCharactersData = (search="") => {
    const api = `${BASE_URL}/character?name=${search}`;
    return fetch(api)
      .then((r) => r.json())
      .then((res) => res.results)
      .catch((error) => {
        console.error(error);
        return [];
      });
  };

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      {isSearching && <div>Searching ...</div>}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 mb-5">
            <div className="text-center fw-bold fs-4 mb-2">Filters</div>
            <div
              style={{ cursor: "pointer" }}
              //onClick={clear}
              className="text-primary text-decoration-underline text-center mb-3">
              Clear Filters
            </div>
            <div className="accordion" id="accordionExample">
              <div>Status</div>
              <div>Species</div>
              <div>Gender</div>
            </div>
          </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              <CardItems results={results} />
            </div>
          </div>
        </div>
      </div>
      paging
    </div>
  );
}

export default Home;
