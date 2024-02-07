import { useReducer } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import { initialState, messengerReducer } from "./messengerReducer";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  const currentDraftMessage = state.drafts[state.selectedId] || "";
  const contact = contacts.find((c) => c.id === state.selectedId) || {
    id: null,
    name: "",
    email: "",
  };

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      {contact && (
        <Chat
          key={contact.id}
          message={currentDraftMessage}
          contact={contact}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}
