---
title: "System Architecture"
---

# System Architecture

Cypher Indexer employs a sophisticated multi-tiered architecture designed for high performance, scalability, and reliability:

## Data Ingestion Layer

- Custom RPC node integration for real-time blockchain data capture
- Parallel ingestion from multiple Solana nodes for redundancy and performance
- Intelligent load balancing and failover mechanisms
- Support for historical data backfilling and data integrity checks

## Processing Layer

- Highly optimized parallel processing engine
- Custom Solana instruction parser with support for CPI (Cross-Program Invocation)
- Adaptive account data interpreter using known program structures and heuristics
- Real-time event extraction and normalization from transaction logs

## Indexing Layer

- Multi-dimensional indexing strategies for diverse query patterns
- Program-specific indexing for popular Solana programs (e.g., Serum, Metaplex)
- Adaptive indexing based on query patterns and data access frequency
- Temporal indexing for efficient historical data queries

## Storage Layer

- Primary Storage: Google BigTable for high-throughput, low-latency data access
- Analytical Storage: ClickHouse for complex analytical queries and aggregations
- Time-series Database: InfluxDB for efficient storage and querying of time-based metrics

## Caching Layer

Multi-level caching strategy using Redis:
- L1: In-memory cache for hot data
- L2: Distributed Redis cluster for frequently accessed data
- L3: Persistent cache for query results and aggregated data

## API Layer

- GraphQL API for flexible and efficient querying
- REST API for traditional access patterns
- WebSocket support for real-time data subscriptions