import AKeyIcon from "../assets/icons/a-key";
import BackspaceIcon from "../assets/icons/backspace";
import DKeyIcon from "../assets/icons/d-key";
import FKeyIcon from "../assets/icons/f-key";
import LeftArrowIcon from "../assets/icons/left-arrow";
import OneKeyIcon from "../assets/icons/one-key";
import RKeyIcon from "../assets/icons/r-key";
import RightArrowIcon from "../assets/icons/right-arrow";
import SKeyIcon from "../assets/icons/s-key";
import TabIcon from "../assets/icons/tab";
import ThreeKeyIcon from "../assets/icons/three-key";
import TwoKeyIcon from "../assets/icons/two-key";

const Shortcuts = () => {
  return (
    <div className="flex gap-3 flex-wrap justify-center items-center max-w-screen">
        <div className="flex rounded-xl p-2 flex-col gap-3 border shadow-sm bg-white">
            <div className="mt-1 ml-2 font-medium">Navigation</div>
            <div className="flex gap-2 items-center">
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <LeftArrowIcon />
                    Prev
                </div>
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <RightArrowIcon/>
                    Next
                </div>
            </div>
        </div>
        <div className="flex rounded-xl p-2 flex-col gap-3 border shadow-sm bg-white">
            <div className="mt-1 ml-2 font-medium">Corrections</div>
            <div className="flex gap-2 items-center">
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <TabIcon/>
                    Skip
                </div>
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <BackspaceIcon/>
                    Delete
                </div>
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <RKeyIcon/>
                    Reset
                </div>
            </div>
        </div>
        <div className="flex rounded-xl p-2 flex-col gap-3 border shadow-sm bg-white">
            <div className="mt-1 ml-2 font-medium">Charting</div>
            <div className="flex gap-2 items-center">
                <div className="flex items-center gap-1 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <OneKeyIcon/>
                    <TwoKeyIcon/>
                    <ThreeKeyIcon/>
                    <div className="ml-1">Value</div>
                </div>
            </div>
        </div>
        <div className="flex rounded-xl p-2 flex-col gap-3 border shadow-sm bg-white">
            <div className="mt-1 ml-2 font-medium">Flags</div>
            <div className="flex gap-2 items-center">
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <FKeyIcon/>
                    Furcation
                </div>
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <DKeyIcon/>
                    Implant
                </div>
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <SKeyIcon/>
                    Bleeding
                </div>
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <AKeyIcon/>
                    Plaque
                </div>
            </div>
        </div>
    </div>
  )
};

export default Shortcuts;