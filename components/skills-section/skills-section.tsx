"use client";

import {
  designSkills,
  developmentSkills,
  interests,
} from "@/lib/generalFactory";
import { BadgeElement } from "@/lib/generalTypes";
import { useState } from "react";
import { getSkillComponent } from "@/components/skill-components/skill-component-mapping";
import CustomDrawerBadge from "@/components/custom-drawer-badge";
import { TypographyP } from "@/components/typography/p";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Development");

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
    <div>
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
  );
}
