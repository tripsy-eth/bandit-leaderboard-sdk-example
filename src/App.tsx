import React from 'react';
import { BanditContextProvider, Leaderboard, ClusterBanditType } from "@bandit-network/react";
import { LeaderboardComponent } from "./components/LeaderboardComponent";

function App() {
    return (
        <BanditContextProvider
            apiKey={import.meta.env.VITE_BANDIT_API_KEY}
            cluster='mainnet'
        >
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Bandit Network Leaderboard</h1>
                <Leaderboard
                    campaignId={Number(import.meta.env.VITE_CAMPAIGN_ID)}
                    render={(query) => <LeaderboardComponent query={query} />}
                />
            </div>
        </BanditContextProvider>
    );
}

export default App; 