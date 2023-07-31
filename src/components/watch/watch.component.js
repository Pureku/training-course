import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import pexels from "../../img/pexels.png";

const WatchPlay = () => {
  const content = `TLearn English with a short story. In fact, this episode contains
  two stories. Listen until the end for the 2nd one. Repeat after me
  to practise your pronunciation. Learn some vocabulary & grammar in
  the second half of the episode, with an explanation of modal verbs
  of deduction in the past and present. Episode page to
  read/download the transcript https://wp.me/p4IuUx-scI Sign up to
  LEP Premium for plenty of episodes teaching vocab, grammar &
  pronunciation https://www.teacherluke.co.uk/premium Contents
  0:00:00 Introduction 
  0:04:38 What is a doppelganger? 
  0:08:11 Story
  1 0:10:28 Story summary & language explanations 
  0:26:39 Different interpretations of the story 29:18 Language Analysis (vocabulary &grammar) 
  0:40:38 Modal verbs of deduction - past and present (Grammar) 
  0:53:37 Pronunciation practice - Listen & repeat
  exercises 1:02:21 Story 2 1:07:21 Story 2 summary`;

  const maxChars = 500; // Number of characters to show before "Show More"

  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const truncatedContent = showFullContent
    ? content
    : content.slice(0, maxChars);
  return (
    <>
      <div className="box-border min-w-0">
        <iframe
          src="http://163.50.57.202/02_Training_by_Department/MT900/VDO%20Process%20950/BP/Stacking/01_%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B9%80%E0%B8%8A%E0%B9%87%E0%B8%84%20Stacking%201,2,3,4,9,10,12,13,14.mp4"
          frameborder="0"
          allowfullscreen
          className="w-[100%] h-[500px] rounded-[10px]"
          controls
        ></iframe>
        <div className=" mt-0 mr-auto mb-0 ml-auto align-center max-w-[1126px] w-[100%] pb-[20px]">
          <div className="box-border min-w-0 ml-auto mr-auto relative">
            {/* <ReactPlayer url="https://www.youtube.com/watch?v=wWgIAphfn2U"></ReactPlayer> */}
          </div>
        </div>
        <main className="max-w-[1126px] ml-auto mr-auto  py-4 sm:px-6 lg:pl-4">
          <header>
            <h1 class="text-2xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </header>
          <div class="flex items-center space-x-4 mt-4">
            <img class="w-10 h-10 rounded-full" src={pexels} alt=""></img>
            <div class="font-medium dark:text-white">
              <div>Jese Leos</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </div>
          <div class="items-center space-x-4 mt-5 p-5 bg-[#e8e8e8] rounded-[10px]">
            <p>{truncatedContent}</p>
            {content.length > maxChars && (
              <button className="font-bold " onClick={toggleContent}>
                {showFullContent ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default WatchPlay;
