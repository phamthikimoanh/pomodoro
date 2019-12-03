import { message } from "antd";

export const Finished = () => {
  message.success("Start a 5-minute break timer, and kick back and relax");
};

export const TimeOut = () => {
  message.success("Start a 25-minute work timer, and work without distraction");
};
