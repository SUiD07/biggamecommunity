import React from "react";
import { Input } from "../ui/input";
import { LowerForm } from "./LowerForm";

function UpperForm() {
  return (
    <>
      <div className="columns-2 flex">
        <img src="smcu.png" className="w-1/2"></img>
        <div className="w-1/2 mt-20 mr-10">
          <div className="text-3xl font-semibold flex-initial">
            Register With SMCU
          </div>
          <div className="mt-3 mb-1">ชื่อ</div>
          <Input></Input>
          <div className="mt-3 mb-1">นามสกุล</div>
          <Input></Input>
          <div className="mt-3 mb-1">ชั้นปี</div>
          <Input></Input>
          <LowerForm/>
        </div>
      </div>
    </>
  );
}

export default UpperForm;
