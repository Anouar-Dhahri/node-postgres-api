import pg from 'pg'

const { Client, Pool } = pg;

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "postgresapi",
  password: "root@123",
  port: 5432,
}
export const pool = new Pool(credentials)

export const dbConnect = async () => {
  const client = new Client(credentials);
  await client.connect()
  .then(() => console.log('Conneted to postgres'))
  .catch((err) => console.error('Connection error', err.stack))
}


