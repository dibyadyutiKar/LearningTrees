import React, { useState } from "react";

const AnnouncementBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-[#162447] text-white text-center py-3 text-lg font-medium shadow-md z-50">
      🎉 Demo classes starting from{" "}
      <span className="font-semibold">2nd week of March!</span>
      {/* <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-lg font-bold"
      >
        ✖
      </button> */}
    </div>
  );
};

export default AnnouncementBanner;
