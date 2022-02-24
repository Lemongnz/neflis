const API = "https://api.themoviedb.org/3"


export function get(path) {
  return fetch(API + path, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODEyNWU2NjQ1MDNhOTEwMjMyNDM1NWRkZjhlMzE3YSIsInN1YiI6IjYyMTdkNDk3YTZkOTMxMDAxYjU3N2Y0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tiz3u1icLXXo61aZ6JTcZ2Lx9VFPFpzKg7DvYHkIYaM",
        "Content-Type": "aplication/json;charset=utf-8",
      }
    })
    .then((result) => result.json())
}