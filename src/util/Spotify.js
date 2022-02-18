import React from "react";

const clientId = '571f813af943473099cc536ae4c759a3';
const redirectUri = 'http://localhost:3000';
let accessToken;


const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = windows.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            windows.history.pushState('Access Token', null, '/');
            return accessToken;
        }else{
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}
            windows.location = accessUrl;


    }       
}

export default Spotify;