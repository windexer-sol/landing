---
title: "System Architecture"
---

# System Architecture

Windexer reimagines Solana data streaming through a decentralized p2p architecture powered by libp2p's gossipsub protocol. This mesh network approach ensures high performance, resilience, and true decentralization:

## Network Layer

### Peer-to-Peer Mesh
- **Libp2p Core**: Powers the decentralized network infrastructure
- **Gossipsub Protocol**: Enables efficient message propagation across the network
- **Stake-weighted Peer Selection**: Optimizes network topology based on validator stakes
- **Multi-stream Management**: Handles parallel data streams for different data types

### Network Optimization
- **Dynamic Topology**: Self-adjusting network connections based on performance
- **Automatic Peer Discovery**: Uses Kademlia DHT for peer finding and routing
- **Connection Management**: Intelligent handling of peer connections and disconnections
- **Message Deduplication**: Efficient handling of redundant messages in the mesh

## Processing Layer

### Real-time Processing
- **ZK Compression Engine**: Applies zero-knowledge proofs for efficient state representation
- **Binary Parser**: Custom-built parser for Solana account and instruction data
- **WASM Runtime**: Wasmer-powered environment for custom processing logic

### Stream Management 
- **Topic-based Routing**: Efficient message routing based on content type
- **Flow Control**: Prevents network congestion and ensures smooth data flow
- **Message Prioritization**: Handles high-priority updates with lower latency

## Storage Layer

### Distributed Storage
- **Real-time Mesh**: Immediate data availability through p2p network
- **Filecoin Integration**: Decentralized long-term state storage
- **ClickHouse Analytics**: Powerful analytical capabilities
- **State Snapshots**: Periodic state snapshots for quick recovery

### Caching Strategy
- **Mesh-level Cache**: Distributed caching across network nodes
- **Local Node Cache**: High-speed access for frequent queries
- **State Sync**: Efficient state synchronization between peers

## Query Layer

### API Surface
```typescript
// Example peer connection setup
const peerConfig = {
  // Peer configuration
  networkId: 'mainnet',
  minPeers: 4,
  maxPeers: 12,
  
  // Topic subscriptions
  topics: ['accounts', 'transactions', 'blocks'],
  
  // Connection settings
  connectionLimits: {
    inbound: 100,
    outbound: 50,
    maxTotal: 150
  }
}
```