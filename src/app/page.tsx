import Header from "@/components/Header";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
        <div className={'bg-[#19181d] flex flex-col items-center justify-center py-7'}>
          <span className={'text-white'}>{`Clean`}</span>
          <span className={'text-white'}>{`Concise`}</span>
          <span className={'text-white'}>{`Cross Platform`}</span>
        </div>
    </>
  );
}
