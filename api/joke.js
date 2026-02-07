import data from "../jokes.json";

export default function handler(req, res) {
  const jokes = data.jokes;
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

  res.status(200).json({
    success: true,
    joke: randomJoke
  });
}
