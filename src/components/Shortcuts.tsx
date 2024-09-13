import { useEffect, useState } from "react";
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
    const [isKeyFPressed, setIsKeyFPressed] = useState(false)
    const [isKeyDPressed, setIsKeyDPressed] = useState(false)
    const [isKeySPressed, setIsKeySPressed] = useState(false)
    const [isKeyAPressed, setIsKeyAPressed] = useState(false)
    const [isKey1Pressed, setIsKey1Pressed] = useState(false)
    const [isKey2Pressed, setIsKey2Pressed] = useState(false)
    const [isKey3Pressed, setIsKey3Pressed] = useState(false)
    const [isKeyRPressed, setIsKeyRPressed] = useState(false)
    const [isBackspacePressed, setIsBackspacePressed] = useState(false)
    const [isTabPressed, setIsTabPressed] = useState(false)
    const [isRightArrowPressed, setIsRightArrowPressed] = useState(false)
    const [isLeftArrowPressed, setIsLeftArrowPressed] = useState(false)

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key.toLowerCase()) {
          case 'f': setIsKeyFPressed(true); break
          case 'd': setIsKeyDPressed(true); break
          case 's': setIsKeySPressed(true); break
          case 'a': setIsKeyAPressed(true); break
          case '1': setIsKey1Pressed(true); break
          case '2': setIsKey2Pressed(true); break
          case '3': setIsKey3Pressed(true); break
          case 'r': setIsKeyRPressed(true); break
          case 'backspace': setIsBackspacePressed(true); break
          case 'tab': setIsTabPressed(true); break
          case 'arrowright': setIsRightArrowPressed(true); break
          case 'arrowleft': setIsLeftArrowPressed(true); break
        }
      }

      const handleKeyUp = (event: KeyboardEvent) => {
        switch (event.key.toLowerCase()) {
          case 'f': setIsKeyFPressed(false); break
          case 'd': setIsKeyDPressed(false); break
          case 's': setIsKeySPressed(false); break
          case 'a': setIsKeyAPressed(false); break
          case '1': setIsKey1Pressed(false); break
          case '2': setIsKey2Pressed(false); break
          case '3': setIsKey3Pressed(false); break
          case 'r': setIsKeyRPressed(false); break
          case 'backspace': setIsBackspacePressed(false); break
          case 'tab': setIsTabPressed(false); break
          case 'arrowright': setIsRightArrowPressed(false); break
          case 'arrowleft': setIsLeftArrowPressed(false); break
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
      }
    }, [])
  return (
    <div className="flex gap-3 flex-wrap justify-center items-center max-w-screen">
        <div className="flex rounded-xl p-2 flex-col gap-3 border shadow-sm bg-white">
            <div className="mt-1 ml-2 font-medium">Navigation</div>
            <div className="flex gap-2 items-center">
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <LeftArrowIcon isKeyPressed={isLeftArrowPressed} />
                    Prev
                </div>
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <RightArrowIcon isKeyPressed={isRightArrowPressed} />
                    Next
                </div>
            </div>
        </div>
        <div className="flex rounded-xl p-2 flex-col gap-3 border shadow-sm bg-white">
            <div className="mt-1 ml-2 font-medium">Corrections</div>
            <div className="flex gap-2 items-center">
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <TabIcon isKeyPressed={isTabPressed} />
                    Skip
                </div>
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <BackspaceIcon isKeyPressed={isBackspacePressed} />
                    Delete
                </div>
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <RKeyIcon isKeyPressed={isKeyRPressed} />
                    Reset
                </div>
            </div>
        </div>
        <div className="flex rounded-xl p-2 flex-col gap-3 border shadow-sm bg-white">
            <div className="mt-1 ml-2 font-medium">Charting</div>
            <div className="flex gap-2 items-center">
                <div className="flex items-center gap-1 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <OneKeyIcon isKeyPressed={isKey1Pressed} />
                    <TwoKeyIcon isKeyPressed={isKey2Pressed} />
                    <ThreeKeyIcon isKeyPressed={isKey3Pressed} />
                    <div className="ml-1">Value</div>
                </div>
            </div>
        </div>
        <div className="flex rounded-xl p-2 flex-col gap-3 border shadow-sm bg-white">
            <div className="mt-1 ml-2 font-medium">Flags</div>
            <div className="flex gap-2 items-center">
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <FKeyIcon isKeyPressed={isKeyFPressed} />
                    Furcation
                </div>
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <DKeyIcon isKeyPressed={isKeyDPressed} />
                    Implant
                </div>
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <SKeyIcon isKeyPressed={isKeySPressed} />
                    Bleeding
                </div>
                <div className="flex items-center gap-2 p-2 bg-[#F1F2F3] rounded-lg font-medium font-[14px] cursor-pointer">
                    <AKeyIcon isKeyPressed={isKeyAPressed} />
                    Plaque
                </div>
            </div>
        </div>
    </div>
  )
};

export default Shortcuts;