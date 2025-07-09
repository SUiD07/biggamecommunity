"use client";
import Link from 'next/link';
import UpperForm from "../components/mine/UpperForm";
import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <Link className="hover:font-bold" href="./FinishPage">
        Article
      </Link>
      <UpperForm />
    </>
  );
}
