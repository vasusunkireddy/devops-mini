import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => res.json({ ok: true, message: "Hello 👋" }));
app.get("/healthz", (_, res) => res.status(200).send("ok"));
app.get("/version", (_, res) =>
  res.json({
    commit: process.env.COMMIT_SHA || "local",
    env: process.env.BUILD_ENV || "dev"
  })
);

app.listen(PORT, () => console.log(`Up at http://0.0.0.0:${PORT}`));
