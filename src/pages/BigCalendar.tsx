import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

interface EventInput {
  title: string;
  date: string;
}

const defaultEvents: EventInput[] = [
  {
    title: "رویداد 1",
    date: "2024-01-01",
  },
  {
    title: "رویداد 2",
    date: "2024-01-02",
  },
];

const BigCalendar = () => {
  const [events, setEvents] = useState<EventInput[]>(defaultEvents);

  return (
    <div className="w-780 mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        editable={true}
        height={500}
      />
    </div>
  );
};

export default BigCalendar;
