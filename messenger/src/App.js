import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './App.css';

//importing components
import { ChannelListContainer,ChannelContainer } from './components';
const apiKey = "qexhue9tr3g2";
const client = StreamChat.getInstance(apiKey);
function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme='team light'>
        <ChannelListContainer />
        <ChannelContainer/>
      </Chat>
    </div>
  );
}

export default App;
