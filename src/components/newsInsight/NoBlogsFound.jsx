'use client';

import React from 'react';

const NoBlogsFound = () => {
      return (
            <div className="w-full text-center py-20 px-4">

                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100 text-xl">
                        📰
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-gray-800 tracking-tight">
                        No Blogs Found
                  </h2>

                  {/* Divider */}
                  <div className="w-10 h-[2px] bg-gray-300 mx-auto mt-3 rounded-full"></div>

                  {/* Description */}
                  <p className="text-gray-500 mt-3 text-sm">
                        There are no blogs available right now.
                  </p>

            </div>
      );
};

export default NoBlogsFound;