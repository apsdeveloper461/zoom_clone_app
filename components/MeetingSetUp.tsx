'use client'
import {   DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState, useCallback } from 'react'
import { Button } from './ui/button';

const MeetingSetUp = ({setIsSetupCompleteCall}:{setIsSetupCompleteCall:(value:boolean)=>void}) => {
  const [isMacCamEnable, setisMacCamEnable] = useState(true);
  const call = useCall();

  // Handler to toggle camera and microphone based on state
  const handleDeviceToggle = useCallback(() => {
    if (!call) return;
    if (isMacCamEnable) {
      call?.camera.enable();
      call?.microphone.enable();
    } else {
      call?.camera.disable();
      call?.microphone.disable();
    }
  }, [isMacCamEnable, call]);

  useEffect(() => {
    handleDeviceToggle();
  }, [handleDeviceToggle]);

  return (
    <section className='flex flex-col h-screen w-full justify-center items-center gap-3 p-4'>
      <h1 className='text-2xl max-md:text-xl font-bold text-sky-2'>Set Up Meeting</h1>
      <div className="w-full h-auto flex justify-center items-center"></div>
        <VideoPreview
          className='  w-auto h-auto '
        />
      {/* <DeviceSettings /> */}
      <div className='flex  gap-2 items-center justify-center'>
<input type="checkbox"  checked={isMacCamEnable} id="toogledCam" onChange={(e)=>{setisMacCamEnable(e.target.checked)}} />
      <label htmlFor="toogledCam"> Enable Camera  & Microphone</label>
      <DeviceSettings/>
      </div>
      <Button className='bg-blue-1 hover:bg-blue-400 text-sky-3' onClick={()=>{
        call?.join();
        setIsSetupCompleteCall(true);
      }}>Join Meeting</Button>
    </section>
  );
}

export default MeetingSetUp;
