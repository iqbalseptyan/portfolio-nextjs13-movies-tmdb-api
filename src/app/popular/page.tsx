import Image from "next/image";
import { BsFillStarFill } from "react-icons/bs";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODRkMGI3MmFiODRkMWE0ZWRmODY5MGUxMDg4NDAwMyIsInN1YiI6IjYxNDAzNzk3NjBjNzUxMDA2MmUwNDkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lZS4xDOaQn74dMp0nc9Vb4YGmy0JW1MBUaHB_NO-jDI",
  },
};

async function getPopularMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular",
    options
  );
  return res.json();
}

const page = async () => {
  const popularMovies = await getPopularMovies();

  return (
    <>
      <div className=" p-5 grid grid-cols-7 gap-5">
        {popularMovies.results.map((pm: any) => {
          return (
            <div className="relative w-52  transition-all group-hover:opacity-100 cursor-pointer">
              <Image
                src={"https://image.tmdb.org/t/p/original" + pm.poster_path}
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-lg "
              />
              <div className="opacity-0 hover:opacity-100 h-full absolute top-0 flex flex-col justify-end bg-black bg-opacity-60 p-2 ">
                <h1 className="text-2xl font-bold">{pm.title}</h1>
                <div className="flex justify-between">
                  <p>{pm.release_date}</p>
                  <div className="flex items-center gap-1">
                    {pm.vote_average} <BsFillStarFill />
                  </div>
                </div>
                <p className="line-clamp-3 ">{pm.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
