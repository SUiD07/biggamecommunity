"use client"
import React from "react";
import Image from "next/image";
import smcu from "/public/smcu.png"; // Adjust the path as necessary

export default function FinishPage() {
    return (
        <div>
            <div className="w-full">
                <div style={{ width: "100vw" }}>
                    <div
                        id="home"
                        className="bg-white dark:text-white dark:bg-darkerpurple bg-white pb-8 pt-8 text-center"
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



                </div>
            </div>
        </div>
    );
}