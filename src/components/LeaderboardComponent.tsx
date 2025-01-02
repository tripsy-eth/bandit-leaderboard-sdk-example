import { LeaderboardRenderArgsType } from "@bandit-network/react";
import React, { useEffect, useState } from "react";
import { ConnectButton } from "./ConnectButton";
import { LeaderboardTable } from "./LeaderboardTable";
import { getAddress } from 'ethers';

export function LeaderboardComponent({ query }: { query: LeaderboardRenderArgsType }) {
    const [userWallet, setUserWallet] = useState<string | null>(null);
    const {
        data: userData,
        isLoading: isLoadingUser,
    } = query?.userQuery || {};

    // Handle wallet connection
    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setUserWallet(getAddress(accounts[0]));
            } catch (error) {
                console.error("Error connecting wallet:", error);
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    // Listen for account changes
    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.on('accountsChanged', (accounts: string[]) => {
                setUserWallet(accounts[0] ? getAddress(accounts[0]) : null);
            });
        }
    }, []);

    // Add this helper function
    const getUserData = () => {
        if (!userWallet || !query?.leaderboardQuery?.data?.pages?.[0]?.leaderboard) return null;
        return query.leaderboardQuery.data.pages[0].leaderboard.find(
            entry => entry.username?.toLowerCase() === userWallet.toLowerCase()
        );
    };

    // Add disconnect function
    const disconnectWallet = () => {
        setUserWallet(null);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                <ConnectButton
                    userWallet={userWallet}
                    onConnect={connectWallet}
                    onDisconnect={disconnectWallet}
                />

                {userWallet && !isLoadingUser && (
                    <div className="flex gap-4 items-center">
                        <div className="px-4 py-2 bg-white rounded-md">
                            <span className="text-gray-600">Your Rank:</span>
                            <span className="ml-2 font-bold">
                                {getUserData()?.rank || 'N/A'}
                            </span>
                        </div>
                        <div className="px-4 py-2 bg-white rounded-md">
                            <span className="text-gray-600">Your Points:</span>
                            <span className="ml-2 font-bold">
                                {getUserData()?.xp || '0'}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <LeaderboardTable
                query={query}
                userWallet={userWallet}
                userData={userData}
            />
        </div>
    );
} 