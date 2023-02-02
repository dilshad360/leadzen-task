import React, { useState } from "react";

function UserCard({ user }) {
  const [view, setView] = useState(false);

  return (
    <div className="shadow-xl m-3 p-9 rounded-xl bg-white">
      <ul className="flex  justify-between items-center">
        <li className="font-bold flex-1">{user.name}</li>
        <li className="flex  flex-col flex-1">
          <span className="font-semibold">Username</span>{user.username}
        </li>
        <li className="flex flex-col flex-1">
          <span className="font-semibold">Email</span> {user.email}
        </li>
        <li className="flex flex-col flex-1">
          <span className="font-semibold">Company</span> {user.company.name}
        </li>
        <li>
          <button
            className="bg-amber-400 px-4 py-2 rounded-full font-semibold text-gray-800 hover:bg-amber-500"
            onClick={() => setView(!view)}
          >
            {view ? <span>Hide Details</span> : <span>View Details</span>}
          </button>
        </li>
      </ul>
      {view && (
        <div className="mt-10 flex bg-slate-100 p-6 rounded-2xl">
          <ul>
            <li className="flex flex-col mb-5">
              <span className="font-semibold">Phone</span> {user.phone}
            </li>
            <li className="flex flex-col mb-5">
              <span className="font-semibold">Website</span>{user.website}
            </li>
          </ul>
          <ul className="ml-16">
            <li className="flex flex-col mb-5">
              <span className="font-semibold">Street</span> {user.address.street}
            </li>
            <li className="flex flex-col mb-5">
              <span className="font-semibold">Suite</span> {user.address.suite}
            </li>
            <li className="flex flex-col mb-5">
              <span className="font-semibold">City</span> {user.address.city}
            </li>
            <li className="flex flex-col mb-5">
              <span className="font-semibold">Zip code</span> {user.address.zipcode}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserCard;
