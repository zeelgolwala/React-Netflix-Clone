// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const BASE = import.meta.env.VITE_TMDB_BASE_URL;

// // export async function fetchFromTMDB(endpoint, params = { }) {
// //     const url = new URL(`${BASE}/${endpoint}`);
// //     url.searchParams.set("api_key", API_KEY);
// //     object.entries(params).forEach(([k, v]) => 
// //         url.searchParams.set(k, v)
// //     );

// //     const res = await fetch(url.toString());
// //     if (!res.ok) throw new Error("TMDB fetch failed");
// //     return res.json();
// // }

// export async function fetchFromTMDB(endpoint, params = {}) {
//   const url = new URL(`${BASE_URL}/${endpoint}`);

//   Object.entries(params).forEach(([k, v]) => {
//     url.searchParams.set(k, v);
//   });

//   const res = await fetch(url, options);
//   return res.json();
// }


// export const imgUrl = (path, size = "w500") =>
//     path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchFromTMDB(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}/${endpoint}`);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  url.searchParams.set("api_key", API_KEY);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("TMDB request failed");
  }

  return res.json();
}

export function imgUrl(path, size = "w500") {
  if (!path) return "";
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
