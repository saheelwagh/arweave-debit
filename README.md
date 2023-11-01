This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

warp -> protocol on top of arweace for better dx of smarr conteacts
core 
caching
exrtensions

how smartweave contracts work
1. defome omtotal; state
2. write logic in fn named handle
This function defines different actions that can be called on the contract, which manipulate the state. Actions are similar to functions in a normal smart contract or program. Each action will update the state in some way.

A basic handler for a counter that uses the above state might look something like this:
export function handle(state, action) {
  if (action.input.function === 'increment') {
    state.counter += 1
  }
  if (action.input.function === 'decrement') {
    state.counter -= 1
  }
  return { state }
}

3.  to update the contract state, call writeInteraction from the warp sdk
A basic handler for a counter that uses the above state might look something like this:
export function handle(state, action) {
  if (action.input.function === 'increment') {
    state.counter += 1
  }
  if (action.input.function === 'decrement') {
    state.counter -= 1
  }
  return { state }
}

