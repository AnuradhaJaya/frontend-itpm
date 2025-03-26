import { useState } from "react";
import { Link } from "react-router-dom";


import React from 'react'

const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const USER = {
    name: "John Smith",
    email: "johnson@nextadmin.com",
    img: "/images/user/user-03.png",
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded align-middle outline-none ring-primary ring-offset-2 focus-visible:ring-1 dark:ring-offset-gray-dark"
      >
        <span className="sr-only">My Account</span>
        <figure className="flex items-center gap-3">
          <img
            src={USER.img}
            className="size-12"
            alt={`Avatar of ${USER.name}`}
          />
          <figcaption className="flex items-center gap-1 font-medium text-dark dark:text-dark-6 max-[1024px]:sr-only">
            <span>{USER.name}</span>
  
          </figcaption>
        </figure>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 border border-stroke bg-white shadow-md dark:border-dark-3 dark:bg-gray-dark">
          <h2 className="sr-only">User information</h2>

          <div className="flex items-center gap-2.5 px-5 py-3.5">
            <img src={USER.img} className="size-12" alt={`Avatar for ${USER.name}`} />
            <div className="space-y-1 text-base font-medium">
              <div className="mb-2 leading-none text-dark dark:text-white">{USER.name}</div>
              <div className="leading-none text-gray-6">{USER.email}</div>
            </div>
          </div>

          <hr className="border-[#E8E8E8] dark:border-dark-3" />

          <div className="p-2 text-base text-[#4B5563] dark:text-dark-6">
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
            >
              <span className="mr-auto text-base font-medium">View profile</span>
            </Link>

            <Link
              to="/pages/settings"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
            >
              <span className="mr-auto text-base font-medium">Account Settings</span>
            </Link>
          </div>

          <hr className="border-[#E8E8E8] dark:border-dark-3" />

          <div className="p-2 text-base text-[#4B5563] dark:text-dark-6">
            <button
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-base font-medium">Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage
