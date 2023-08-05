"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BsFillStarFill } from "react-icons/bs";

const CarouselComponent = () => {
  type Movies = {
    results: any;
  };
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODRkMGI3MmFiODRkMWE0ZWRmODY5MGUxMDg4NDAwMyIsInN1YiI6IjYxNDAzNzk3NjBjNzUxMDA2MmUwNDkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lZS4xDOaQn74dMp0nc9Vb4YGmy0JW1MBUaHB_NO-jDI",
    },
  };

  const [data, setData] = useState<Movies>({ results: [] });
  const [isLoading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing", options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <Carousel autoPlay infiniteLoop showStatus={false}>
      {data.results.map((dr: any) => {
        return (
          <div className="relative h-[500px] ">
            <Image
              className="rounded"
              alt="carousel"
              fill
              src={"https://image.tmdb.org/t/p/original" + dr.backdrop_path}
            />
            <div className="h-full absolute top-0 flex flex-col justify-end text-left bg-black bg-opacity-60 py-10 px-6 w-full">
              <div className="max-w-[700px]">
                <h1 className="text-6xl font-bold">{dr.title}</h1>
                <div className="flex gap-2 text-4xl">
                  <p>{dr.release_date}</p>
                  <div className="flex items-center gap-1">
                    {dr.vote_average} <BsFillStarFill />
                  </div>
                </div>
                <p className="line-clamp-7 text-xl">{dr.overview}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
