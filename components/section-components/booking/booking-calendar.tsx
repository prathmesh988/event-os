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
import { typography, buttonSizes, gaps, responsiveSpacing } from "@/constants";

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
      <div
        className={`flex flex-col items-center justify-center text-center ${responsiveSpacing.contentGap}`}
      >
        <div className={responsiveSpacing.contentGap}>
          <h2 className={`${typography.heading.h2} text-white drop-shadow-lg`}>
            Booking Calendar
          </h2>
          <p className={`${typography.body.base} text-white/80 drop-shadow-md`}>
            Check available dates for your event
          </p>
        </div>
        <DialogTrigger asChild>
          <Button
            className={`${buttonSizes.sizes.lg} bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/40 hover:border-white/60 shadow-xl transition-all duration-300 hover:scale-105`}
          >
            Open Calendar
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className={typography.heading.h3}>
            Select a Date
          </DialogTitle>
        </DialogHeader>
        <div className={`flex items-center justify-between mb-3`}>
          <Button
            variant="outline"
            onClick={prevMonth}
            className={`${buttonSizes.sizes.sm} hover:bg-accent bg-transparent`}
          >
            Prev
          </Button>
          <div
            className={`${typography.weight.medium} ${typography.body.base}`}
          >
            {cursor.toLocaleString(undefined, {
              month: "long",
              year: "numeric",
            })}
          </div>
          <Button
            variant="outline"
            onClick={nextMonth}
            className={`${buttonSizes.sizes.sm} hover:bg-accent bg-transparent`}
          >
            Next
          </Button>
        </div>
        <div
          className={`grid grid-cols-7 ${gaps.element.tight} text-center ${typography.body.sm}`}
        >
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
                className={`aspect-square rounded-md border flex items-center justify-center ${
                  typography.body.sm
                } ${typography.weight.medium} transition-colors
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
        <p className={`mt-3 ${typography.body.xs} text-muted-foreground`}>
          Tip: Dates in red are already booked. After selecting an available
          date, scroll to the Booking section to submit your inquiry.
        </p>
      </DialogContent>
    </Dialog>
  );
}
