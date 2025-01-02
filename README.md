# Bandit Network Leaderboard Demo

This project demonstrates the integration of Bandit Network's leaderboard widget using React and Vite. It showcases a fully functional leaderboard with wallet connection capabilities and real-time point tracking.

## Features

- 🔌 Wallet Connection/Disconnection
- 📊 Real-time Leaderboard Display
- 🏆 User Ranking System
- 📱 Responsive Design
- 🔄 Pagination Support
- 👤 Current User Highlighting

## Prerequisites

- Node.js (v14 or higher)
- npm, yarn, or pnpm
- A Bandit Network API key

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
VITE_BANDIT_API_KEY=your_api_key_here
VITE_CAMPAIGN_ID=your_campaign_id
VITE_CLUSTER=mainnet # or devnet for testing
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Environment Configuration

- **Development (Devnet)**
  - Use `VITE_CLUSTER=devnet` for testing
  - Ideal for development and testing phases

- **Production (Mainnet)**
  - Use `VITE_CLUSTER=mainnet` for production
  - Use when deploying to live environment

## Project Structure

```
src/
├── components/
│   ├── ConnectButton.tsx    # Wallet connection component
│   ├── LeaderboardComponent.tsx # Main leaderboard wrapper
│   └── LeaderboardTable.tsx # Leaderboard display component
├── App.tsx                  # Main application component
├── index.css               # Global styles
└── main.jsx               # Application entry point
```

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [@bandit-network/react](https://www.npmjs.com/package/@bandit-network/react) - Bandit Network SDK

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Additional Resources

- [Bandit Network Documentation](https://docs.bandit.network)
- [Integration Guide](https://docs.bandit.network/docs/integration)
- [API Reference](https://docs.bandit.network/docs/api)
