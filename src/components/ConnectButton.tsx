import React from 'react';
interface ConnectButtonProps {
    userWallet: string | null;
    onConnect: () => void;
    onDisconnect: () => void;
}

export function ConnectButton({ userWallet, onConnect, onDisconnect }: ConnectButtonProps) {
    if (userWallet) {
        return (
            <div className="flex gap-2">
                <span className="px-4 py-2 bg-white rounded-md text-gray-600">
                    {`${userWallet.slice(0, 6)}...${userWallet.slice(-4)}`}
                </span>
                <button
                    onClick={onDisconnect}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                    Disconnect
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={onConnect}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
            Connect Wallet
        </button>
    );
} 