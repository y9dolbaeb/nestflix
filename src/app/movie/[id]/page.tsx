"use client";

import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MovieType {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
}

function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    if (id) {
      const FetchMovie = async () => {
        try {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=2ea05c2f444f6fe57492711ba6641efa`
          );
          const data = await res.json();
          setMovie(data);
        } catch (error) {
          console.log(error);
        }
      };
      FetchMovie();
    }
  }, [id]);

  if (!movie) return <div>Уншиж байна... </div>;
  console.log(`${process.env.IMAGE_PATH}${movie.backdrop_path}`);

  return (
    <div className="bg-black text-white min-h-screen ">
      <Header />
      <div
        className="relative w-full h-[500px] bg-cover bg-center mt-16"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to to-transparent p-8 flex flex-col justify-end ">
          <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg max-w-xl">{movie.overview}</p>
          <div className="mt-4">
            <Link href={`/movie/${movie.id}`}>
              <button
                onClick={() => setShowTrailer(true)}
                className="bg-red-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-700"
              >
                Үзэх
              </button>
            </Link>
          </div>
        </div>
      </div>
      {showTrailer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="relative w-3/4 h-3/4 ">
            <iframe
              width={"100%"}
              height={"100%"}
              src={`https://www.youtube.com/embed/8Bkq6CLTO-s?si=bH6Zuq1vGWrZzzKU`}
              title={movie.title}
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute top-2 right-2 bg-red-600 text-white px-4 py-2 rounded-full"
            >
              Х
            </button>
          </div>
        </div>
      )}
      <div className="p-8 ">
        <p className="w-2/3 text-justify opacity-65">
          The sprawling world of The Conjuring returns to its flagship series
          with paranormal investigators Patrick Wilson and Vera Farmiga
          returning as Ed and Lorraine Warren. Franchise veteran Michael Chaves
          (The Curse of La Llorona, The Nun II, The Conjuring: The Devil Made Me
          Do It) is directing. — Adrienne C.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default page;
