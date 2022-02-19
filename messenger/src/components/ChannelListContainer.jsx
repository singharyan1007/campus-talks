import React from 'react'
import {ChannelList,useChatContext} from 'stream-chat-react'
import { ChannelSearch, TeamChannel, TeamChannelPreview } from './';
import Cookies from 'universal-cookie';
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'
import TeamChannelList from './TeamChannelList';
const cookies = new Cookies();
const Sidebar = ({logout}) => {
    return (
         <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width='30' />

            </div>
        </div>
                <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
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
function ChannelListContainer({isCreating,setIsCreating,setCreateType,setIsEditing}) {
    const logout = () => {
         cookies.remove('token');
         cookies.remove('userId');
         cookies.remove('fullName');
         cookies.remove('avatarURL');
         cookies.remove('hashedPassword');
         cookies.remove('phoneNumber');
         cookies.remove('username');
        window.location.reload();
  
    }
  return (
      <>
          <Sidebar logout={logout} />
          <div className="channel-list__list__wrapper">
              <CompanyHeader />
              <ChannelSearch />
              <ChannelList
                  filters={ {}}
                  channelRenderFilterFn={() => {
                      
                  } }
                  List={(listProps) => (
                      <TeamChannelList {...listProps}
                          type='team'
                             isCreating={isCreating}
                             setIsCreating={setIsCreating}
                             setCreateType={setCreateType}
                             setIsEditing={setIsEditing}
                      />
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
                          type='messaging'
                              isCreating={isCreating}
                              setIsCreating={setIsCreating}
                              setCreateType={setCreateType}
                              setIsEditing={setIsEditing}/>
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