import express from "express";
const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", service: "project-atlas", ts: new Date().toISOString() });
});

app.get("/api/track/:id", (req, res) => {
  res.json({ trackingId: req.params.id, status: "IN_TRANSIT", updatedAt: new Date().toISOString() });
});

app.get("/api/orders", (_req, res) => {
  res.json([
    { id: "ORD-1001", status: "CREATED" },
    { id: "ORD-1002", status: "PACKED" },
  ]);
});

app.get("/", (req, res) => res.redirect("/health"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Atlas API listening on port ${port}`));
