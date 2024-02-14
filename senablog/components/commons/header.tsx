"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import senalogo from "@/public/sena-technologies-seeklogo.svg";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

const HeaderCommon = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="h-16 w-full flex items-center justify-between px-6 border-b-2 border-solid">
      <div className="w-1/2 flex items-center justify-between">
        <Link href="/">
          <Image
            src={senalogo}
            alt="#"
            width={80}
            height={100}
            className="mr-4 cursor-pointer"
          />
        </Link>
        <Input placeholder="Search..." className="border-solid border-2 h-10" />
      </div>
      <div className="flex  items-center justify-between">
        {isSignedIn ? (
          <Button className="mr-2">Đăng xuất</Button>
        ) : (
          <>
            <Button className="mr-2">Đăng nhập</Button>
            <Button variant="outline">Đăng kí</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderCommon;
