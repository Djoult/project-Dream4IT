import { useState } from "react";
import { Container, Intro, Spacer, TryAgain } from "./SubscribeForm.styled";
import { ButtonMain } from "../../UI/Button/Button";
import { InputMain } from "../../UI/Input/Input";
import axios from "axios";

const SubscribeForm = () => {
  const [status, setStatus] = useState(null); // Статус підписки
  const [email, setEmail] = useState(""); // Значення email з форми
  const [subscribed, setSubscribed] = useState(false); // Початковий стан підписки
  const [isLoading, setLoading] = useState(false); // стан для відображення лоадера
const [emailError, setEmailError] = useState({ isValid: true, message: '' });//стан для збереження помилок 

  // Функція для відправки форми підписки
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Встановити стан "завантаження" на true
      setStatus("LOADING"); // Встановити статус на "LOADING", показати, що відправка у процесі
      const response = await axios.post("/api/subscriptions/subscribe", { email }); // Замініть на вашу адресу API підписки
      if (response.status === 200) {
        setStatus("SUCCESS"); // Якщо статус відповіді 200, то підписка вдалася
        setSubscribed(true); // Встановити стан "підписаний" в true
      } else {
        setStatus("ERROR"); // Якщо інакший статус відповіді, то відображаємо помилку
      }
    } catch (error) {
      setStatus("ERROR"); // В разі помилки при відправці також відображаємо помилку
    } finally {
      setLoading(false); // Після завершення запиту ставимо false
    }
  };

  const handleEmailChange = (value, error) => {
  setEmail(value);
  setEmailError(error);
};


  return (
    <Container>
      {isLoading ? (
        <p>Wait, we are uncorking the champagne...</p>
      ) : (
        <div>
          {subscribed ? (
            <>
              {status === "SUCCESS" && (
                <>
                  <h2>Welcome to the Best Relaxing Place!</h2>
                  <Spacer />
                  <h2>Please check your inbox to confirm the subscription!</h2>
                </>
              )}
              {status === "ERROR" && (
                <>
                  <h2>Oops, something went wrong...</h2>
                  <Spacer />
                  <h2>
                    Please,{" "}
                    <TryAgain onClick={() => setStatus(null)}>try again.</TryAgain>
                  </h2>
                </>
              )}
            </>
          ) : (
            <>
              <Intro>
                <h2>Subscribe Form</h2>
                <p>Subscribe to our newsletter for the latest news and offers.</p>
              </Intro>

              <form onSubmit={handleSubmit}>
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
            </>
          )}
        </div>
      )}
    </Container>
  );
};

export default SubscribeForm;
