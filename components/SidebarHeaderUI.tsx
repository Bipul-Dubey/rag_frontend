"use client";
import * as React from "react";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function SidebarHeaderUI() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center gap-2">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            T
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">KnowYourDocs</span>
            {/* <span className="truncate text-xs">Plan</span> */}
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
