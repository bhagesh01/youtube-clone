import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { messageState, messageUpdater } from '../utils/atoms'; // Recoil atoms and selectors
import ChatMessage from './ChatMessage'; // Assuming ChatMessage is a separate component
import {nameList} from "../constant/youtube"
// Helper function to generate a random name
const generateRandomName = () => {
  const names = [...nameList];
  return names[Math.floor(Math.random() * names.length)];
};

// Helper function to generate a random message of a specific length
const generateRandomMessage = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const LiveChat = () => {
  const messages = useRecoilValue(messageState); // Retrieve the chat messages from Recoil state
  const updateMessage = useSetRecoilState(messageUpdater); // Function to update messages in Recoil state

  useEffect(() => {
    // Interval to dispatch random messages every second
    const timer = setInterval(() => {
      updateMessage({
        name: generateRandomName(), // Generates a random name
        message: generateRandomMessage(10), // Generates a random message of 16 characters
      });
    }, 1000);

    // Cleanup the timer when component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [updateMessage]); // Adding dependency to ensure updateMessage is used

  return (
    <div className='px-2'>
      <div>
        {messages.map((item, idx) => (
          <ChatMessage key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
