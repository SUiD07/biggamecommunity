"use client";
import Link from 'next/link';
import UpperForm from "../components/mine/UpperForm";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { LowerForm } from '@/components/mine/LowerForm';

export default function Home() {
  return (
    <>
      <Link className="hover:font-bold" href="./FinishPage">
        Article
      </Link>
      <LowerForm/>
      {/* <UpperForm /> */}
    </>
  );
}
