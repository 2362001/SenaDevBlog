"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import senalogo from "@/public/sena-technologies-seeklogo.svg";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import bellicon from "@/public/bell.svg";
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
          <>
            <Link href="/newpost">
              <Button className="mr-2">Create Post</Button>
            </Link>
            <Link href="/notifications">
              <div>
                <Image
                  width={25}
                  height={25}
                  className="mr-2 cursor-pointer"
                  alt="#"
                  src={bellicon}
                />
              </div>
            </Link>

            <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></div>
            {/* <Button className="mr-2">Log out</Button> */}
          </>
        ) : (
          <>
            <Button className="mr-2">Log in</Button>
            <Button variant="outline">Sign up</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderCommon;
