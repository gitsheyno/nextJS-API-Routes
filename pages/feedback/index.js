import { dataExtractor, pathGenerator } from "../api/feedback";
import { useState } from "react";
const FeedbackPage = ({ data }) => {
  const [feedback, setFeedback] = useState([]);
  const loadFeedbackCaller = (id) => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setFeedback(data.feedback));
  };
  return (
    <>
      {feedback && <p>{feedback.email}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => loadFeedbackCaller(item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeedbackPage;

export async function getStaticProps() {
  const filePath = pathGenerator();
  const data = dataExtractor(filePath);

  return {
    props: {
      data,
    },
  };
}
