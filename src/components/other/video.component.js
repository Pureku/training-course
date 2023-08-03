import React, { useEffect, useRef, useState } from "react";
import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";

const VideoPlayer = ({ videoSources }) => {
  return (
    <>
      {/* http://163.50.57.202/02_Training_by_Department/MT900/VDO%20Process%20950/BP/Stacking/01_%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B9%80%E0%B8%8A%E0%B9%87%E0%B8%84%20Stacking%201,2,3,4,9,10,12,13,14.mp4 */}
      {videoSources.map((source, index) => {
        return (
          <>
            <MediaPlayer
              key={index}
              title={source.title}
              src={source.path}
              poster=""
              // thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
              // aspectRatio={16 / 9}
              crossorigin=""
            >
              <MediaOutlet>
                <MediaPoster alt="" />
                {/* <track
                  src="https://media-files.vidstack.io/sprite-fight/subs/english.vtt"
                  label="English"
                  srcLang="en-US"
                  kind="subtitles"
                  default
                />
                <track
                  src="https://media-files.vidstack.io/sprite-fight/chapters.vtt"
                  srcLang="en-US"
                  kind="chapters"
                  default
                /> */}
              </MediaOutlet>
              <MediaCommunitySkin />
            </MediaPlayer>
          </>
        );
      })}
    </>
  );
};

export default VideoPlayer;
