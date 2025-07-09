"use client";
import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>Hello world</div>
      <Link className="hover:font-bold" href="./FinishPage">
        Article
      </Link>
    </>
  );
}
