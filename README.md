# **Salesforce-two-way-sync-woa**
A robust system built with the Godspeed Meta Framework to achieve real-time, bidirectional synchronization between Salesforce and an internal MongoDB database using Apache Kafka for event streaming.

## Table of Contents
- [Overview](#overview)
- [Real World Use Cases](#real-world-use-cases)
- [Features](#features)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Contribution](#contribution)
- [Mentor](#mentor)

## Overview
The Salesforce Two-Way Synchronization System is designed to replicate and synchronize data between Salesforce and an internal MongoDB database in near real-time. Leveraging Salesforce APIs, Kafka as the messaging bus, and MongoDB for data storage, this project ensures consistent data across systems and supports real-time analytics and operational reporting.

## Real World Use Cases
- **Enterprise CRM Synchronization**: In large organizations, sales and support teams rely on up-to-date information. This system enables companies to synchronize Salesforce customer data with internal databases in real time, ensuring that any change in contact or deal information is immediately reflected across systems.
- **Operational Reporting and Analytics**: Companies can leverage replicated data for real-time dashboards and decision-making, without directly querying the production Salesforce system.
- **Bidirectional Update Mechanism**: As internal systems or mobile applications update customer records, the changes can be automatically propagated back to Salesforce, maintaining data integrity across multiple platforms.

## Features
- **Bidirectional Synchronization**: Changes in Salesforce are captured as events and synchronized with MongoDB. Similarly, updates from internal systems can propagate back to Salesforce.
- **Real-Time Processing**: Utilizes Apache Kafka to stream events instantly across platforms.
- **Schema-Driven Development**: Automatically retrieves Salesforce metadata to generate database schemas and CRUD APIs.
- **Declarative Workflows**: Uses YAML-based workflows to orchestrate data flows with minimal boilerplate.
- **Extensible Architecture**: Built on the Godspeed Meta Framework, making it easy to integrate additional datasources and event streams.

## Architecture
The system is composed of the following key components:
- **Salesforce Plugin**: Interacts with Salesforce APIs and captures platform events.
- **Kafka Plugin**: Acts as both an event source and producer to relay events between systems.
- **Mongoose Plugin**: Manages MongoDB interactions through Mongoose models for data replication.
- **Godspeed Workflows**: Orchestrates the overall data flow between Salesforce, Kafka, and MongoDB.

## Technologies
- Godspeed Meta Framework
- Node.js / TypeScript
- Salesforce API
- Apache Kafka
- MongoDB & Mongoose

## Getting Started

### Prerequisites
- **Node.js v18+** (or Bun.js)
- **npm**
- **Git**
- A preferred code editor (e.g., VS Code)

### Step 1: Install Godspeed CLI
Install the required dependencies by running:

\`\`\`bash
npm install -g @godspeedsystems/godspeed npm i @godspeedsystems/plugins-salesforce-as-datasource-as-eventsource npm i @godspeedsystems/plugins-kafka-as-datasource-as-eventsource npm i @godspeedsystems/plugins-mongoose-as-datasource
\`\`\`

### Environment Variables
Add the necessary Login details, secret key, token etc. in src/datasources/salesforce.yaml file.

### Running the project
1. ***Start the Project: Run the project using the Godspeed CLI:
   
  \`\`\`bash
  godspeed serve
  \`\`\`
  It may be possible that /api-docs endpoint may not be reachable. In that case test the below API using postman:
  ***POST
  \`\`\`bash
  http://localhost:4000/publish-order-update 
  \`\`\`
  Body(JSON): OrderId & Status

2. ***After doing the above POST request, all the workflows will start and managed by godspeed framework efficiently. Below is it's explanation:
   a) That POST req will start salesforce_publish function which will in turn publish an event to salesforce platform event event bus.
   b) Using salesforce plugin, 'publish-producer1' kafka topic is actively listening for any new event to recieve.
   c) So as soon as any event comes it gets stored in this kafka topic.
   d) Similary an event for kafka-consume is also defined which listens for any latest event to come into kafka topic.
   e) As it gets comes, kafka_consume function gets triggered from there that event gets stored in MongoDB database thorugh mongoose plugin.

## Contribution
- Kartikeya Shukla (https://github.com/kartik3yaS)
- Aryamann Srivastava​ (https://github.com/ARYAMANN7279)

## Mentor
- Ayush Ghai
