import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'; // Swiper 11 이상 버전에서는 이렇게 모듈 추가

export default function SwiperBanner({ datakey }) {
  React.useEffect(() => {
    console.log(datakey);
  }, []);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000, // 3초마다 자동 롤링
        disableOnInteraction: false,
      }}
      loop={true} // 루프 기능 활성화
      modules={[Autoplay]} // Autoplay 모듈 활성화
      style={{ width: '100vw' }}
    >
      {
        datakey.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={v.src} alt={v.alt} style={{ width: '100vw', height: 'auto' }} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}
