'use client'; 
import React from 'react';

import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import Meetingmodal from './Meetingmodal';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useToast } from '@/hooks/use-toast';



const MeetingTypesCard = () => {
    const {toast}=useToast();
    const [meetingType, setMeetingType] = React.useState<'isScheduled' | 'isInstant' | 'isJoining' | undefined>(); // Corrected type
    const [callDetails,setCallDetails]=React.useState<Call>();
    const [Values,setValues]=React.useState({
        dateTime:new Date(),
        desc:'',
        link:''
    });
    const router = useRouter();
    const {user}=useUser();
    const client=useStreamVideoClient()
    
    const createMeeting=()=>{
        if(!client || !user) return;
        
        try {
            const callId=crypto.randomUUID();
            const call=client.call('default',callId);
            if(!call) throw new Error('Call creation failed');


            const startAt=Values.dateTime.toISOString() || new Date(Date.now()).toISOString();
            const description=Values.desc || 'Instatnt Meeting Call';

            call.getOrCreate({data: {
                starts_at:startAt,
                custom:{
                    description
                },
            }});
            setCallDetails(call)

            if(!Values.desc){
                router.push(`/meeting/${callId}`);
            }
            toast({
                title: "Stared an instant meeting",
              })
   
        } catch (error) {
            toast({
                title: "Failed to create meeting",
              })
        }
    }

    return (
        <>
            {/* card s */}
            <div className="grid items-center justify-between grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-3">
                <HomeCard
                    color="bg-orange-1"
                    imgURL="/icons/add-meeting.svg"
                    imgALT="add meeting"
                    heading="New Meeting"
                    subheading="Start an instant meeting"
                    handleClicker={() => setMeetingType('isInstant')}
                />
                <HomeCard
                    color="bg-blue-1"
                    imgURL="/icons/join-meeting.svg"
                    imgALT="join meeting"
                    heading="Join Meeting"
                    subheading="via an invitation link"
                    handleClicker={() => setMeetingType('isJoining')}
                />
                <HomeCard
                    color="bg-purple-1"
                    imgURL="/icons/schedule.svg"
                    imgALT="plan meeting"
                    heading="Schedule Meeting"
                    subheading="Plan your meeting"
                    handleClicker={() => setMeetingType('isScheduled')} // Corrected value
                />
                <HomeCard
                    color="bg-yellow-1"
                    imgURL="/icons/recordings.svg"
                    imgALT="meeting recording"
                    heading="View Recordings"
                    subheading="Meeting recordings"
                    handleClicker={() => router.push('/recordings')} // Corrected route path
                />
            </div>
           < Meetingmodal 
           isOpen={meetingType === 'isInstant'}
           isClose={() => setMeetingType(undefined)}
           title={'Start an Instant Meeting'}
           buttonText={'Start Meeting'}
           Styles={'bg-blue-1'}
           handleClick={()=>createMeeting()}
        //    image='/icons/add-meeting.svg'
           buttonIcon='/icons/Video.svg'
           />
        </>
    );
};

export default MeetingTypesCard;
