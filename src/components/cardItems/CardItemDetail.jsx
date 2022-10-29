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

  return (
    <>
      <div className="container d-flex justify-content-center mb-5">
        <div className="d-flex flex-column gap-3">
          <h1 className="text-center">{detailData.name}</h1>
          <div className={`card d-flex flex-column justify-content-center`}>
            <img className="img" src={detailData.image} alt="" />
            {status === "Dead" ? (
              <div className="badge bg-danger fs-5">{detailData.status}</div>
            ) : status === "Alive" ? (
              <div className=" badge bg-success fs-5">{detailData.status}</div>
            ) : (
              <div className="badge bg-secondary fs-5">{detailData.status}</div>
            )}

            <div className="content">
              <div className="">
                <span className="fw-bold">Gender : </span>
                {detailData.gender}
              </div>
              <div className="">
                <span className="fw-bold">Location: </span>
                {detailData.location?.name}
              </div>
              <div className="">
                <span className="fw-bold">Origin: </span>
                {detailData.origin?.name}
              </div>
              <div className="">
                <span className="fw-bold">Species: </span>
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
