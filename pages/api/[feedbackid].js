import { pathGenerator, dataExtractor } from "./feedback";

const handler = (req, res) => {
  // its possible to handle different request method
  //now its the same for all methods

  const feedbackID = req.query.feedbackid;

  const filePath = pathGenerator();
  const feedbackData = dataExtractor(filePath);

  const expectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackID
  );

  res.status(200).json({ feedback: expectedFeedback });
};

export default handler;
