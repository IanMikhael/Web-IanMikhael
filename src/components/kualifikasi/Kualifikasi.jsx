// LIBRARY REACT
import React, { useState } from "react";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import { Muncul } from "../../utils/AnimasiHalaman";
import "./kualifikasi.css";

const Kualifikasi = () => {
  const [aktif, setAktif] = useState(1);
  const alihkanAktif = (index) => {
    setAktif(index);
  };
  return (
    <section className="kualifikasi bagian" id="kualifikasi">
      <motion.h2
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__judul"
      >
        Kualifikasi
      </motion.h2>
      <motion.span
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__subjudul"
      >
        -------------------------
      </motion.span>

      <motion.div
        variants={Muncul("atas", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="wadah__kualifikasi wadah"
      >
        <div className="tabs__kualifikasi">
          <div
            className={
              aktif === 1
                ? "tombol__kualifikasi kualifikasi__aktif tombol--flex"
                : "tombol__kualifikasi tombol--flex"
            }
            onClick={() => alihkanAktif(1)}
          >
            <i className="uil uil-graduation-cap kualifikasi__ikon"></i> Edukasi
          </div>
          <div
            className={
              aktif === 2
                ? "tombol__kualifikasi kualifikasi__aktif tombol--flex"
                : "tombol__kualifikasi tombol--flex"
            }
            onClick={() => alihkanAktif(2)}
          >
            <i className="uil uil-briefcase-alt kualifikasi__ikon"></i>{" "}
            Pekerjaan
          </div>
        </div>
        <div className="bagian__kualifikasi">
          <div
            className={
              aktif === 1
                ? "konten__kualifikasi konten__kualifikasi-aktif"
                : "konten__kualifikasi"
            }
          >
            <div className="data__kualifikasi">
              <div>
                <h3 className="judul__kualifikasi"> Mahasiswa- Sistem Informasi</h3>
                <span className="subjudul__kualifikasi">Universitas Atma Jaya Yogyakarta</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2021 - Sekarang</i>
                </div>
              </div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div></div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
              <div>
                <h3 className="judul__kualifikasi">Siswa - MIA (Ipa)</h3>
                <span className="subjudul__kualifikasi">SMAS METHODIST 2 Palembang</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2018 - 2021</i>
                </div>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div>
                <h3 className="judul__kualifikasi">Siswa</h3>
                <span className="subjudul__kualifikasi">SMPS METHODIST 1 Palembang</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2015 - 2018</i>
                </div>
              </div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div></div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
              <div>
                <h3 className="judul__kualifikasi">Siswa</h3>
                <span className="subjudul__kualifikasi">SD BINA BANGSA Palembang</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2009 - 2015</i>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              aktif === 2
                ? "konten__kualifikasi konten__kualifikasi-aktif"
                : "konten__kualifikasi"
            }
          >
            <div className="data__kualifikasi">
              <div>
                <h3 className="judul__kualifikasi">Freelance</h3>
                <span className="subjudul__kualifikasi">Joki Tugas</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2023 - Sekarang</i>
                </div>
              </div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
            </div>

            <div className="data__kualifikasi">
              <div></div>
              <div>
                <span className="pengadu__kualifikasi"></span>
                <span className="garis__kualifikasi"></span>
              </div>
              <div>
                <h3 className="judul__kualifikasi">Graphic Designer </h3>
                <span className="subjudul__kualifikasi">Jersey Futsal & Poster</span>
                <div className="kalender__kualifikasi">
                  <i className="uil uil-calendar-alt"> 2022 - Sekarang</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Kualifikasi;
