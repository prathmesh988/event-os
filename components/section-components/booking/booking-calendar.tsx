"use client";

import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
import { Button } from "@/components/shared/ui/button";

const BOOKED_DATES = new Set(["5", "8", "12", "15", "19", "22", "26", "29"]);

function buildMonthGrid(date: Date) {
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const startDay = start.getDay(); // 0-6
  const daysInMonth = end.getDate();

  const grid: Array<{ day?: number; disabled?: boolean }> = [];
  for (let i = 0; i < startDay; i++) grid.push({});
  for (let d = 1; d <= daysInMonth; d++) grid.push({ day: d });
  return grid;
}

function isDateBooked(day: number): boolean {
  return BOOKED_DATES.has(String(day));
}

export function BookingCalendar() {
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(() => new Date());
  const grid = useMemo(() => buildMonthGrid(cursor), [cursor]);

  function prevMonth() {
    const d = new Date(cursor);
    d.setMonth(cursor.getMonth() - 1);
    setCursor(d);
  }
  function nextMonth() {
    const d = new Date(cursor);
    d.setMonth(cursor.getMonth() + 1);
    setCursor(d);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between py-4">
        <h2 className="text-2xl font-semibold text-white drop-shadow-lg">
          Booking Calendar
        </h2>
        <DialogTrigger asChild>
          <Button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30 shadow-lg">
            Open Calendar
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Select a Date</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between mb-3">
          <Button
            variant="outline"
            onClick={prevMonth}
            className="hover:bg-accent bg-transparent"
          >
            Prev
          </Button>
          <div className="font-medium">
            {cursor.toLocaleString(undefined, {
              month: "long",
              year: "numeric",
            })}
          </div>
          <Button
            variant="outline"
            onClick={nextMonth}
            className="hover:bg-accent bg-transparent"
          >
            Next
          </Button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center text-sm">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
            <div key={d} className="text-muted-foreground">
              {d}
            </div>
          ))}
          {grid.map((cell, i) => {
            const booked = cell.day ? isDateBooked(cell.day) : false;
            return (
              <button
                key={i}
                disabled={!cell.day || booked}
                className={`aspect-square rounded-md border flex items-center justify-center text-sm font-medium transition-colors
                  ${!cell.day ? "opacity-30 border-border" : ""}
                  ${
                    booked
                      ? "bg-destructive/20 border-destructive text-destructive line-through opacity-60 cursor-not-allowed"
                      : "border-border hover:bg-accent"
                  }
                `}
                aria-disabled={!cell.day || booked}
                onClick={() => {
                  if (!cell.day || booked) return;
                  const sel = new Date(
                    cursor.getFullYear(),
                    cursor.getMonth(),
                    cell.day
                  );
                  alert(
                    `Selected ${sel.toDateString()}. Proceed to "Booking & Availability" to submit.`
                  );
                  setOpen(false);
                }}
              >
                {cell.day ?? ""}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Tip: Dates in red are already booked. After selecting an available
          date, scroll to the Booking section to submit your inquiry.
        </p>
      </DialogContent>
    </Dialog>
  );
}
