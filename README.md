# TMDB Proxy

A lightweight **Node.js + Express** proxy server for the [TMDB API](https://developer.themoviedb.org/), designed to securely fetch movie data for React Native, Expo, and web applications **without exposing your API key**.  
Perfect for handling TMDB requests in regions where direct access is limited, e.g: India.

---

## 🚀 Features

- Fetch **popular movies** and search for any title  
- Securely uses **API Key** and **Bearer Token** stored in `.env.local`  
- Easy to deploy on **Vercel** for serverless hosting  
- Prevents exposing your TMDB credentials in client apps  

---

## 📂 Project Structure

```
tmdb-proxy/
 ├─ api/
 │   └─ index.js        # Express API routes
 ├─ package.json
 ├─ vercel.json         # Optional route rewrites for clean URLs
 └─ .gitignore
```

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ftashmit/tmdb-proxy.git
   cd tmdb-proxy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env.local` file** in the root:
   ```env
   TMDB_API_KEY=your_api_key_here
   TMDB_BEARER_TOKEN=your_read_access_token_here
   ```

4. **Run locally**
   ```bash
   npm run dev
   ```

5. **Access Endpoints for testing**
   - `http://localhost:3000/api/movies/popular`
   - `http://localhost:3000/api/movies/search?query=Inception`
   - `http://localhost:3000/api/tmdb/movie/550`

---

## ☁️ Deploy on Vercel

1. Push your repo to GitHub
2. Import to [Vercel](https://vercel.com/)
3. Add the environment variables (`TMDB_API_KEY`, `TMDB_BEARER_TOKEN`) in **Vercel → Settings → Environment Variables**
4. Deploy → Your API will be live at:

```
https://your-vercel-domain.vercel.app/api/movies/popular
```

---

## 📌 Example Usage in React Native

```js
const API_URL = "https://your-vercel-domain.vercel.app";

export const fetchPopularMovies = async () => {
  const response = await fetch(`${API_URL}/api/movies/popular`);
  return response.json();
};
```

---

## 🛡️ Security Notes

- Never expose your TMDB keys in client-side code  
- Use this proxy in production to **securely fetch movie data**  


