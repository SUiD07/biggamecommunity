"use client";

import * as React from "react";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "../ui/checkbox";

function formatDate(date: Date | undefined) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  return date instanceof Date && !isNaN(date.getTime());
}

export function LowerForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    classYear: "",
    foodAllergies: "",
    dateOfBirth: "",
    notes: "",
  });

  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      alert("กรุณายอมรับข้อตกลงก่อนลงทะเบียน");
      return;
    }
    try {
      ///////อันนี้ทำไง ;;;-;;;;;;
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.push(
          `/FinishPage?firstName=${encodeURIComponent(
            form.firstName
          )}&lastName=${encodeURIComponent(form.lastName)}`
        );
      } else {
        alert("เกิดข้อผิดพลาดในการลงทะเบียน");
      }
    } catch (err) {
      console.error(err);
      alert("การเชื่อมต่อผิดพลาด");
    }
  };

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [month, setMonth] = useState<Date | undefined>(date);
  const [value, setValue] = useState("");

  return (
    <div className="columns-2 flex">
      <img src="smcu.png" className="w-1/2" />
      <div className="w-1/2 mt-20 mr-10">
        <div className="text-3xl font-semibold">Register With SMCU</div>
        <form onSubmit={handleSubmit}>
          <div className="mt-3 mb-1">ชื่อ</div>
          <Input
            name="firstName"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            required
          />

          <div className="mt-3 mb-1">นามสกุล</div>
          <Input
            name="lastName"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            required
          />

          <div className="mt-3 mb-1">ชั้นปี</div>
          <Input
            name="classYear"
            value={form.classYear}
            onChange={(e) => setForm({ ...form, classYear: e.target.value })}
            required
          />

          <div className="mt-3 mb-1">อาหารที่แพ้</div>
          <Input
            name="foodAllergies"
            placeholder="หากไม่มี ให้ใส่ -"
            value={form.foodAllergies}
            onChange={(e) =>
              setForm({ ...form, foodAllergies: e.target.value })
            }
          />

          <Label htmlFor="date" className="px-1 mt-3 mb-1">
            วัน/เดือน/ปีเกิด
          </Label>
          <div className="relative flex gap-2">
            <Input
              id="date"
              name="dateOfBirth"
              value={value}
              placeholder="Pick a date"
              className="bg-background pr-10"
              onChange={(e) => {
                const inputDate = new Date(e.target.value);
                setValue(e.target.value);
                if (isValidDate(inputDate)) {
                  setDate(inputDate);
                  setMonth(inputDate);
                  setForm({
                    ...form,
                    dateOfBirth: inputDate.toISOString(),
                  });
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setOpen(true);
                }
              }}
            />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  id="date-picker"
                  variant="ghost"
                  className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                >
                  <CalendarIcon className="size-3.5" />
                  <span className="sr-only">Select date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
                alignOffset={-8}
                sideOffset={10}
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={(date) => {
                    setDate(date);
                    setValue(formatDate(date));
                    setForm({
                      ...form,
                      dateOfBirth: date?.toISOString() ?? "",
                    });
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="mt-3 mb-1">อยากฝากอะไรถึงพวกเราไหม</div>
          <Input
            name="notes"
            placeholder="Input Value"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />

          <div className="flex items-start gap-3 mt-3">
            <Checkbox
              id="toggle"
              checked={agree}
              onCheckedChange={(checked) => setAgree(!!checked)}
            />
            <Label htmlFor="toggle">ยอมรับข้อตกลงและเงื่อนไข</Label>
          </div>

          <Button
            type="submit"
            className="w-fit mt-4 bg-[#265642] hover:bg-[#0E201A]"
          >
            ลงทะเบียน
          </Button>
        </form>
      </div>
    </div>
  );
}
