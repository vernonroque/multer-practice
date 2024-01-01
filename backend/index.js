const express = require("express");
const cors = require("cors");
// const pdfParse = require("pdf-parse");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({storage: storage});

// API
// App config
const app = express();
// Use express.urlencoded() middleware to parse URL-encoded bodies
// app.use(express.urlencoded({extended: true}));

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

const PORT = process.env.PORT || 4001;

// Listen for connections on the specified port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

// API routes
app.get("/", (request, response) => response.status(200).send("hey baus!!!!!"));

app.post("/submitPDF", upload.single("pdfFile"), (request, response)=>{
  console.log("Made a post request>>>", request.file);

  response.status(201).send({message: "File upload successful"});
});

