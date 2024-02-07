export const initialState = {
  selectedId: 0,
  drafts: {},
};
export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      const updatedDrafts = {
        ...state.drafts,
        [state.selectedId]: action.message,
      };
      return {
        ...state,
        drafts: updatedDrafts,
      };
    }
    case "sent_message": {
      const newSentDrafts = { ...state.drafts };
      delete newSentDrafts[state.selectedId];
      return {
        ...state,
        drafts: newSentDrafts,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
