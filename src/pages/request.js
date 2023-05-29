import React from "react";
import { Link } from "gatsby";

function RequestPage() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 sm-gap-8 gap-y-8">
        <div className="sm:col-span-7 col-span-12 bg-white request-bg">
          <div className="flex items-center justify-center h-screen sm:p-32 p-8">
            <div className="">
              <h2 className="text-6xl text-gray-600 font-black sm:mb-12 mb-8">Make a request in a few minute</h2>

              <p className="text-2xl text-gray-700 font-light tracking-wide sm:mb-8 mb-4">
                We will like to assist you in building your project, we are always quick to respond to your request
                anytime, any day and from anywhere
              </p>

              <Link
                to="/"
                className="bg-yellow-500 hover:bg-yellow-600 hover:text-white px-3 py-2.5 rounded-md font-medium"
                aria-current="page"
              >
                Go back home
              </Link>

              <p className="text-lg text-gray-800 font-light tracking-wide italic"></p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-5 col-span-12">
          <iframe
            className="airtable-embed h-screen"
            title="airtable form"
            src="https://airtable.com/embed/shrhuMa5C8Tvp57f4?backgroundColor=green"
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="533"
            style={{ background: "#fff", border: "1px solid #fff" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export function Head() {
  return <title>Request a quote</title>;
}

export default RequestPage;
