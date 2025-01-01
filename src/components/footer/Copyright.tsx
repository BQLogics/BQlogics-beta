import React from 'react';

export function Copyright() {
  return (
    <div className="text-center">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} BQ Logics. All rights reserved.
      </p>
    </div>
  );
}