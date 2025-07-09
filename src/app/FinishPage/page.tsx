"use client";
import React from "react";
import Image from "next/image";
import smcu from "/public/smcu.png"; // Adjust the path as necessary
import { useSearchParams } from "next/navigation";

export default function FinishPage() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  return (
    <div>
      <div className="w-full">
        <div style={{ width: "100vw" }}>
          <div
            id="home"
            className="dark:text-white dark:bg-darkerpurple bg-white pb-8 pt-8 text-center"
          >
            <Image
              className="mx-auto"
              src={smcu}
              alt="it_smcu"
              width={274.5}
              height={274.5}
              priority
            />
          </div>
          <div className="text-center text-5xl font-sans">
            ลงทะเบียนสำเร็จแล้ว
          </div>
          <div className="mt-8 text-center text-2xl font-semibold">
            {firstName}
            {" "}
            {lastName}
          </div>
        </div>
      </div>
    </div>
  );
}
