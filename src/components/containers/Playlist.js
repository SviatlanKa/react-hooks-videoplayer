import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import Nighthmode from '../Nightmode';
import StyledPlayList from '../styles/StyledPlaylist';

const Playlist = props => (
    <StyledPlayList>
       <Nighthmode/>
       <PlaylistHeader/>
       <PlaylistItems/>
    </StyledPlayList>
);

export default Playlist;