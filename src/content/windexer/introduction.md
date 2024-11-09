---
title: "Introduction to Windexer"
---

# Decentralized Solana Data Streaming

Windexer is a next-generation Solana data streaming engine built on libp2p's gossipsub protocol. It reimagines how blockchain data is captured, propagated, and analyzed through a decentralized peer-to-peer mesh network. By leveraging the power of libp2p's battle-tested protocols and stake-weighted peer selection, Windexer creates a resilient network that captures every transaction, every state change, and every smart contract interaction in real-time.

## Core Architecture

The heart of Windexer beats through its decentralized mesh network. Unlike traditional centralized indexers, Windexer establishes direct peer connections between validators and data consumers, creating multiple parallel data paths that ensure both speed and reliability. The stake-weighted peer selection mechanism ensures optimal data flow, while the gossip protocol enables sub-200ms global data propagation. This isn't just an improvement – it's a complete paradigm shift in how we handle blockchain data.

## Data Flow and Processing

Data flows through Windexer like a force of nature. As validators produce new blocks and state changes, our libp2p mesh network immediately propagates this information across the globe. The network automatically optimizes itself, finding the most efficient paths for data transmission while maintaining multiple redundant routes for reliability. ZK compression kicks in at the processing layer, ensuring efficient state representation without sacrificing completeness.

## Storage Strategy

We've revolutionized data storage with a hybrid approach that combines lightning-fast access with permanent availability. Real-time data streams through our mesh network, providing instant access to current state, while our Filecoin integration ensures long-term data persistence in a truly decentralized manner. This dual-layer strategy means you'll never have to choose between speed and reliability – you get both by default.

## Analytics and Integration

Windexer isn't just about moving data – it's about making that data sing. Our distributed processing architecture enables real-time analytics that would bring traditional systems to their knees. Integration with ClickHouse allows for powerful analytical queries, while our WebAssembly support means you can implement custom processing logic without sacrificing the performance benefits of our peer-to-peer architecture.

## API Surface

Whether you're building a DeFi dashboard or analyzing on-chain patterns, Windexer's flexible API surface has you covered. GraphQL and REST endpoints provide familiar access patterns, while our native p2p protocols enable direct mesh network integration for maximum performance. We've designed our APIs to make migration from traditional RPC setups straightforward while opening up new possibilities that weren't feasible before.

## Getting Started

```typescript
// Connect to the Windexer mesh network
import { WindexerClient } from '@windexer/client'

const client = new WindexerClient({
  networkId: 'mainnet',
  peerId: 'your-peer-id',       // Optional for read-only access
  gossipConfig: {
    peerLimit: 10,              // Max number of direct peers
    propagationDelay: 200       // Target propagation delay in ms
  }
})

// Subscribe to real-time account updates
client.subscribeAccount('Your-Account-Address', (update) => {
  console.log('New account state:', update)
})

// Query historical data through GraphQL
const response = await client.graphql(`
  query {
    accountHistory(address: "Your-Account-Address") {
      timestamp
      lamports
      owner
      data
    }
  }
`)
```