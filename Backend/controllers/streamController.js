


import fs from "fs";
import path from "path";

export const streamVideo = (req, res) => {
  try {
    const { category, filename } = req.params;
    const videoPath = path.join(process.cwd(), "videos", category, filename);

    if (!fs.existsSync(videoPath)) {
      return res.status(404).json({ message: "Video not found" });
    }

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (!range) {
      // If no range header → send entire file (not efficient but fallback)
      res.writeHead(200, {
        "Content-Length": fileSize,
        "Content-Type": "video/mp4",
      });
      fs.createReadStream(videoPath).pipe(res);
      return;
    }

    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunkSize = end - start + 1;
    // const chunkSize = 3 * 10 ** 6;
    

    const file = fs.createReadStream(videoPath, { start, end });

    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, head);
    file.pipe(res);
  } catch (error) {
    console.error("Stream error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
