import React from "react";
import { Button } from "../ui/button";
import { AudioLines, Send } from "lucide-react";
import CustomTooltip from "../common/CustomTooltip";
import { Textarea } from "../ui/textarea";

const InputContainer = () => {
  return (
    <div className="border-2 flex flex-col p-0 rounded-[12px] bg-accent w-full max-w-[750px] min-h-25">
      {/* input */}
      <div className="flex-1">
        <Textarea
          className="border-none rounded-b-none resize-none max-h-[60vh] overflow-y-auto shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
          style={{ height: "auto", backgroundColor: "transparent" }}
        />
      </div>
      {/* button */}
      <div className="mb-1 self-end flex items-center gap-2 justify-between w-full px-2">
        <CustomTooltip title="Voice Commands">
          <Button
            variant={"outline"}
            className="w-9 h-9 border-0 rounded-full"
            size={"icon"}
          >
            <AudioLines />
          </Button>
        </CustomTooltip>
        <Button
          variant={"outline"}
          size={"icon"}
          className="w-9 h-9 border-0 rounded-full"
        >
          <Send />
        </Button>
      </div>
    </div>
  );
};

export default InputContainer;
