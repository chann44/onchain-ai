import React from "react";

const profiles = ["x.com/itznishuu_", "x.com/44_chann"];

const ProfileList = () => {
  return (
    <div className="subdomain-list mt-8">
      <h2 className="font-ibm-mono text-lg sm:text-2xl mt-2">
        Twitter Profiles
      </h2>
      <ul className="list-disc list-inside text-gray-400">
        {profiles.map((subdomain, index) => (
          <li key={index}>
            <a
              href={`https://${subdomain}`}
              className="font-ibm-mono text-gray-400 underline hover:font-bold"
            >
              {subdomain}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
