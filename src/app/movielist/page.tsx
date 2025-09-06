import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllMovies } from "@/services/movieService";

interface MovieType {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
}

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_PATH;

export default async function MovieList() {
  const movies = await getAllMovies();

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="h-[]">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">Кино Сан</h2>
          <div className="flex overflow-x-auto space-x-8 w-full">
            {movies.results?.map((movie: MovieType) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <div className="flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-300 w-44">
                  <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg w-full h-80 object-cover"
                  />

                  <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">Кино сан</h2>
          <div className="flex overflow-x-auto space-x-8 w-full">
            {movies.results?.map((movie: MovieType) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <div className="flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-300 w-44">
                  <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg w-full h-80 object-cover"
                  />

                  <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
