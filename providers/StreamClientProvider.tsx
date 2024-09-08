'use client'
import React, { useEffect, useState } from 'react'
import {
    StreamVideo,
    StreamVideoClient,
  } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import { TokenProivder } from '@/actions/Stream.actions';
import Loader from '@/components/Loader';
  

  

const StreamVideoProvider = ({children}: {children:React.ReactNode}) => {
  const [videoClient,setVideoClient]=useState<StreamVideoClient>();
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

    // get user details from clerk auth and set it to the client
    const {user,isLoaded}=useUser();

    useEffect(()=>{
        if(!user || !isLoaded) return;
        // console.log(apiKey, "This is api Key");
        
        if(!apiKey) throw new Error('Stream API key is missing');

            const client = new StreamVideoClient({
                apiKey,
                user:{
                    id:user?.id,
                    name:user?.username || user?.fullName|| 'Anonymous',
                    image:user?.imageUrl
                },
                tokenProvider: TokenProivder
              });
              setVideoClient(client);
    },[isLoaded,user])


    if(!videoClient){
      return(
        <Loader/>
      )
    }
    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
      );
}

export default StreamVideoProvider