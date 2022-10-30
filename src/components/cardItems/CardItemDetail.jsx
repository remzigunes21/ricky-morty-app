import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../utils";

const CardItemDetail = () => {
  const [detailData, setDetailData] = useState([]);
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDetailData();
  }, []);

  const fetchDetailData = async () => {
    const api = `${BASE_URL}/character/${id}`;
    const data = await fetch(api).then((res) => res.json());
    setStatus(data.status);
    setDetailData(data);
  };

  if (detailData.length === 0) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-warning text-center" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="detail-container">
        <div className="wrapper">
          <h1 className="text-center">{detailData.name}</h1>
          <div className={`detail-card card`}>
            <img className="img" src={detailData.image} alt="" />
            {status === "Dead" ? (
              <h2 className="bg-danger">{detailData.status}</h2>
            ) : status === "Alive" ? (
              <h2 className="bg-success">{detailData.status}</h2>
            ) : (
              <h2 className="bg-secondary">{detailData.status}</h2>
            )}

            <div className="content">
              <div>
                <span>Gender : </span>
                {detailData.gender}
              </div>
              <div>
                <span>Location: </span>
                {detailData.location?.name}
              </div>
              <div>
                <span>Origin: </span>
                {detailData.origin?.name}
              </div>
              <div>
                <span>Species: </span>
                {detailData.species}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="back-btn-container">
        <button className="btn btn-primary" onClick={() => navigate(-1)} style={{ textAlign: "center" }}>
          BACK
        </button>
      </div>
    </>
  );
};

export default CardItemDetail;
