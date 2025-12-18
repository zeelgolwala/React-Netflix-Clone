// import React, { useEffect, useState } from "react";
// import { fetchFromTMDB ,imgUrl} from "../api/tmdb";
// import { useParams } from "react-router-dom";



// export default function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//        const details = await fetchFromTMDB(`movie/${id}`);

//         setMovie(details);
//         const v = await fetchFromTMDB(`movie/${id}/videos`);
//         setVideos(v.results || []);
//       } catch (error) {
//         console.error(error);
//       }
//     })();
//   }, [id]);

//   // if (!movie) return <div className="mt-32 text-center"></div>;
//   if (!movie) {
//   return <div className="mt-32 text-center text-gray-400">Loading...</div>;
// }

//   // const trailer =
//   //   videos.find((v) => v.type === "trailer" && v.site === "you tube") ||
//   //   videos[0];
//   const trailer =
//   videos.find(
//     (v) => v.type === "Trailer" && v.site === "YouTube"
//   ) || videos[0];

//   return (
//     <div>
//       <div className="max-w-6xl mx-auto mt-24 px-4">
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="md:col-span-1">
//             <img
//               src={imgUrl(movie.poster_path, "w500")}
//               alt="movie"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="md:col-span-2">
//             <h1 className="text-3xl font-bold">{movie.title}</h1>
//             <p className="text-gray-400 mt-1">{movie.tagline}</p>
//             <p className="mt-4">{movie.overview}</p>
//             <div className="mt-6">
//               {trailer ? (
//                 <div className="relative w-full pt-[56.25%]">
//                   <iframe
//                     title="trailer"
//                     src={`https://www.youtube.com/embed/${trailer.key}`}
//                     allowFullScreen
//                     className="absolute top-0 left-0 w-full h-full rounded"
//                   ></iframe>
//                 </div>
//               ) : (
//                 <div className="bg-gray-800 p-6 rounded">
//                   No Trailer Available
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromTMDB, imgUrl } from "../api/tmdb";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const details = await fetchFromTMDB(`movie/${id}`);
        setMovie(details);

        const v = await fetchFromTMDB(`movie/${id}/videos`);
        setVideos(v.results || []);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  if (!movie) {
    return <div className="mt-32 text-center text-gray-400">Loading...</div>;
  }

  const trailer =
    videos.find(
      (v) => v.type === "Trailer" && v.site === "YouTube"
    ) || videos[0];

  const poster = movie.poster_path
    ? imgUrl(movie.poster_path, "w500")
    : "/placeholder.png";

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <img src={poster} alt={movie.title} className="rounded-lg" />
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-400 mt-1">{movie.tagline}</p>
          <p className="mt-4">{movie.overview}</p>

          <div className="mt-6">
            {trailer ? (
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  title="trailer"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded"
                />
              </div>
            ) : (
              <div className="bg-gray-800 p-6 rounded">
                No Trailer Available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
