"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
import SponsorCard from "@/components/ui/cards";

import mlh from "@/public/partnersPage/mlh.svg";
import github from "@/public/partnersPage/github.svg";
import postman from "@/public/partnersPage/postman.svg";
import godspeed from "@/public/partnersPage/godspeed.svg";
import devfolio from "@/public/partnersPage/devfolio.svg";
import edubard from "@/public/partnersPage/edubard.svg";
import bobble from "@/public/partnersPage/bobble.svg";
import wolfram from "@/public/partnersPage/wolfram.svg";
import balsamiq from "@/public/partnersPage/balsamiq.svg";

import CircleAnimation from "@/components/CircleAnimation";
import Footer from "@/components/Footer";

const NormalSponsors = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 pt-8">
        <SponsorCard
          sponsor={"MLH"}
          category={"Platform Partner"}
          sponsorimgsrc={mlh}
        />
        <SponsorCard
          sponsor={"Github"}
          category={"Gold Sponsor"}
          sponsorimgsrc={github}
        />
        <SponsorCard
          sponsor={"Postman"}
          category={"Gold Sponsor"}
          sponsorimgsrc={postman}
        />
        <SponsorCard
          sponsor={"Godspeed Systems"}
          category={"Silver Sponsor"}
          sponsorimgsrc={godspeed}
        />
        <SponsorCard
          sponsor={"Devfolio"}
          category={"Platform Partner"}
          sponsorimgsrc={devfolio}
        />
      </div>
    </>
  );
};

const InKindSponsors = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 pt-8">
      <SponsorCard
        sponsor={"Bobble Fan Store"}
        category={"Merch Partner"}
        sponsorimgsrc={bobble}
      />
      <SponsorCard
        sponsor={"Balsamiq"}
        category={"community Sponsor"}
        sponsorimgsrc={balsamiq}
      />
      <SponsorCard
        sponsor={"Edubard"}
        category={"Media Partner"}
        sponsorimgsrc={edubard}
      />
      <SponsorCard
        sponsor={"Wolfram"}
        category={"Community Sponsor"}
        sponsorimgsrc={wolfram}
      />
    </div>
  );
};

const Partners = () => {
  const [selectedTab, setSelectedTab] = useState("Sponsors");

  const handleTabChange = (category) => {
    setSelectedTab(category);
  };
  return (
    <>
      <div className="bg-[#101010] flex flex-col items-center min-h-screen sm:px-20 px-4 py-52">
        {window.innerWidth <= 500 ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-[#353535] text-white w-full p-4 text-xl outline-none flex justify-between">
                Sponsors
                <ChevronDownIcon className="w-6 h-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-76 text-white border-none">
                <DropdownMenuItem
                  className="p-3 text-xl bg-[#353535] hover:bg-[#333333] flex justify-between"
                  onClick={() => handleTabChange("Sponsors")}
                >
                  Sponsors
                  {selectedTab == "Sponsors" && (
                    <CheckIcon className="h-6 w-8 text-white" />
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="p-3 text-xl bg-[#353535] hover:bg-[#333333] flex justify-between"
                  onClick={() => handleTabChange("Inkind")}
                >
                  In Kind Sponsors
                  {selectedTab == "InKind" && (
                    <CheckIcon className="h-6 w-8 text-white" />
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {selectedTab === "Sponsors" ? (
              <NormalSponsors />
            ) : (
              <InKindSponsors />
            )}
          </>
        ) : (
          <Tabs
            defaultValue="Sponsors"
            className="flex flex-col justify-center items-center text-white"
          >
            <TabsList className="mb-16">
              <TabsTrigger
                value="Sponsors"
                className="p-4 w-60 text-2xl leading-7"
              >
                Sponsors
              </TabsTrigger>
              <TabsTrigger
                value="InKind Sponsors"
                className="p-4 w-60 text-2xl leading-7"
              >
                In Kind Sponsors
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Sponsors">
              <NormalSponsors />
            </TabsContent>
            <TabsContent value="InKind Sponsors">
              <InKindSponsors />
            </TabsContent>
          </Tabs>
        )}
      </div>

      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
            px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
                    text-white font-normal font-['Clash Grotesk'] md:leading-[8rem] 
                        lg:leading-[10rem] tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>

          <CircleAnimation />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Partners;
