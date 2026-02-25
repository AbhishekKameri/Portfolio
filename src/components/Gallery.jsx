import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Gallery = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-20 bg-black">
      
      {/* Section Title */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                   font-bold text-center mb-10 md:mb-16
                   bg-gradient-to-r from-primary to-secondary
                   bg-clip-text text-transparent"
      >
        Project & Experience Gallery
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {[
          "/photo1.jpg",
          "/photo2.jpg",
          "/photo3.jpg",
          "/photo4.jpg",
          "/photo5.jpg",
          "/photo6.jpg",
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10
                         rounded-3xl p-4 hover:border-primary
                         transition duration-500 shadow-lg"
            >
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Gallery;
