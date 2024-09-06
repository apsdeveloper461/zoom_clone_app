
import MeetingTypesCard from "@/components/MeetingTypesCard";
import React from "react";

const Home = () => {
  const now = new Date();
  let time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  let date = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <section className="flex flex-col size-full gap-6 text-white">
      <div className=" h-[250px] w-full bg-cover bg-hero rounded-xl flex flex-col justify-between">
        <div className=" glassmorphism  w-fit my-5 gap-4 mx-4 text-center text-lg rounded-md px-2 flex text-nowrap">
          Upcoming meeting at 10:00 AM
        </div>
        <div className="flex flex-col gap-1 px-5 mb-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">{time}</h1>
          <p className="text-xl md:text-2xl font-extralight text-sky-1">
            {date}
          </p>
        </div>
      </div>

     <MeetingTypesCard/>
    </section>
  );
};

export default Home;
