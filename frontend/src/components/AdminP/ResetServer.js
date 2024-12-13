import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import sendEmail from './ResetMail.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/sendMail', sendEmail);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
