import { dataExtractor, pathGenerator } from "../api/feedback";

const FeedbackPage = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
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
