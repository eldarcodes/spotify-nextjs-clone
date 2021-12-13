import React from "react";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  RssIcon,
  HeartIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import SidebarButton from "./SidebarButton";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <aside className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <SidebarButton icon={<HomeIcon className="w-5 h-5" />} label="Home" />
        <SidebarButton
          icon={<SearchIcon className="w-5 h-5" />}
          label="Search"
        />
        <SidebarButton
          icon={<LibraryIcon className="w-5 h-5" />}
          label="Your Library"
        />
        <hr className="border-t-[0.1px] border-gray-900" />
        <SidebarButton
          icon={<PlusCircleIcon className="w-5 h-5" />}
          label="Create Playlist"
        />
        <SidebarButton
          icon={<HeartIcon className="w-5 h-5" />}
          label="Liked Songs"
        />
        <SidebarButton
          icon={<RssIcon className="w-5 h-5" />}
          label="Your episodes"
        />
        <hr className="border-t-[0.1px] border-gray-900" />
        <p className="cursor-pointer hover:text-white">Playlist name</p>
      </div>
    </aside>
  );
};

export default Sidebar;
