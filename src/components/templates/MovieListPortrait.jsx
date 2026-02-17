import { Navigation, A11y } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import MovieCard from "../molecules/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const MovieListPortrait = ({
  sectionTitle,
  films,
  section,
  onTambah,
  onEdit,
  onHapus,
  showCRUD = false,
}) => {
  const navNext = `next-${section}`;
  const navPrev = `prev-${section}`;

  return (
    <section className="w-full pl-5 pr-0 lg:px-[80px] relative">

      {/* Header + tombol tambah */}
      <div className="flex justify-between items-center mb-4 pr-5 lg:pr-0">
        <h2 className="text-white text-xl lg:text-2xl font-bold">{sectionTitle}</h2>
        {showCRUD && (
          <button
            onClick={onTambah}
            className="bg-[#09147A] hover:bg-[#192DB7] text-white text-sm font-semibold px-4 py-2 rounded-2xl"
          >
            + Tambah Film
          </button>
        )}
      </div>

      {/* Kalau belum ada film */}
      {films.length === 0 ? (
        <div className="py-10 text-center text-gray-500">
          <p>Belum ada film. Klik "Tambah Film" untuk menambahkan.</p>
        </div>
      ) : (
        <>
          <Swiper
            modules={[Navigation, A11y]}
            loop={films.length > 3}
            grabCursor={true}
            navigation={{
              nextEl: `.${navNext}`,
              prevEl: `.${navPrev}`,
            }}
            breakpoints={{
              320: { slidesPerView: 3.2, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {films.map((film) => (
              <SwiperSlide key={film.id}>
                <div className="relative group">

                  <MovieCard
                    image={film.image}
                    title={film.title}
                    rating={film.rating}
                    isPortrait={true}
                  >
                    {/* Badge Top 10 */}
                    <div className="bg-[#b71f1d] text-white p-1 lg:px-2 lg:py-1 rounded-br-md rounded-tl-md lg:rounded-br-lg lg:rounded-tl-lg absolute top-0 right-2 lg:right-4 z-20 text-[8px] lg:text-[14px]">
                      <p className="text-center">Top<br /><span>10</span></p>
                    </div>
                  </MovieCard>

                  {/* Tombol edit & hapus saat hover */}
                  {showCRUD && (
                    <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-1 lg:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                      <button
                        onClick={() => onEdit(film)}
                        className="flex-1 bg-[#2F3334] hover:bg-[#3D4142] text-white text-[9px] lg:text-xs font-medium py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onHapus(film)}
                        className="flex-1 bg-red-700 hover:bg-red-800 text-white text-[9px] lg:text-xs font-medium py-1 rounded"
                      >
                        Hapus
                      </button>
                    </div>
                  )}

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol navigasi */}
          <div className={`${navPrev} hidden lg:flex items-center justify-center bg-[#2F3334] hover:bg-black text-white rounded-full w-10 h-10 cursor-pointer absolute top-[55%] left-15 -translate-y-1/2 z-10`}>
            <FaArrowLeft />
          </div>
          <div className={`${navNext} hidden lg:flex items-center justify-center bg-[#2F3334] hover:bg-black text-white rounded-full w-10 h-10 cursor-pointer absolute top-[55%] right-15 -translate-y-1/2 z-10`}>
            <FaArrowRight />
          </div>
        </>
      )}

    </section>
  );
};

export default MovieListPortrait;