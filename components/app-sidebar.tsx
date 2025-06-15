"use client";
import * as React from "react";
import { BookOpen } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { PATHS } from "@/constants/paths";
import { ChatListing } from "./ChatListing";
import { SidebarFooterUI } from "./SidebarFooterUI";
import { SidebarHeaderUI } from "./SidebarHeaderUI";

const data = {
  navMain: [
    // {
    //   title: "Playground",
    //   url: "#",
    //   icon: SquareTerminal,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "History",
    //       url: "#",
    //     },
    //     {
    //       title: "Starred",
    //       url: "#",
    //     },
    //     {
    //       title: "Settings",
    //       url: PATHS.RAG_DOCUMENTS,
    //     },
    //   ],
    // },
    {
      title: "Manage Docs",
      url: PATHS.RAG_DOCUMENTS,
      icon: BookOpen,
      items: [],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarHeaderUI />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <ChatListing />
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterUI />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
