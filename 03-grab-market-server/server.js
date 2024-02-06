const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  res.send("업로드 된 상품들입니다.");
});

app.post("/products", (req, res) => {
  res.send("상품이 등록되었습니다.");
});

app.listen(port, () => {
  console.log("쇼핑몰 서버가 돌아가고 있습니다.");
});
