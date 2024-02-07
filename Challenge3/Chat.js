import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  const sendMessage = () => {
    alert(`Sending "${message}" to ${contact.email}`);
    dispatch({
      type: "sent_message",
    });
  };

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <br />
      <button onClick={sendMessage}>Send to {contact.email}</button>
    </section>
  );
}
