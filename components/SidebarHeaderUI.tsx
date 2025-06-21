"use client";
import * as React from "react";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { PATHS } from "@/constants/paths";

export function SidebarHeaderUI() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center gap-2">
          <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Link href={PATHS.RAG_DASHBOARD}>
              <Image
                src="/favicon.ico"
                alt="Site Icon"
                width={30}
                height={30}
                className="rounded-[6px]"
              />
            </Link>
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
