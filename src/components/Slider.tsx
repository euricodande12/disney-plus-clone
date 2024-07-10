import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import Movie from "../types/Movie";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
const screenWidthMinus110 = screenWidth - 110;

const Slider = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const elementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = () => {
    GlobalApi.getTrendingVideos.then((response) => {
      console.log(response.data.results[0]);
      setMovieList(response.data.results);
    });
  };

  const sliderLeft = (element: HTMLDivElement) => {
    element.scrollLeft -= screenWidthMinus110;
  };

  const sliderRight = (element: HTMLDivElement) => {
    element.scrollLeft += screenWidthMinus110;
  };

  return (
    <section>
      <HiChevronLeft
        className="hidden md:block text-[30px] absolute left-0 mt-[150px] hover:cursor-pointer"
        onClick={() => {
          if (elementRef.current) {
            sliderLeft(elementRef.current);
          }
        }}
      />
      <HiChevronRight
        className="hidden md:block text-[30px] absolute right-0 mt-[150px] hover:cursor-pointer"
        onClick={() => {
          if (elementRef.current) {
            sliderRight(elementRef.current);
          }
        }}
      />
      <div
        className="flex overflow-x-auto w-full px-4 md:px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={imageBaseUrl + item.backdrop_path}
            alt={item.title}
            className="min-w-full md:h-[310px] md:object-fill object-cover mr-5 rounded-md hover:border-[4px] border-gray-300 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
