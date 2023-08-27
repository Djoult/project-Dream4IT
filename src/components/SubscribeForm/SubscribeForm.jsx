import { useState } from "react";
import { Container, Intro, Spacer, TryAgain } from "./SubscribeForm.styled";
import { ButtonMain } from "../../UI/Button/Button";
// import { InputMain } from "../../UI/Input/Input";

const SubscribeForm = () => {
  const [status, setStatus] = useState(null);// Статус підписки
  const [email, setEmail] = useState(""); // Значення email з форми
  const [subscribed, setSubscribed] = useState(true);// Початковий стан підписки
const [currentEmail, setCurrentEmail] = useState(""); // Поточна електронна пошта

  const FORM_URL = `http://localhost:3001/subscribe`;

// Функція для відправки форми підписки
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

      setEmail(""); // Очищаємо email 
      const json = await response.json();

      if (json.status === "success") {
        setStatus("SUCCESS");// Встановлюємо статус успішної підписки
        setCurrentEmail(email); // Зберігаємо поточну електронну пошту
        setSubscribed(true); // Відмічаємо підписку
        return;
      }
    } catch (err) {
      setStatus("ERROR");
      console.log(err);
    }
  };
// Функція для зміни email при вводі в полі
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

 // Функція для відписки
  const handleUnsubscribe = async () => {
    try {
      const response = await fetch("/unsubscribe", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
         body: JSON.stringify({ email_address: currentEmail }), // Використовуємо поточну електронну пошту
      });

      const json = await response.json();

      if (json.status === "success") {
        console.log("Unsubscribed successfully");
        setSubscribed(false); // Оновити стан на "не підписаний"
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container className="py-11 px-8">
      {subscribed ? (
        <>
          {status === "SUCCESS" && (
            <>
              <h2>Welcome in a Best Relaxing Place!</h2>
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
                <ButtonMain type="submit" buttonName="Subscribe" />
              </form>
            </>
          )}
        </>
      ) : (
        // повідомлення про відписку та кнопку для відписки
      <Intro>
        <h3>Unsubscribe</h3>
        <p>You can unsubscribe by pressing the button below.</p>
        <ButtonMain onClick={handleUnsubscribe} buttonName="Unsubscribe" />
      </Intro>

      )}
    </Container>
  );
};

export default SubscribeForm;