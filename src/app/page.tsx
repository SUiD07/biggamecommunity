"use client";
import Link from 'next/link';
import LowerForm from "@/app/mine/LowerForm";
import UpperForm from "@/app/mine/UpperForm";
import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <div>Hello world</div>
      <Link className="hover:font-bold" href="./FinishPage">
        Article
      </Link>
      <UpperForm />
      <LowerForm />

      <div>
        <Button>Click me</Button>
      </div>
    </>
  );
}
