// import React, { useEffect, useState } from "react";
// import { fetchFromTMDB, imgUrl } from "../api/tmdb";
// import { Link } from "react-router-dom";

// function HeroSlider() {
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     (async () => {
//       const data = await fetchFromTMDB("trending/movie/week");
//       setItems(data.results.slice(0, 5));
//     })();
//   }, []);

//   return (
//     <div>
//       <div className="relative h-[60vh] md:h-[75vh] overflow-hidden rounded-b-lg ">
//         {items.map((item, i) => (
//           <div
//             key={item.id}
//             className={`absolute inset-0 transition-opacity duration-700 ${
//               i === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             <div className="max-w-6xl mx-auto h-full flex items-center p-6">
//               <div className="max-w-2xl ">
//                 <h2 className="text-3xl md:text-5xl font-bold">{item.title}</h2>
//                 <p className="mt-4 line-clamp-3">
//                   {item.overview}style=
//                   {{
//                     backgroundImage: `linear-gradient(to right, rgba(6,6,7,.7), rgba(6,6,7,.7)),
//   url(${imgUrl(item.backdrop_path, "w780")})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 </p>
//                 <div className="mt-6 flex gap-3">
//                   <Link
//                     to={`/movie/${item.id}`}
//                     className="bg-white text-black px-4 py-2 rounded-md font-semibold"
//                   >
//                     Play
//                   </Link>

//                   <button className="bg-gray-700 px-4 py-2 rounded-md font-semibold">
//                     MyList
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* slide 2 */}

//         {/* <div
//           className="absolute inset-0 opacity-100 z-10"
//           style={{
//             backgroundImage:
//               " linear-gradient(to right, rgba(6,6,7,.7),rgba(6,6,7,.7)), url('https://images.unsplash.com/photo-1725983615817-963c4b2ccb06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="max-w-6xl mx-auto h-full flex items-center p-6">
//             <div className="max-w-2xl ">
//               <h2 className="text-3xl md:text-5xl font-bold">Movie Title</h2>
//               <p className="mt-4 line-clamp-3">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
//                 ipsam.
//               </p>
//               <div className="mt-6 flex gap-3">
//                 <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
//                   Play
//                 </button>

//                 <button className="bg-gray-700 px-4 py-2 rounded-md font-semibold">
//                   MyList
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default HeroSlider;


import React, { useEffect, useState } from "react";
import { fetchFromTMDB, imgUrl } from "../api/tmdb";
import { Link } from "react-router-dom";

function HeroSlider() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchFromTMDB("trending/movie/week");
      setItems(data?.results?.slice(0, 5) || []);
    })();
  }, []);

  if (!items.length) return null;

  return (
    <div className="relative h-[60vh] md:h-[75vh] overflow-hidden rounded-b-lg">
      {items.map((item, i) => {
        const backdrop = item.backdrop_path
          ? imgUrl(item.backdrop_path, "w1280")
          : "";

        return (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6,6,7,.75), rgba(6,6,7,.75)),
                url(${backdrop})
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="max-w-6xl mx-auto h-full flex items-center p-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold">
                  {item.title || item.name}
                </h2>

                <p className="mt-4 line-clamp-3">
                  {item.overview}
                </p>

                <div className="mt-6 flex gap-3">
                  <Link
                    to={`/movie/${item.id}`}
                    className="bg-white text-black px-4 py-2 rounded-md font-semibold"
                  >
                    Play
                  </Link>

                  <button className="bg-gray-700 px-4 py-2 rounded-md font-semibold">
                    My List
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeroSlider;
