---
title: "System Architecture"
---

# System Architecture

Windexer employs a sophisticated multi-tiered architecture designed for high performance, scalability, and reliability:

## Data Ingestion Layer

- **gRPC Client**: Primary method for consuming Solana data streams
- **RPC Polling Fallback**: Ensures data continuity in case of gRPC interruptions
- **WebSocket Listener**: Provides real-time updates for specific accounts or programs

## Processing Layer

- **ZK Compression Engine**: Applies zero-knowledge proofs to compress incoming Solana account data
- **Binary Parser**: Custom-built parser for efficient processing of Solana account and instruction data
- **WASM Runtime**: Wasmer-powered environment for executing custom indexing logic

## Indexing Layer

- **Real-time Indexer**: Processes incoming data streams and updates indexes in real-time
- **Batch Indexer**: Handles historical data indexing and reindexing tasks
- **Custom Index Builder**: Allows for the creation of specialized indexes based on specific querying needs

## Storage Layer

- **Primary Storage**: ScyllaDB for high-throughput data handling and efficient querying
- **Long-term Storage**: Filecoin for decentralized, persistent data storage
- **Analytical Storage**: ClickHouse for complex analytical queries and aggregations
- **Time-series Database**: InfluxDB for efficient storage and querying of time-based metrics

## Caching Layer

Multi-level caching strategy using Redis:
- L1: In-memory cache for hot data
- L2: Distributed Redis cluster for frequently accessed data
- L3: Persistent cache for query results and aggregated data

## API Layer

- GraphQL API for flexible and efficient querying
- REST API for traditional access patterns
- WebSocket support for real-time data subscriptions