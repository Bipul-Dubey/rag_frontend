"use client";

import { MoreHorizontal, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useAuth } from "@clerk/nextjs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteChat, getChats } from "@/services/apis";
import Link from "next/link";
import { PATHS } from "@/constants/paths";
import { useParams } from "next/navigation";

export function ChatListing() {
  const { slug: currentChatId } = useParams();

  const { isMobile } = useSidebar();
  const { userId } = useAuth();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["chats", userId],
    queryFn: () => getChats(userId!),
    enabled: !!userId,
  });

  const deleteMutation = useMutation({
    mutationFn: (chatId: string) => deleteChat(chatId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chats", userId] });
    },
  });

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
  };

  return isLoading ? (
    <>Loading...</>
  ) : (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Chats</SidebarGroupLabel>
      <SidebarMenu>
        {data?.map((item) => (
          <SidebarMenuItem key={item.chat_id}>
            <SidebarMenuButton
              asChild
              className={
                item.chat_id === currentChatId
                  ? "bg-gray-800 text-white"
                  : undefined
              }
            >
              <Link href={`${PATHS.RAG_CHATS}/${item.chat_id}`}>
                <span>{item.chat_name}</span>
              </Link>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                {/* <DropdownMenuItem>
                  <Forward className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator /> */}
                <DropdownMenuItem
                  onClick={() => {
                    handleDelete(item.chat_id);
                  }}
                >
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete Chat</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        {/* <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem> */}
      </SidebarMenu>
    </SidebarGroup>
  );
}
