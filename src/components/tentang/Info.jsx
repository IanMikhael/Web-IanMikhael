// LIBRARY REACT
import React from "react";

const Info = () => {
  return (
    <div className="info__tentang jaringan">
      <div className="kotak__tentang">
        <i className="bx bx-award ikon__tentang"></i>
        <h3 className="judul__tentang">Jujur</h3>
        <span className="subjudul__tentang"></span>
      </div>
      <div className="kotak__tentang">
        <i className="bx bx-briefcase-alt ikon__tentang"></i>
        <h3 className="judul__tentang">Disiplin</h3>
        <span className="subjudul__tentang"></span>
      </div>
      <div className="kotak__tentang">
        <i className="bx bx-support ikon__tentang"></i>
        <h3 className="judul__tentang">Komunikasi</h3>
        <span className="subjudul__tentang">5/5 Aktif, Mudah beradaptasi</span>
      </div>
    </div>
  );
};

export default Info;
