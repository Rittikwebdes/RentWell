import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function TopRooms() {

  return (
    <>
      <div>
        <div className="bg-white">
          <div className="flex items-center justify-start mx-9">
            <div className="w-9 h-1 bg-orange-500 "></div>
            <h2 className="text-5xl font-bold text-black">
              Top Category Rooms
            </h2>
          </div>
          <div>
          <div>
                  <img src="" alt="logo"  />
                  <div className="flex gap-2">
                    <p>hello</p>
                    <p>price</p>
                  </div>
                  <h1>dfdhdg</h1>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
