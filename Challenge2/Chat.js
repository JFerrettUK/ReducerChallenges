import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  const sendMessage = () => {
    alert(`Sending to ${contact.email}: ${message}`); // Show the alert
    dispatch({ type: "send_message" }); // Dispatch the action to clear the message
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
      <button
        onClick={() => {
          sendMessage();
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
