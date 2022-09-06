# Fuji frontend assignement

**Introduction**

The goal is to check your skills on building a Dapp (decentralized application, aka an application that uses blockchain as backend).

You can fork this repository which contains all the dependencies you'll need: React & [Next.js](https://nextjs.org/), Material UI, [RainbowKit](https://rainbowkit.com) and [ethers.js](https://docs.ethers.io/v5/).

**Assignment**

We created a contract [0xd054e5724d7d595b72abbb0c460e0221cd859c8f](https://goerli.etherscan.io/address/0xd054e5724d7d595b72abbb0c460e0221cd859c8f) on Goerly testnet, and we need a Dapp to interact with it.

Please build an app that:

- Contains a form which on submit calls `sayMew()` on our contract
- Displays all the `mews` returned by `getAllMeows()`
- Uses Material UI

💡 You can go with a 2-pages or single page architecture, the choice is yours. Same goes for naming, folders, and so on...

💡 You can take inspiration from [this assignment](http://messages-status-assignment.surge.sh/), transforming `messages` into `meows` and `username` into `address`.

**Skills tested**

- [ ] Connect a wallet
- [ ] Read a contract
- [ ] Write on a contract
- [ ] React & NextJS
- [ ] Material UI

Bonus: display user ENS

---

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about this stack, take a look at the following resources:

- [RainbowKit Documentation](https://rainbowkit.com) - Learn how to customize your wallet connection flow.
- [wagmi Documentation](https://wagmi.sh) - Learn how to interact with Ethereum.
- [Next.js Documentation](https://nextjs.org/docs) - Learn how to build a Next.js application.

You can check out [the RainbowKit GitHub repository](https://github.com/rainbow-me/rainbowkit) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
