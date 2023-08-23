import { useState } from "react";
import { Container, Intro, Spacer, Submit, TryAgain } from "./SubscribeForm.styled";

const SubscribeForm = () => {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState("");

  const FORM_URL = `http://localhost:3001/subscribe`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });

      setEmail("");
      const json = await response.json();

      if (json.status === "success") {
        setStatus("SUCCESS");
        return;
      }
    } catch (err) {
      setStatus("ERROR");
      console.log(err);
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <Container className="py-11 px-8">
      {status === "SUCCESS" && (
        <>
          <h2>
            Welcome in a Best Relaxing Place!
          </h2>
          <Spacer />
          <h2> Please check your inbox to confirm the subscription!</h2>
        </>
      )}
      {status === "ERROR" && (
        <>
          <h2>Oops, something went wrong...</h2>
          <Spacer />
          <h2>
            Please,
            <TryAgain onClick={() => setStatus(null)}>try again.</TryAgain>
          </h2>
        </>
      )}
      {status === null && (
        <>
          <Intro>
            <h2>Subscribe Form</h2>
            <p>
              Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
            </p>
          </Intro>

          <form onSubmit={handleSubmit}>
            <input
              aria-label="Your email address"
              name="email_address"
              placeholder="Your email address"
              required
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
            <Submit>SUBSCRIBE</Submit>
          </form>
        </>
      )}
    </Container>
  );
};

export default SubscribeForm;