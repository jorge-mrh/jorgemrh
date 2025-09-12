"use client";

import CustomDrawerBadge from "@/components/CustomDrawerBadge";
import LoginForm from "@/components/Login";
import PersonalCard from "@/components/PersonalCard";
import TypographyH1 from "@/components/Typography/H1";
import { TypographyP } from "@/components/Typography/P";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  designSkills,
  developmentSkills,
  interests,
} from "@/lib/generalFactory";
import { BadgeElement } from "@/lib/generalTypes";
import { getSkillComponent } from "@/components/SkillComponents/skillComponentMapping";
import { useAuthStore } from "@/stores/authStore";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Development");

  const user = useAuthStore((state) => state.user);
  const profile = useAuthStore((state) => state.profile);

  const loading = useAuthStore((state) => state.loading);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("User:", user);
  console.log("Profile:", profile);

  const getCurrentSkills = (): BadgeElement[] => {
    switch (selectedCategory) {
      case "Development":
        return developmentSkills;
      case "Design":
        return designSkills;
      case "Interests":
        return interests;
      default:
        return interests;
    }
  };

  return (
    <div className="flex items-center flex-col gap-5">
      <div className="flex flex-col items-start max-w-2xl w-full gap-5 md:px-10">
        <TypographyH1 text={"Welcome"} />
        <TypographyP
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel massa sed felis egestas sagittis ut vel neque. Donec facilisis arcu ut ex dictum mollis. Nullam efficitur dictum nunc vitae porta."
          }
        />
        <PersonalCard />
        <ToggleGroup
          variant={"outline"}
          type="single"
          className="min-w-80 mb-3"
          value={selectedCategory}
          onValueChange={(value) => {
            if (value) setSelectedCategory(value);
          }}
        >
          <ToggleGroupItem className="cursor-pointer" value="Development">
            Development
          </ToggleGroupItem>
          <ToggleGroupItem className="cursor-pointer" value="Design">
            Design
          </ToggleGroupItem>
          <ToggleGroupItem className="cursor-pointer" value="Interests">
            Interests
          </ToggleGroupItem>
        </ToggleGroup>
        <TypographyP
          text="Click on any of the items below to view more."
          textSize="text-xs"
        />
        <div className="flex flex-wrap gap-2 mb-2">
          {getCurrentSkills().map((skill, index) => (
            <CustomDrawerBadge
              key={index}
              text={skill.name}
              color={skill.color}
              textColor="text-white"
              drawerContent={getSkillComponent(skill.name)}
            />
          ))}
        </div>
      </div>

      {!user && (
        <div className="flex justify-center">
          <LoginForm className="max-w-120 min-w-90 mt-5" />
        </div>
      )}
    </div>
  );
}
