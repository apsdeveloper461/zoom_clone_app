"use client";
import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetUp from "@/components/MeetingSetUp";
import { UseGetCallById } from "@/hooks/UseGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

const Meeting = ({ params :{id}}: { params: { id: string } }) => {
  const { user,isLoaded } = useUser();
  const [isSetupCompleteCall, setIsSetupCompleteCall] = useState(false);

  const {call ,isCallLoading}=UseGetCallById(id);

  // console.log(isLoaded || isCallLoading,isLoaded, !isCallLoading);
  if(!isLoaded || isCallLoading) return <Loader/>
  

  return(
  <section className="h-screen w-full text-white">
    {/* Hello EveryOne */}
    <StreamCall call={call}>
      <StreamTheme as='main' className="my-custom-root-class">
        {isSetupCompleteCall ? <MeetingRoom /> : <MeetingSetUp setIsSetupCompleteCall={setIsSetupCompleteCall} />}
      </StreamTheme>
    </StreamCall>
  </section>
  );
};

export default Meeting;
