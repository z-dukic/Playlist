import React from "react";

let accessToken = {

}

const Spotify = {
    getAccessToken(){
        if(accessToken){
            return accessToken;
        }

        const accessToken = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = windows.location.href.match(/expires_in=([^&]*)/);

    }
}


export default Spotify;