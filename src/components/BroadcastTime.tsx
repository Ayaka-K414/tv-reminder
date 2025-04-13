import React from "react";

type BroadcastTimeProps = {
  startIso: string;
  endIso: string;
};

export const BroadcastTime: React.FC<BroadcastTimeProps> = ({
  startIso,
  endIso,
}) => {
  const start = new Date(startIso);
  const end = new Date(endIso);

  const year = start.getFullYear();
  const month = start.getMonth() + 1;
  const day = start.getDate();
  const startHour = start.getHours();
  const startMinute = start.getMinutes().toString().padStart(2, "0");
  const endHour = end.getHours();
  const endMinute = end.getMinutes().toString().padStart(2, "0");

  const formatted = `${year}年${month}月${day}日 ${startHour}:${startMinute}〜${endHour}:${endMinute}`;

  return <p className="broadcast-time">放送時間：{formatted}</p>;
};
