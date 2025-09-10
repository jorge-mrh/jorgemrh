"use client";

import CustomBadge from "@/components/CustomBadge";
import { LoginForm } from "@/components/Login";
import TypographyH1 from "@/components/Typography/H1";
import { TypographyP } from "@/components/Typography/P";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  designSkills,
  developmentSkills,
  interests,
} from "@/lib/generalFactory";
import { BadgeElement } from "@/lib/generalTypes";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Interests");

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
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {/* COLUMN 1 */}
      <div>
        <div>
          <TypographyH1 text={"Welcome"} />
          <div className="my-3">
            <TypographyP
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel massa sed felis egestas sagittis ut vel neque. Donec facilisis arcu ut ex dictum mollis. Nullam efficitur dictum nunc vitae porta."
              }
            />
          </div>
        </div>
        <ToggleGroup
          variant={"outline"}
          type="single"
          className="min-w-80 mb-3"
          value={selectedCategory}
          onValueChange={(value) => {
            if (value) setSelectedCategory(value);
          }}
        >
          <ToggleGroupItem value="Development">Development</ToggleGroupItem>
          <ToggleGroupItem value="Design">Design</ToggleGroupItem>
          <ToggleGroupItem value="Interests">Interests</ToggleGroupItem>
        </ToggleGroup>
        <div className="flex flex-wrap w-80 gap-2 mb-2">
          {getCurrentSkills().map((skill, index) => (
            <CustomBadge
              key={index}
              text={skill.name}
              color={skill.color}
              textColor="text-white"
            />
          ))}
        </div>
      </div>
      {/* COLUMN 2 */}
      <div className="flex justify-center">
        <LoginForm className="max-w-120 min-w-90 mt-5" />
      </div>
    </div>
  );
}
