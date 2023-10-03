import fs from "fs";
import path from "path";

export const pathGenerator = () => {
  const filePath = path.join(process.cwd(), "data", "feedback.json");

  return filePath;
};

export const dataExtractor = (path) => {
  const fileData = fs.readFileSync(path);
  const data = JSON.parse(fileData);
  return data;
};

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const text = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text,
    };

    const filePath = pathGenerator();

    const data = dataExtractor(filePath);

    data.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "success", feedback: newFeedback });
  } else {
    const filePath = pathGenerator();

    const data = dataExtractor(filePath);

    res.status(200).json({ feedback: data });
  }
}
export default handler;
