import React from 'react';
import PlaylistItem from '../PlaylistItem';
import withLink from '../hoc/withLink';
import StyledPlaylistItems from '../styles/StyledPlaylistitems';

const PlaylistItemsWithLink = withLink(PlaylistItem);

const PlaylistItems = ({ videos, active }) => (
    <StyledPlaylistItems>
        {videos.map(video => (
            <PlaylistItemsWithLink
                key={video.id}
                video={video}
                active={video.id === active.id}
                played={video.played}
            />
        ))}
    </StyledPlaylistItems>
);

export default PlaylistItems;