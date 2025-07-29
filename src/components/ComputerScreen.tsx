import React from "react";

const ComputerScreen: React.FC = () => {
    return (
        <div>
            <div className="retro-screen pointer-events-none fixed top-0 z-[99] h-[1vh] min-h-full w-full bg-cover" />

            <div className="pointer-events-none fixed top-0 z-[97] h-[1vh] min-h-full w-full bg-cover">
                <div className="flicker-screen absolute bottom-0 h-10 w-full" />
            </div>

            <canvas
                id="canvas1"
                className="pointer-events-none fixed top-0 z-[98] h-[1vh] min-h-full w-full bg-cover"
            />

            <div className="pointer-events-none fixed top-0 z-[100] box-border h-[1vh] min-h-full w-full border-[14px] border-b-casingDark border-l-casingDark border-r-casingLight border-t-casingLight">
                <div className="box-border h-full w-full border-[12px] border-b-bezelDark border-l-bezelDark border-r-bezelLight border-t-bezelLight">
                    <div className="flex h-full w-full border-8 border-screenEdge inset-shadow-[0_0_30px_black]" />
                </div>
            </div>
        </div>
    );
};

export default ComputerScreen;
