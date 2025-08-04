import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const TMDB_API_KEY = "18585fa0254f2b85e0dbb7ac84520ab1";
const TMDB_BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODU4NWZhMDI1NGYyYjg1ZTBkYmI3YWM4NDUyMGFiMSIsIm5iZiI6MTc1NDI1ODQ1Ni41NTEsInN1YiI6IjY4OGZkYzE4MjgyYjhjYjUwZGIyMmU4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vM0yArBPfawMgpjol-IYDn_k87W5IOVEGA6YpeYOLwU";

app.get("/movies/popular", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
      {
        headers: { Authorization: `Bearer ${TMDB_BEARER_TOKEN}` },
      }
    );
    res.json(await response.json());
  } catch {
    res.status(500).json({ error: "Failed to fetch TMDB data" });
  }
});

// ✅ Export for Vercel (No app.listen)
export default app;
