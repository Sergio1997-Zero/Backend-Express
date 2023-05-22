import Express, { json } from 'express';
import dotenv from 'dotenv';
import { EnvConfig } from './src/types/types';
import { connectDatabase } from './config/database.config';
import { apiRouter } from './config/router.config';

dotenv.config();
const { PORT, MONGO_URL } = process.env as EnvConfig;

connectDatabase( MONGO_URL )

const app = Express();
app.use( json() );
apiRouter( app );

app.listen( PORT, () => console.log(`http://localhost:${PORT}/api`));
