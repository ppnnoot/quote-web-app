import React from 'react';

export default function Loading() {
	return (
		<div className='flex h-screen items-center justify-center bg-gradient-to-b p-8'>
		<div className="flex flex-col items-center justify-center bg-white shadow-lg border-2 border-gray-200 rounded-lg p-8 w-[90%] max-w-md text-center">
			<div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-blue-600" role="status">
			<span className="visually-hidden">Loading...</span>
			</div>
			<p className="text-lg font-medium text-gray-600 mt-4">Loading quotes...</p>
		</div>
		</div>
	);
}
