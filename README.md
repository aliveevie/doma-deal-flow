# Doma Deals - Tokenized Domain Trading Platform

A production-ready dApp for trading tokenized domains with integrated messaging, built for Doma Protocol Track 5.

## 🚀 Features

- **Domain Trading**: Browse, list, and trade tokenized domains
- **Integrated Messaging**: XMTP-powered domain-linked conversations  
- **Professional UI**: Modern design with shadcn/ui components
- **Wallet Integration**: Multi-wallet support with RainbowKit
- **SEO Optimized**: Complete meta tags, sitemap, and structured data
- **Mobile First**: Responsive design for all devices

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Blockchain**: viem + wagmi + RainbowKit
- **Messaging**: XMTP React SDK
- **API**: Doma Protocol Orderbook SDK
- **Analytics**: Plausible/PostHog ready
- **Testing**: Playwright + Jest

## 🏁 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd doma-deals
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:8080
   ```

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and configure:

- `DOMA_API_KEY`: Your Doma Protocol API key
- `NEXT_PUBLIC_XMTP_ENV`: XMTP environment (dev/production)
- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`: WalletConnect project ID
- Other analytics and network configurations

## 🌐 Networks

**Testnet**: Doma chain + Sepolia/Base Sepolia
**Mainnet**: Doma chain + Ethereum Mainnet

Supported currencies: ETH, USDC

## 📱 Pages & Features

### Home (/)
- Hero section with domain search
- Featured collections
- Trending domains

### Domain Detail (/domain/[tokenId] or /[name])
- Domain info and pricing
- Active listings and offers
- XMTP chat integration
- Analytics and watchlist

### Deals Hub (/deals)
- Filter and sort domains
- Bulk messaging
- Grid/list views

### Messages (/messages)
- XMTP conversation inbox
- Domain-scoped threads
- Offer attachments

### Profile (/u/[address])
- User listings and offers
- Message threads
- Saved searches

## 🔌 Key Integrations

### Doma Orderbook SDK
```typescript
import { DomaClient } from '@doma-protocol/orderbook-sdk';

const client = new DomaClient({
  baseUrl: 'https://api.doma.xyz',
  apiKey: process.env.DOMA_API_KEY
});
```

### XMTP Messaging
```typescript
import { XMTPProvider } from '@xmtp/react-sdk';

// Domain-scoped conversations
const conversationTopic = `doma:${chainId}:${contract}:${tokenId}`;
```

## 🎨 Design System

All styling uses semantic design tokens from `src/index.css`:
- Primary blue theme (`--primary`)
- Rounded corners (2xl)
- Soft shadows
- Smooth transitions

Never use direct colors - always use design system tokens!

## 🧪 Testing

### Smoke Tests
```bash
npm run test:playwright
```

### Unit Tests  
```bash
npm run test:jest
```

## 📊 Analytics Events

Key events tracked:
- `View Domain`
- `Start Chat`
- `Create Listing`
- `Make Offer`
- `Connect Wallet`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 🔐 Security

- Wallet signatures only on explicit user action
- Input validation (price > 0, valid expiry)
- XMTP E2E encryption
- No sensitive data in client bundle

## 📈 Performance

- Route segment caching
- Image optimization
- Lazy loaded components
- Lighthouse score ≥ 90

## 📄 License

Built for Doma Protocol Track 5: Landing Pages & Messaging Interfaces

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Follow design system patterns
4. Add tests for new features
5. Submit pull request

## 🆘 Support

- Documentation: [Doma Protocol Docs](https://docs.doma.xyz)
- XMTP: [XMTP Docs](https://docs.xmtp.org)
- Issues: GitHub Issues

---

**Built with 💙 for the DomainFi revolution**