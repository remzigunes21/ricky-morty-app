import React, { useEffect, useState } from "react";
import { CardItems, FilterItems } from "../../components";
import SearchBar from "../../components/searchBar";
import { BASE_URL } from "../../utils";
import { useDebounce } from "../../utils/hook";
import "./style.scss"

function Home() {
  const [searchTerm, setSearchTerm] = useState("r");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [selector, setSelector] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    fetchCharactersData();
  }, []);

  useEffect(() => {
    fetchDebounceApi();
  }, [debouncedSearchTerm, selector]);

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

  const fetchCharactersData = (search = "") => {
    const api = `${BASE_URL}/character?name=${search}&status=${status}&species=${species}&gender=${gender}&sort=${
      selector ? "id=desc" : "id=asc"
    }`;
    return fetch(api)
      .then((r) => r.json())
      .then((res) => res.results)
      .catch((error) => {
        console.error(error);
        return [];
      });
  };

  return (
    <div className="home-container">
      <h1>Characters</h1>
      <SearchBar setSearchTerm={setSearchTerm} setSelector={setSelector} selector={selector} />
      {isSearching && (
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-warning text-center" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="container-wrapper">
        <div className="r-row">
          <FilterItems
            status={status}
            setStatus={setStatus}
            setSpecies={setSpecies}
            setGender={setGender}
            gender={gender}
            species={species}
          />
          <div className="list-container">
            <div className="list-row">
              <CardItems results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
