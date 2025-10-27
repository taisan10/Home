
import fs from "fs";
import path from "path";

export const streamVideo = (req, res) => {
  const { category, filename } = req.params;
  const videoPath = path.join(process.cwd(), "videos", category, filename);

  fs.stat(videoPath, (err, stats) => {
    if (err || !stats.isFile()) return res.sendStatus(404);

    const range = req.headers.range;
    if (!range) return res.sendStatus(416);

    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, stats.size - 1);

    const headers = {
      "Content-Range": `bytes ${start}-${end}/${stats.size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, headers);
    fs.createReadStream(videoPath, { start, end }).pipe(res);
  });
};