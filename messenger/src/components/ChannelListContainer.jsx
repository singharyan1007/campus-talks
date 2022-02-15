import React from 'react'
import {ChannelList,useChatContext} from 'stream-chat-react'
import { ChannelSearch, TeamChannel, TeamChannelPreview } from './';
import Cookies from 'universal-cookie';
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'
import TeamChannelList from './TeamChannelList';

const Sidebar = () => {
    return (
         <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width='30' />

            </div>
        </div>
                <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="Logout" width='30' />

            </div>
        </div>
    </div>
    )
   
}
const CompanyHeader = () => {
    return (
        <div className="channel-list__header">
            <p className="channel-list__header__text">Campus Talks</p>
        </div>
    )
}
function ChannelListContainer() {
  return (
      <>
          <Sidebar />
          <div className="channel-list__list__wrapper">
              <CompanyHeader />
              <ChannelSearch />
              <ChannelList
                  filters={ {}}
                  channelRenderFilterFn={() => {
                      
                  } }
                  List={(listProps) => (
                      <TeamChannelList {...listProps}
                      type='team'/>
                  )}
                  Preview={(previewProps) => {
                      <TeamChannelPreview {...previewProps} type='team'/>
                  }}
              />
               <ChannelList
                  filters={ {}}
                  channelRenderFilterFn={() => {
                      
                  } }
                  List={(listProps) => (
                      <TeamChannelList {...listProps}
                      type='messaging'/>
                  )}
                  Preview={(previewProps) => {
                      <TeamChannelPreview {...previewProps} type='messaging'/>
                  }}
              />
          </div>
      
      </>
  )
}

export default ChannelListContainer