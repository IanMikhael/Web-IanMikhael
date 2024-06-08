// LIBRARY REACT
import React, { useState } from "react";
// LIBRARY FRAMER MOTION
import { motion } from "framer-motion";
// LIBRARY SAYA
import { Muncul } from "../../utils/AnimasiHalaman";
import "./layanan.css";

const Layanan = () => {
  const [modal, setModal] = useState(0);

  const bukakanModal = (index) => {
    setModal(index);
  };

  return (
    <div className="layanan bagian" id="layanan">
      <motion.h2
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__judul"
      >
        Pengalaman & Organisasi
      </motion.h2>
      <motion.span
        variants={Muncul("bawah", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="bagian__subjudul"
      >
        --------------------------------
      </motion.span>

      <motion.div
        variants={Muncul("atas", 0.3)}
        initial="hilang"
        whileInView={"ada"}
        viewport={{ once: false, amount: 0 }}
        className="wadah__layanan wadah jaringan"
      >
        <div className="konten__layanan">
          <div>
            <i className="uil uil-web-grid ikon__layanan"></i>
            <h3 className="judul__layanan">Asisten Dosen Mata Kuliah SIWEB </h3>
          </div>

          <span className="tombol__layanan" onClick={() => bukakanModal(1)}>
            Lihat Selengkapnya{" "}
            <i className="uil uil-arrow-right ikon__tombol-layanan"></i>
          </span>

          <div
            className={
              modal === 1 ? "modal__layanan modal-aktif" : "modal__layanan"
            }
          >
            <div className="modal__layanan-konten">
              <i
                onClick={() => bukakanModal(0)}
                className="uil uil-times modal__layanan-tutup"
              ></i>
              <h3 className="modal__layanan-judul">
                Asisten Dosen Mata Kuliah Sistem Informasi Berbasis Web
              </h3>
              <p className="modal__layanan-deskripsi">
                Saya mempunyai pengalaman menjadi Asisten Dosen untuk Mata
                Kuliah Sistem Informasi berbasis web yang ditujukan bagi
                mahasiswa angkatan 2022 di jurusan Sistem Informasi. Mata kuliah
                ini merupakan salah satu mata kuliah wajib yang diselenggarakan
                pada semester 4 atau semester genap. Mata kuliah Sistem Informasi
                berbasis web ini menggunakan framework Next.js dan dilengkapi
                oleh PostgreSQL, Tailwind CSS, dan TypeScript. Melalui peran
                ini, saya berkomitmen untuk membantu mahasiswa memahami konsep
                dan aplikasi Sistem Informasi berbasis web secara mendalam,
                serta mempersiapkan mereka untuk sukses dalam karier mereka di
                bidang teknologi informasi. Dalam peran ini, saya bertanggung
                jawab untuk mendukung dosen dalam berbagai aspek pengajaran,
                termasuk:
              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Menyusun dan mengorganisir materi perkuliahan.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Membantu dalam penyusunan soal ujian dan tugas
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Memfasilitasi diskusi kelas dan kelompok belajar
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Memberikan bimbingan dan konsultasi akademik kepada
                    mahasiswa
                  </p>
                </li>

                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Menilai tugas dan ujian mahasiswa serta memberikan umpan
                    balik yang konstruktif
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="konten__layanan">
          <div>
            <i className="uil uil-setting ikon__layanan"></i>
            <h3 className="judul__layanan">
              Ketua Panitia FEWDC 2023 (Nasional)
            </h3>
          </div>

          <span className="tombol__layanan" onClick={() => bukakanModal(2)}>
            Lihat Selengkapnya{" "}
            <i className="uil uil-arrow-right ikon__tombol-layanan"></i>
          </span>

          <div
            className={
              modal === 2 ? "modal__layanan modal-aktif" : "modal__layanan"
            }
          >
            <div className="modal__layanan-konten">
              <i
                onClick={() => bukakanModal(0)}
                className="uil uil-times modal__layanan-tutup"
              ></i>
              <h3 className="modal__layanan-judul">
                Ketua Panitia FEWDC 2023 (Nasional)
              </h3>
              <p className="modal__layanan-deskripsi">
                Saya menjabat sebagai Ketua Panitia untuk Front End Web
                Development Competition (FEWDC) 2023, sebuah kompetisi nasional
                yang ditujukan untuk para pengembang web front-end. Kompetisi
                ini dirancang untuk mengidentifikasi dan menghargai talenta-talenta
                terbaik di bidang pengembangan web front-end di seluruh
                Indonesia, dengan tema khusus tahun ini yaitu "UMKM" (Usaha
                Mikro, Kecil, dan Menengah).
                Sebagai Ketua Panitia, tanggung jawab saya meliputi:
              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Merencanakan dan mengorganisir seluruh rangkaian acara
                    kompetisi dari awal hingga akhir.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Memimpin tim panitia untuk memastikan semua aspek acara
                    berjalan lancar dan sesuai jadwal.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Berkoordinasi dengan sponsor, juri, dan peserta untuk
                    memastikan keterlibatan dan dukungan yang optimal.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Mengawasi proses pendaftaran, seleksi, dan penilaian
                    peserta.
                  </p>
                </li>

                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                    Mengatasi berbagai tantangan dan masalah yang muncul selama
                    perencanaan dan pelaksanaan acara.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="konten__layanan">
          <div>
            <i className="uil uil-web-section ikon__layanan"></i>
            <h3 className="judul__layanan">
            Wakil Ketua Kelompok Study Application & Database 22/23
            </h3>
          </div>

          <span className="tombol__layanan" onClick={() => bukakanModal(3)}>
            Lihat Selengkapnya{" "}
            <i className="uil uil-arrow-right ikon__tombol-layanan"></i>
          </span>

          <div
            className={
              modal === 3 ? "modal__layanan modal-aktif" : "modal__layanan"
            }
          >
            <div className="modal__layanan-konten">
              <i
                onClick={() => bukakanModal(0)}
                className="uil uil-times modal__layanan-tutup"
              ></i>
              <h3 className="modal__layanan-judul">
              Wakil Ketua Kelompok Study Application & Database 22/23
              </h3>
              <p className="modal__layanan-deskripsi">
              Saya menjabat sebagai Wakil Ketua Kelompok Study Application & Database untuk periode 2022/2023. 
              Kelompok studi ini berfokus pada pemahaman MySQL dan pengembangan sistem informasi berbasis web menggunakan CodeIgniter 4

              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Mendukung Ketua Kelompok dalam perencanaan dan pelaksanaan kegiatan kelompok studi
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Memantau kemajuan anggota dan memberikan umpan balik konstruktif untuk membantu mereka berkembang.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Mengelola komunikasi internal dan eksternal kelompok studi untuk memastikan aliran informasi yang efektif.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Mengatasi berbagai tantangan dan masalah yang muncul dalam pelaksanaan kegiatan kelompok.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="konten__layanan">
          <div>
            <i className="uil uil-edit ikon__layanan"></i>
            <h3 className="judul__layanan">
            Wakil Ketua, Komunitas Futsal Fakultas Teknologi Industri UAJY 23/24
            </h3>
          </div>

          <span className="tombol__layanan" onClick={() => bukakanModal(4)}>
            Lihat Selengkapnya{" "}
            <i className="uil uil-arrow-right ikon__tombol-layanan"></i>
          </span>

          <div
            className={
              modal === 4 ? "modal__layanan modal-aktif" : "modal__layanan"
            }
          >
            <div className="modal__layanan-konten">
              <i
                onClick={() => bukakanModal(0)}
                className="uil uil-times modal__layanan-tutup"
              ></i>
              <h3 className="modal__layanan-judul">
              Wakil Ketua, Komunitas Futsal Fakultas Teknologi Industri UAJY 23/24
              </h3>
              <p className="modal__layanan-deskripsi">
              Komunitas Futsal Fakultas Teknologi Industri Universitas Atma Jaya Yogyakarta (UAJY) adalah wadah bagi mahasiswa yang memiliki 
              minat dan bakat dalam olahraga futsal.

              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Mendukung Ketua dalam merencanakan, mengorganisir, dan mengawasi semua kegiatan dan program komunitas.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Menggantikan Ketua dalam memimpin rapat dan kegiatan komunitas ketika Ketua berhalangan hadir.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Bekerja sama dengan Ketua dalam menyusun jadwal latihan rutin, pertandingan, dan event futsal lainnya.
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Membantu dalam rekrutmen anggota baru dan memastikan semua anggota merasa diterima dan terlibat aktif.
                  </p>
                </li>

                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Mengkoordinasikan kolaborasi dan partisipasi dalam turnamen atau acara futsal eksternal.
                  </p>
                </li>

                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Mencatat dan mengelola Data Absen Hadir 
                  </p>
                </li>


              </ul>
            </div>
          </div>
        </div>


        <div className="konten__layanan">
          <div>
            <i className="uil uil-edit ikon__layanan"></i>
            <h3 className="judul__layanan">
            Koordinator Komunikasi dan Informasi, FTI FUTSAL LEAGUE 2023
            </h3>
          </div>

          <span className="tombol__layanan" onClick={() => bukakanModal(5)}>
            Lihat Selengkapnya{" "}
            <i className="uil uil-arrow-right ikon__tombol-layanan"></i>
          </span>

          <div
            className={
              modal === 5 ? "modal__layanan modal-aktif" : "modal__layanan"
            }
          >
            <div className="modal__layanan-konten">
              <i
                onClick={() => bukakanModal()}
                className="uil uil-times modal__layanan-tutup"
              ></i>
              <h3 className="modal__layanan-judul">
              Koordinator Komunikasi dan Informasi, FTI FUTSAL LEAGUE 2023
              </h3>
              <p className="modal__layanan-deskripsi">
              Saya Menjabat sebagai Komunikasi dan Informasi di event FTI FUTSAL LEAGUE 2023
               yang dimana event tersebut merupakan acara tahunan khusus Fakultas Teknologi Industri di bidang Olahraga yaitu Futsal

              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Membuat Desain Poster, Story Instagram, Feed Instagram
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Mendokumentasikan aktivitas yang terjadi di lapangan.
                  </p>
                </li>
              
              </ul>
            </div>
          </div>
        </div>


        <div className="konten__layanan">
          <div>
            <i className="uil uil-edit ikon__layanan"></i>
            <h3 className="judul__layanan">
            Ketua Kelompok Kuliah Kerja Nyata 85, Universitas Atma Jaya Yogyakarta
            </h3>
          </div>

          <span className="tombol__layanan" onClick={() => bukakanModal(6)}>
            Lihat Selengkapnya{" "}
            <i className="uil uil-arrow-right ikon__tombol-layanan"></i>
          </span>

          <div
            className={
              modal === 6 ? "modal__layanan modal-aktif" : "modal__layanan"
            }
          >
            <div className="modal__layanan-konten">
              <i
                onClick={() => bukakanModal()}
                className="uil uil-times modal__layanan-tutup"
              ></i>
              <h3 className="modal__layanan-judul">
              Ketua Kelompok Kuliah Kerja Nyata 85, Universitas Atma Jaya Yogyakarta
              </h3>
              <p className="modal__layanan-deskripsi">
              Saya Menjabat sebagai Ketua kelompok 67 di Kuliah Kerja Nyata-85 yang ditempatkan di Nujo, Gunung Kidul

              </p>

              <ul className="modal__layanan-daftar jaringan">
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Memimpin, mengelola jadwal, dan bertanggung jawab atas semua kegiatan Kuliah Kerja
                  <p>Nyata ( KKN ) di Padukuhan Nujo, Pucung, Gunung Kidul</p>
                  </p>
                </li>
                <li className="modal__layanan-daftar-item">
                  <i className="uil uil-check-circle modal__layanan-daftar-ikon"></i>
                  <p className="modal__layanan-info">
                  Membantu dalam pembuatan Desain Story dan Feed Instagram kelompok KKN
                  </p>
                </li>
              
              </ul>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Layanan;
