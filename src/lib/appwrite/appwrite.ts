import { Client, Databases, Account } from 'appwrite'

const server = {
  endpoint: 'https://cloud.appwrite.io/v1',
  project: 'igcse-kit',
  collection: 'progress',
  database: 'data',
}

const client = new Client()
const account = new Account(client)
const database = new Databases(client)

client.setEndpoint(server.endpoint).setProject(server.project)

const sdk = { account, database }
export { sdk, server }