'use client'; 
import React from 'react';

import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';

const MeetingTypesCard = () => {
    const [meetingType, setMeetingType] = React.useState<'isScheduled' | 'isInstant' | 'isJoining' | undefined>(); // Corrected type
    const router = useRouter();

    return (
        <>
            {/* card s */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-4">
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
        </>
    );
};

export default MeetingTypesCard;
