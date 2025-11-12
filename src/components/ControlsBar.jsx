import React from "react";
import { useTestDispatch } from "../context/TestContext.jsx";

export default function ControlsBar({ onSubmit }) {
  const dispatch = useTestDispatch();

  const handleMarkReview = () => dispatch({ type: "MARK_REVIEW" });
  const handleSaveAndNext = () => dispatch({ type: "SAVE_AND_NEXT" });
  const handleSkip = () => dispatch({ type: "SKIP" });
  const handleGoBack = () => dispatch({ type: "GO_BACK" });
  const handleForward = () => dispatch({ type: "SAVE_AND_NEXT" }); // forward same as save&next for now




  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-md flex items-center justify-between px-10 py-3"
      role="toolbar"
      aria-label="Question controls"
    >
      {/* Centered group of control buttons */}
      <div className="flex justify-center gap-4 mx-auto">
        <button
          className="px-4 py-2 text-sm font-medium bg-[#5c4d7d] hover:bg-[#43325f] text-white rounded-md transition-all duration-200"
          onClick={handleMarkReview}
        >
          Mark for Review
        </button>

        <button
          className="px-4 py-2 text-sm font-medium bg-[#5c4d7d] hover:bg-[#43325f] text-white rounded-md transition-all duration-200"
          onClick={handleGoBack}
        >
          backward
        </button>

        <button
          className="px-4 py-2 text-sm font-medium bg-[#5c4d7d] hover:bg-[#43325f] text-white rounded-md transition-all duration-200"
          onClick={handleSaveAndNext}
        >
          Save & Next
        </button>

        <button
          className="px-4 py-2 text-sm font-medium bg-[#5c4d7d] hover:bg-[#43325f] text-white rounded-md transition-all duration-200"
          onClick={handleForward}
        >
          forward
        </button>
      </div>

      {/* Submit button on the far right */}
      <button
        className="px-4 py-2 text-sm font-medium bg-green-600 hover:bg-green-700 text-white rounded-md transition-all duration-200 ml-8"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
}
