import { useState } from "react";
import { Container, Intro, Spacer, TryAgain } from "./SubscribeForm.styled";
import { ButtonMain } from "../../UI/Button/Button";
import { InputMain } from "../../UI/Input/Input";
import axios from "axios";
import Loader from "../Loader/Loader.jsx"; 

const SubscribeForm = () => {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState({ isValid: true, message: '' });

  const baseURL = "https://drinkmaster-backend.onrender.com";

  const isSuccess = status === "SUCCESS";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("LOADING");
      const response = await axios.post(`${baseURL}/api/subscriptions/subscribe/email`, { email });

      if (response.status === 200) {
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");

      }
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setLoading(false);

    }
  };

  const handleEmailChange = (value, error) => {
    setEmail(value);
    setEmailError(error);
  };

return (
  <Container>
    {isLoading ? (
      <Loader />
    ) : isSuccess ? (
      <>
        <h3>Welcome to the Best Relaxing Place!</h3>
        <Spacer />
        <h2>Please check your inbox to confirm the subscription!</h2>
      </>
    ) : (
      <form onSubmit={handleSubmit}>
        <Intro>
          <h2>Subscribe Form</h2>
          <p>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
        </Intro>
        <InputMain
          aria-label="Your email address"
          name="email_address"
          placeholder="Your email address"
          required
          type="email"
          onChange={(e) => {
            handleEmailChange(e.value, e.error);
          }}
          value={email}
          error={emailError}
        />
        <ButtonMain type="submit" buttonName="Subscribe" />
      </form>
    )}
    {status === "ERROR" && !isLoading && (
      <>
        <h3>Oops, something went wrong...</h3>
        <Spacer />
        <h3>
          Please,{" "}
          <TryAgain onClick={() => setStatus(null)}>try again.</TryAgain>
        </h3>
      </>
    )}
  </Container>
);
};

export default SubscribeForm;
