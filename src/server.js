import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readVersionFile() {
  try {
    const p = path.join(__dirname, "version.json"); // src/version.json
    let raw = fs.readFileSync(p, "utf8");

    // Windows PowerShell often writes UTF-8 with BOM - will remove it if present
    raw = raw.replace(/^\uFEFF/, "").trim();

    return JSON.parse(raw);
  } catch {
    return null;
  }
}

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", service: "project-atlas", ts: new Date().toISOString() });
});

app.get("/version", (_req, res) => {
  const v = readVersionFile();

  res.json({
    service: "project-atlas",
    git_sha: v?.git_sha || "unknown",
    build_time: v?.build_time || "unknown",
    runtime: v?.runtime || "unknown",
    ts: new Date().toISOString(),
  });
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
