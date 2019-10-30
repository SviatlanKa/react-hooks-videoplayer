import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import Video from '../Video';
import Playlist from './Playlist';
import StyledWbnPlayer from "../styles/StyledWbnPlayer";

const theme = {
    bgcolor: "#353535",
    bgcolorItem: "#414141",
    bgcolorItemActive: "#406c63",
    bgcolorPlayed: "#526d4e",
    border: "none",
    borderPlayed: "none",
    color: "#fff"
};

const themeLight = {
    bgcolor: "#fff",
    bgcolorItem: "#fff",
    bgcolorItemActive: "#80a7b1",
    bgcolorPlayed: "#7d9979",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535"
};

const WbnPlayer = ({ match, history, location }) => {

    const videos = JSON.parse(document.querySelector('[name="videos"]').value);
    console.log(videos);
    console.log(match, history, location);

    const [state, setState] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[0],
        nightMode: true,
        playlistId: videos.playlistId,
        autoplay: false,
    });

    useEffect(() => {
        const videoId = match.params.activeVideo;
        if (videoId !== undefined) {
            const newActiveVideo = state.videos.findIndex(video => video.id === videoId);
            setState(prev => ({
                ...prev,
                activeVideo: prev.videos[newActiveVideo],
                autoplay: location.autoplay,
            }));
        } else {
            history.push({
                pathname: `/${state.activeVideo.id}`,
                autoplay: false,
            });
        }
    }, [history, location.autoplay, match.params.activeVideo, state.activeVideo.id, state.videos]);

    const nightModeCallback = () => {
        setState(prevState => ({ ...prevState, nightMode: !prevState.nightMode }));
    };

    const endCallback = () => {
        const videoId = match.params.activeVideo;
        const currentVideo = state.videos.findIndex(video => video.id === videoId);
        const nextVideo = currentVideo === state.videos.length - 1 ? 0 : currentVideo + 1;

        history.push({
            pathname: `/${state.videos[nextVideo]}.id`,
            autoplay: false
        })
    };

    const progressCallback = () => {

    };

    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos !== null ? (
                <StyledWbnPlayer>
                    <Video
                        active={state.activeVideo}
                        autoplay={state.autoplay}
                        endCallback={endCallback}
                        progressCallback={progressCallback}
                    />
                    <Playlist
                        videos={state.videos}
                        active={state.activeVideo}
                        nightModeCallback={nightModeCallback}
                        nightMode={state.nightMode}
                    />
                </StyledWbnPlayer>) : null}
        </ThemeProvider>
    );
};

export default WbnPlayer;