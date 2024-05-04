import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my previous experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Frontend Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Nep Innovation Technology Pvt. Ltd.
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  March 2022 - September 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  As a Frontend developer, i was responsible for development of reusable component and it's integration. The main
                  task that i worked was implementation of Redux-Saga for side effects manager and API management and integration.
                  I have a strong background in responsive web design, ensuring seamless user experiences across various devices.
                  I do have experience in state management using Redux that empowers me to efficiently handle complex data flows
                  within applications and have knowledge of Redux-Saga for Redux side-effect manager.
                </p>
              </div>

              <div className=" flex flex-col mt-1 gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Navya Advisors Pvt. Ltd.
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  September 2023 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  As a Software developer, i was responsible for development of reusable component and it's integration. The main
                  task that i worked was implementation of Redux and guiding the juniors developer and code review.
                  I have a strong background in responsive web design, ensuring seamless user experiences across various devices.
                  I do have experience in state management using Redux and Zustand that empowers me to efficiently handle complex data flows
                  within applications and have knowledge of RTK and Tanstack Query for Redux API Management.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  BE, Computer Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Nepal College of Information Technology
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  2017-2022
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">

                  In 2022, after five years of rigorous study, I completed my Bachelor of Engineering (B.E.)
                  in Computer Engineering, a program that spanned from 2017. This course provided a
                  comprehensive education in both theoretical and practical aspects of computer engineering,
                  encompassing subjects such as computer architecture, software development, network design,
                  and data structures. The program was designed to equip students with the skills needed to
                  innovate and adapt in the fast-evolving field of technology. During this time, I also engaged
                  in various projects and internships that enhanced my understanding and application of computer
                  engineering principles in real-world scenarios.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
