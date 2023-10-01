import fs from "fs";
import path from "path";
function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const text = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text,
    };

    const filePath = path.join(process.cwd("data", "feedback.json"));
    const fileData = fs.readFileSync(filePath);
    const data = fileData.JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(fileData, JSON.stringify(data));
    req.status(201).json({ message: "success", feedback: newFeedback });
  } else {
    res.status(200).json({ message: "this works" });
  }
}
export default handler;
