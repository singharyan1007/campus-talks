import React, { useState, UseEffect } from 'react';
import { useChatContext } from 'stream-chat-react';
import { SearchIcon } from '../assets'


const ChannelSearch = () => {
  //query
  const [query, setQuery] = useState('');
  //loading
  const [loading, setLoading] = useState(false);
//* getting the channels
  const getChannels = async (text) => {
    try {
      // Todo:fetch channels

    }
    catch (error) {
      setQuery('')
    }
  }

  //search function
  const onSearch = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    //getting the channels ---optional
    getChannels(event.target.value);
  }
  return (
          <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-serach__input__icon">
                    <SearchIcon />
                </div>
                <input 
                    className="channel-search__input__text" 
                    placeholder="Search" 
                    type="text" 
                    value={query}  
                    onChange={onSearch}
                />
      </div>
      </div>
  )
}

export default ChannelSearch