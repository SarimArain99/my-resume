import Image from "next/image";
import React from "react";
import cover from "../public/sarim2.jpg";
function Home() {
  return (
    <div className="flex justify-between items-center md:flex-row flex-col lg: space-y-10">
      <div className="flex flex-col text-start space-y-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500 lg:mx-10 mx-5 mt-20">
          I'm Front-End Developer
        </div>
        <div className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-96 text-blue-400 lg:mx-10 mx-5">
          A frontend developer is responsible for building the user interface
          (UI) and user experience (UX) of websites and web applications. Their
          work involves translating design concepts into functional and
          interactive web pages that users can interact with directly.
        </div>
      </div>
      <div>
        <div className="bg-blue-500 h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 rounded-full mx-10 sm:mx-16 md:mx-20 mt-10 sm:mt-16 md:mt-20 flex items-center justify-center shadow-md shadow-blue-700">
          <div className="bg-blue-400 h-[14.5rem] w-[14.5rem] sm:h-[16.5rem] sm:w-[16.5rem] md:h-[19.5rem] md:w-[19.5rem] rounded-full flex items-center justify-center">
            <div className="bg-blue-300 h-[14rem] w-[14rem] sm:h-[16rem] sm:w-[16rem] md:h-[19rem] md:w-[19rem] rounded-full flex items-center justify-center">
              <div className="bg-blue-200 h-[13.5rem] w-[13.5rem] sm:h-[15.5rem] sm:w-[15.5rem] md:h-[18.5rem] md:w-[18.5rem] rounded-full flex items-center justify-center">
                <Image
                  src={cover}
                  alt="cover"
                  className="object-cover rounded-full h-[13rem] w-[13rem] sm:h-[15rem] sm:w-[15rem] md:h-[18rem] md:w-[18rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
