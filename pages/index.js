import { useRef } from "react";
function HomePage() {
  const emailInput = useRef();
  const feedBackRef = useRef();

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
    </div>
  );
}

export default HomePage;
