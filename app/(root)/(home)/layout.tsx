import Navbar from "@/components/Navbar";
import Slidebar from "@/components/Slidebar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar/>
      <div className="flex">
        <Slidebar/>
        <section className="flex min-h-screen flex-1 flex-col pt-24 px-6 lg:px-10 pb-4">
          {children}
        </section>
      </div>
      {/* Footer */}
    </main>
  );
};

export default HomeLayout;
