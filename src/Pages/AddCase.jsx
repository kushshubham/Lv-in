import React from 'react';

const AddCase = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg shadow-md p-6 rounded-md bg-white">
        <div className="mb-4">
          <h2 className="text-lg font-bold">Claimant Details</h2>
        </div>
        <div>
          <form className="space-y-6">
            {/* Input fields */}
            <div className="shadow-md p-4 rounded-md">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Claimant Name
              </label>
              <input
                type="text"
                id="name"
                className="flex h-10 w-full rounded-md border border-black px-3 py-2 text-sm focus:outline-none"
              />
            </div>
            <div className="shadow-md p-4 rounded-md">
              <label
                htmlFor="amount"
                className="block text-sm font-medium mb-2"
              >
                Claim Amount
              </label>
              <input
                type="number"
                id="amount"
                className="flex h-10 w-full rounded-md border border-black px-3 py-2 text-sm focus:outline-none"
              />
            </div>
            <div className="shadow-md p-4 rounded-md">
              <label
                htmlFor="number"
                className="block text-sm font-medium mb-2"
              >
                Claimant Number
              </label>
              <input
                type="number"
                id="number"
                className="flex h-10 w-full rounded-md border border-black px-3 py-2 text-sm focus:outline-none"
              />
            </div>
            <div className="shadow-md p-4 rounded-md">
              <label
                htmlFor="number"
                className="block text-sm font-medium mb-2"
              >
                Claimant Email
              </label>
              <input
                type="email"
                id="email"
                className="flex h-10 w-full rounded-md border border-black px-3 py-2 text-sm focus:outline-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="button"
              className="w-full h-10 text-sm font-medium text-white rounded-md bg-black hover:bg-gray-500 transition-colors"
            >
              Add Case
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCase;
