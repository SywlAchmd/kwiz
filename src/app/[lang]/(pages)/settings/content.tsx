import React from 'react';
import {
  AccountCircle,
  ArrowForwardIosRounded,
  Settings,
} from '@mui/icons-material';

export default function Content() {
  return (
    <div className="mt-2 flex flex-col gap-2 md:flex-row">
      <div className="mb-3 flex h-fit w-full flex-col gap-2 rounded-large bg-white px-6 py-6 shadow-custom1 sm:mt-3 md:mb-5 lg:px-9 lg:py-10">
        <div className="flex items-center gap-2 text-slate-grey">
          <AccountCircle />
          <h3 className="text-base font-semibold ">Profile</h3>
        </div>
        <div className="mt-3 flex w-full flex-col gap-2 space-y-2 px-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 text-base">
              <p className="font-semibold text-gray-800">Username</p>
              <p className="text-gray-400">John Smith</p>
            </div>
            <ArrowForwardIosRounded
              sx={{ fontSize: { xs: 18, sm: 24, md: 25, lg: 26 } }}
              color="disabled"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 text-base">
              <p className="font-semibold text-gray-800">Full Name</p>
              <p className="text-gray-400">John Smith</p>
            </div>
            <ArrowForwardIosRounded
              sx={{ fontSize: { xs: 18, sm: 24, md: 25, lg: 26 } }}
              color="disabled"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 text-base">
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-gray-400">johnsmith@example.com</p>
            </div>
            <ArrowForwardIosRounded
              sx={{ fontSize: { xs: 18, sm: 24, md: 25, lg: 26 } }}
              color="disabled"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 text-base">
              <p className="font-semibold text-gray-800">Language</p>
              <p className="text-gray-400">English</p>
            </div>
            <ArrowForwardIosRounded
              sx={{ fontSize: { xs: 18, sm: 24, md: 25, lg: 26 } }}
              color="disabled"
            />
          </div>
        </div>
      </div>

      <div className="mb-3 flex h-fit w-full flex-col gap-2 rounded-large bg-white px-6 py-6 shadow-custom1 sm:mt-3 md:mb-5 lg:px-9 lg:py-10">
        <div className="flex items-center gap-2 text-slate-grey">
          <Settings />
          <h3 className="text-base font-semibold ">Account Settings</h3>
        </div>
        <div className="mt-3 flex w-full flex-col gap-4 space-y-2 px-3">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-gray-800">
              Update Password
            </p>
            <ArrowForwardIosRounded
              sx={{ fontSize: { xs: 18, sm: 24, md: 25, lg: 26 } }}
              color="disabled"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-gray-800">
              Delete Account
            </p>
            <ArrowForwardIosRounded
              sx={{ fontSize: { xs: 18, sm: 24, md: 25, lg: 26 } }}
              color="disabled"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
