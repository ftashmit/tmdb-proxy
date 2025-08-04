import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config({ path: ".env.local" });

const app = express();
app.use(cors());


const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BEARER_TOKEN = process.env.TMDB_BEARER_TOKEN;

app.get("/movies/popular", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
      {
        headers: { Authorization: `Bearer ${TMDB_BEARER_TOKEN}` },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch TMDB data" });
  }
});

app.get("/movies/search", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: "Query is required" });

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
        query
      )}`,
      {
        headers: { Authorization: `Bearer ${TMDB_BEARER_TOKEN}` },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to search TMDB" });
  }
});


export default app;
