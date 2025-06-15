"use client";
import { Button } from "@/components/ui/moving-border";
import React from "react";

const HowItWorkButton = () => {
  const scrollToSection = () => {
    const section = document.getElementById("howitwork");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <Button onClick={scrollToSection}>How It Works</Button>;
};

export default HowItWorkButton;
