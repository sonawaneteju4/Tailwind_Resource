import React from "react";

const CreateUser = () => {
  return (
    <form>
      <div>
        <label
          htmlFor="input-label"
          className="block text-sm font-medium mb-2 dark:text-white mt-1"
        >
          Name
        </label>
        <input
          type="text"
          id="input-label"
          className="py-3 px-4 block w-96 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="you@site.com"
        />
      </div>
      <div>
        <label
          htmlFor="input-label"
          className="block text-sm font-medium mb-2 dark:text-white mt-1"
        >
          Email
        </label>
        <input
          type="email"
          id="input-label"
          className="py-3 px-4 block w-96 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="you@site.com"
        />
      </div>
      <div>
        <label
          htmlFor="input-label"
          className="block text-sm font-medium mb-2 dark:text-white mt-1"
        >
          Phone
        </label>
        <input
          type="email"
          id="input-label"
          className="py-3 px-4 block w-96 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="you@site.com"
        />
      </div>
      <div>
        <label
          htmlFor="input-label"
          className="block text-sm font-medium mb-2 dark:text-white mt-1"
        >
          Password
        </label>
        <input
          type="email"
          id="input-label"
          className="py-3 px-4 block w-96 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="you@site.com"
        />
      </div>
      <div className="flex justify-center m-5">
        <button className="bg-white lg:px-5 px-6 lg:text-base text-xs rounded-full poppins-medium py-2">
        Create New Account
        </button>
      </div>
    </form>
  );
};

export default CreateUser;
