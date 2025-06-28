import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 슬라이드 데이터 타입 정의
export interface SlideData {
  id: number;
  title: string;
  description: string;
  image: {
    desktop: string;
    mobile: string;
  };
}

// 컴포넌트 Props 타입 정의
interface SliderComponentProps {
  slides: SlideData[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  speed?: number;
  className?: string;
}

const SliderComponent = ({ 
  slides, 
  autoplay = true, 
  autoplaySpeed = 5000, 
  speed = 500,
  className = ""
}: SliderComponentProps) => {
  
  // 슬라이드 설정
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed,
    draggable: true,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-white bg-opacity-50"></div>
    ),
  };

  return (
    <div className="w-full">
      {/* react-slick 슬라이더 */}
      <Slider {...settings} className={`rounded-xl overflow-hidden ${className}`}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[430px] rounded-3xl overflow-hidden">
            <picture className="w-full h-full">
              <source 
                media="(min-width: 768px)" 
                srcSet={slide.image.desktop}
              />
              <img 
                src={slide.image.mobile} 
                alt={slide.title}
                className="w-full h-full object-contain"
              />
            </picture>
            {/* 텍스트 오버레이 */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-4 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-base sm:text-lg md:text-xl opacity-90">{slide.description}</p>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent; 