import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils";

function Home() {
  const [fetchedData, updateFetchedData] = useState([]);

  useEffect(()=>{
    fetchCharactersData()
  },[])
  const fetchCharactersData = async () => {
    const api = `${BASE_URL}/character`;
    const res = await fetch(api).then((res) => res.json());
  };

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          Filter
          <div className="col-lg-8 col-12">
            <div className="row">Card Row</div>
          </div>
        </div>
      </div>
      paging
    </div>
  );
}

export default Home;
