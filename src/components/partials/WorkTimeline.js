import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { MdLaptopMac } from "react-icons/md";

function WorkTimelIne() {
  return (
    <div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary">
              <MdLaptopMac color="#fff" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-purple-400">2022 — Present</h3>
            <p className="text-sm text-white">Kaiglo NG</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
              <MdLaptopMac color="#fff" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-purple-400">2021</h3>
            <p className="text-sm text-white">Intelligent Innovations</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary">
              <MdLaptopMac color="#fff" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-purple-400">2019 — 2020</h3>
            <p className="text-sm text-white">Optisoft Technology</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
              <MdLaptopMac color="#fff" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-purple-400">2018 — 2019</h3>
            <p className="text-sm text-white">Union Bank</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary">
              <MdLaptopMac color="#fff" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-purple-400">2015 — 2018</h3>
            <p className="text-sm text-white">PagePedia Technology</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
              <MdLaptopMac color="#fff" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-purple-400">2014</h3>
            <p className="text-sm text-white">IMT Computers</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default WorkTimelIne;
