import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NighthMode from '../NightMode';
import StyledPlayList from '../styles/StyledPlaylist';

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
    <StyledPlayList>
       <NighthMode nightModeCallback={nightModeCallback} nightMode={nightMode}/>
       <PlaylistHeader active={active} total={videos.length}/>
       <PlaylistItems videos={videos} active={active}/>
    </StyledPlayList>
);

export default Playlist;