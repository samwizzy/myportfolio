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
            <TimelineDot variant="outlined" color="primary">
              <MdLaptopMac />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-purple-600">2021</h3>
            <p className="text-sm">Intelligent Innovations</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary">
              <MdLaptopMac />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-purple-600">2019 — 2020</h3>
            <p className="text-sm">Optisoft Technology</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
              <MdLaptopMac />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-purple-600">2018 — 2019</h3>
            <p className="text-sm">Union Bank</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary">
              <MdLaptopMac />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-purple-600">2015 — 2018</h3>
            <p className="text-sm">PagePedia Technology</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
              <MdLaptopMac />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-purple-600">2014</h3>
            <p className="text-sm">IMT Computers</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default WorkTimelIne;
