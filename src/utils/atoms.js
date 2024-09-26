import { atom, atomFamily, selector } from "recoil";

export const sidebarAtom = atom({
  key:"sidebarAtom",
  default:true
})
export const watchAtom = atom({
  key:"watchAtom",
  default:false
})
export const showVideoAtom = atom({
  key:"showVideoAtom",
  default:null
})


export const videoIdAtom = atom({
  key: 'videoId',
  default:""
});

export const navbarInputValue = atom({
  key: 'navbarInputValue',
  default:""
});


export const videoState = atom({
  key: 'videoState',
  default: [], // Initial state
});

export const categoryState = atom({
  key: 'categoryState',
  default: 'All', // Default category
});





export const messageState = atom({
  key: 'messageState', // Unique key for this atom
  default: [], // Initial state (an empty array)
});

// Selector to handle adding a new message and ensuring the array has a maximum of 100 messages
export const messageUpdater = selector({
  key: 'messageUpdater', // Unique key for this selector
  get: ({ get }) => {
    const messages = get(messageState); // Get current state of the message array
    return messages;
  },
  set: ({ get, set }, newMessage) => {
    const currentMessages = get(messageState); // Get current message array
    const updatedMessages = [...currentMessages];

    // If the length exceeds 100, remove the oldest message
    if (updatedMessages.length >= 100) {
      updatedMessages.shift(); // Remove the first (oldest) message
    }

    // Add the new message
    updatedMessages.push(newMessage);

    // Set the new updated messages array as the state
    set(messageState, updatedMessages);
  },
});
