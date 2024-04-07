import React from "react";
import { useState } from "react";

export default function Github() {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState({});

  const getGithubProfile = async (e) => {
    e.preventDefault();
    const response = fetch(`https://api.github.com/users/${name}`)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  };

  return (
    <>
      <div className="relative flex items-center justify-center flex-col my-10 gap-y-10">
        <form
          onSubmit={getGithubProfile}
          className="flex items-center justify-center flex-col"
        >
          <input
            type="name"
            name="name"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Full Name"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none mb-5"
          />
          <button className="rounded bg-orange-700 px-3 py-1">Search</button>
        </form>
      </div>
      <div className="bg-[#0c1017] mx-auto flex items-center justify-center w-full max-w-md p-5">
        <img src={profile.avatar_url} className="h-36 w-36 rounded-full border border-[#d0d4db]" />
        <div className="text-[#d0d4db]  ml-2 text-center font-medium space-y-2">
          <h2 className="font-bold">{profile.name}</h2>
          <h3 className="">Repos: {profile.public_repos}</h3>
          <div className="flex gap-5">
            <h3>Followers: {profile.followers}</h3>
            <h3>Following: {profile.following}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
