import React, { useState } from 'react';
import styled from "styled-components";
import { FaVideo } from 'react-icons/fa';

const CourseTimeline = ({ weeks }) => {
  const [activeWeek, setActiveWeek] = useState(null);

  const toggleWeek = (weekIndex) => {
    if (activeWeek === weekIndex) {
      setActiveWeek(null);
    } else {
      setActiveWeek(weekIndex);
    }
  };

  return (
    <TimelineWrapper>
      {weeks.map((week, index) => (
        <div key={index}>
          <TimelineHeader onClick={() => toggleWeek(index)}>
            <span>DAY {index + 1}: {week.title}</span>
            <FaVideo />
          </TimelineHeader>
          {activeWeek === index && (
            <WeekContent>
              <VideoWrapper>
                <iframe
                  width="560"
                  height="315"
                  src={week.videoUrl}
                  title={`Week ${index + 1} Video`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </VideoWrapper>
              <TextContent>
                {week.text}
              </TextContent>
            </WeekContent>
          )}
        </div>
      ))}
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div`
  background: #f5f5f5;
  padding: 20px;
`;

const TimelineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #f0f0f0;
  }

  svg {
    font-size: 20px;
  }
`;

const WeekContent = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 0px 200px;
`;

const VideoWrapper = styled.div`
  iframe {
    width: 100%;
    height: 360px;
  }
`;

const TextContent = styled.div`
  margin-top: 10px;
`;

export default CourseTimeline;
