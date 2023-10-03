import { useRef, useState } from "react";
import Link from "next/link";
function HomePage() {
  const emailInput = useRef();
  const feedBackRef = useRef();
  const [data, setData] = useState([]);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedBackRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail, text: enteredFeedback }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handlerFetchData = () => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setData(data.feedback));
  };
  return (
    <div>
      <h1>HomePage</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="text" id="email" ref={emailInput} />
        </div>
        <div>
          <label htmlFor="feedback">Your your feedback</label>
          <textarea
            type="textarea"
            id="feedback"
            rows="5"
            ref={feedBackRef}
          ></textarea>
        </div>
        <button>Send your feedback</button>
      </form>
      <br />
      <button onClick={handlerFetchData}>fetch data</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <br />
      <Link href="/feedback">to Feedbacks</Link>
    </div>
  );
}

export default HomePage;
