import express from 'express';

const app = express();
app.use(express.json());
import swaggerUi from 'swagger-ui-express';
import fs from 'fs/promises'; 

app.use('/api-docs', swaggerUi.serve, async (req, res) => {
  const swaggerDocument = JSON.parse(await fs.readFile('./swagger.json', 'utf8'));
  return swaggerUi.setup(swaggerDocument)(req, res);
});

import personaRouter from './routes/persona.js'; // Import the persona router
app.use('/api/personas', personaRouter);

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});