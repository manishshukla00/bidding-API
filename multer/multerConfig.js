const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    const time = Date.now();
    const filename = `${time}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

export default upload;
