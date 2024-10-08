---
title: "Introduction"
---

# Introduction

Cypher Windexer is a high-performance, ZK-compressed Solana indexer with advanced storage and querying capabilities. It's designed to efficiently handle Solana's growing state while providing powerful indexing and analytical features.

## Key Features

- ZK compression for Solana account data
- Multi-protocol support: gRPC, RPC polling, and WebSocket subscriptions
- Advanced binary parsing for accounts and instructions without IDLs
- Multi-tiered storage solution
- Real-time processing pipeline with custom parser support
- Flexible querying through GraphQL and REST APIs
- WebAssembly (WASM) support for custom indexing logic

## What Sets Cypher Indexer Apart

1. **ZK Compression**: Reducing storage requirements while maintaining data integrity.

2. **Decentralized Storage**: Using Filecoin for long-term, decentralized storage, ensuring data persistence and availability.

3. **High-Performance Architecture**: Employs a multi-tiered storage and caching strategy, optimizing for both speed and scalability.

4. **Flexible Parsing**: Supports custom binary parsers for Solana accounts and instructions, allowing for efficient processing of complex data structures.

5. **Advanced Analytics**: Integration with ClickHouse enables powerful analytical capabilities on indexed data.

6. **Customizable Logic**: WebAssembly support allows for the implementation of custom indexing logic without compromising performance.
