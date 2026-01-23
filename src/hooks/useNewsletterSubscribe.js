import { useState } from "react";
import { subscribeToNewsletter } from "../services/newsletterService";

export const useNewsletterSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      setLoading(true);
      const res = await subscribeToNewsletter(email);

      setStatus("info");
      setMessage(res.message);

      e.target.reset();
    } catch (error) {
      setStatus("error");
      setMessage("Please enter a valid email address");
    } finally {
      setLoading(false);
    }
  };

  return { handleSubscribe, loading, status, message };
};
