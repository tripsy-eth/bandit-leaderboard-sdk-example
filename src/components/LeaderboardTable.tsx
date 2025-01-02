import React from 'react';
import { LeaderboardRenderArgsType } from "@bandit-network/react";
import { useState } from "react";

interface LeaderboardTableProps {
    query: LeaderboardRenderArgsType;
    userWallet: string | null;
    userData: any; // Replace 'any' with proper type from SDK
}

export function LeaderboardTable({ query, userWallet, userData }: LeaderboardTableProps) {
    const [page, setPage] = useState(1);
    const { data, fetchNextPage, fetchPreviousPage, isLoading } = query?.leaderboardQuery || {};

    const leaderboardData = data?.pages[page - 1]?.leaderboard || [];
    const totalPages = data?.pages[0]?.totalUser
        ? Math.ceil(data.pages[0].totalUser / 10)
        : 0;

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Rank</th>
                                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Wallet</th>
                                        <th className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Points</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {isLoading ? (
                                        <tr>
                                            <td colSpan={3} className="text-center py-4 text-sm text-gray-500">Loading...</td>
                                        </tr>
                                    ) : (
                                        leaderboardData.map((entry) => (
                                            <tr
                                                key={entry.username}
                                                className={`${entry.username === userWallet ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                                            >
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                                                    {entry.rank}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {entry.username ? `${entry.username.slice(0, 6)}...${entry.username.slice(-4)}` : 'Unknown'}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-right text-gray-500">
                                                    {entry.xp ? entry.xp.toLocaleString() : '0'}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex items-center justify-center gap-4">
                <button
                    onClick={() => {
                        setPage(page - 1);
                        fetchPreviousPage();
                    }}
                    disabled={page === 1}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                <span className="text-sm text-gray-700">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={() => {
                        setPage(page + 1);
                        fetchNextPage();
                    }}
                    disabled={page === totalPages}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
} 