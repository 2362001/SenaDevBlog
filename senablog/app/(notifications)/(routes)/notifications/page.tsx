import HeaderCommon from "@/components/commons/header";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Notifications = () => {
  return (
    <div className="w-full h-full">
      <HeaderCommon />
      <Tabs defaultValue="account" className="h-full">
        <div className="h-full pt-10 w-full flex justify-center">
          <div className="w-9/12 flex justify-between">
            <div className=" w-1/3 px-6 text-center">
              <span className="text-4xl">Notifications</span>
              <div className="w-full py-10 text-3xl">
                <TabsList className="flex flex-col gap-y-1.5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  <TabsTrigger value="posts">Posts</TabsTrigger>
                </TabsList>
              </div>
            </div>
            <div className="rounded-lg text-base text-center border w-2/3 h-max min-h-96">
              <TabsContent value="all">
                You are on a roll! 🎉 Do you have a Forem account? Consider
                connecting it. Visit Settings to manage your notifications.
              </TabsContent>
              <TabsContent value="comments"></TabsContent>
              <TabsContent value="posts"></TabsContent>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Notifications;
