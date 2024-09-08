import { cn } from "@/lib/utils";
import { CallControls, CallParticipantsList, CallStats, CallStatsButton, PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { User } from "lucide-react";
import { Button } from "./ui/button";
type LayoutType = "grid" | "speaker-left" | "speaker-right";
const MeetingRoom = () => {
  const [layout, setLayout] = useState<LayoutType>("grid");
  const [isShowPartecipants, setIsShowPartecipants] = useState(false);

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-left":
        return <SpeakerLayout participantsBarPosition={"right"} />;
      default:
        return <SpeakerLayout participantsBarPosition={"left"} />;
    }
  };
  return (
    <section className="relative w-full h-screen pt-5 flex  items-center justify-center  overflow-x-hidden">
      <div className="relative size-full  flex justify-center items-center mx -10 max-md:flex-col-reverse">
        <div className="flex size-full max-w-[1000px] items-center ">
        <CallLayout />
        </div>
        <div className={cn('hidden h-[calc(100vh=86px)] ',{'show-block':isShowPartecipants})}>
          <CallParticipantsList  onClose={()=>setIsShowPartecipants(false)}/>
        </div>
        <div className="fixed w-full bottom-0 gap-4  z-50 flex justify-center items-center ">
          <CallControls/>
          <Dropdown value={layout}  setValues={setLayout}/>
          <CallStatsButton/>
          <Button onClick={()=>setIsShowPartecipants((prev)=> !prev)}   className='bg-[#19232D] cursor-pointer hover:bg-[#323B44] rounded-2xl border border-dark-1 p-2'>

            <User size={20}  />
          </Button>
        </div>
      </div>
      {/* MeetingRoom */}
    </section>
  );
};

export default MeetingRoom;
  