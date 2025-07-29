import archiver from "archiver";
import axios from "axios";

export const downloadProjectAsZip = async (req, res) => {
  const { githubRawUrls, name } = req.body;

  if (!githubRawUrls || !Array.isArray(githubRawUrls)) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const zipFileName = `${name || "project"}.zip`;
  res.setHeader("Content-Disposition", `attachment; filename="${zipFileName}"`);
  res.setHeader("Content-Type", "application/zip");

  const archive = archiver("zip", { zlib: { level: 9 } });
  archive.pipe(res);

  for (const file of githubRawUrls) {
    try {
      const response = await axios.get(file.url, { responseType: "arraybuffer" });
      archive.append(response.data, { name: file.filename });
    } catch (err) {
      console.error(`Failed to add ${file.filename}`, err.message);
    }
  }

  archive.finalize();
};
