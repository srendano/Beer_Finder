import config from './config';
import express from 'express'; 
import get_random from './get_random';

const app = express();

app.get('/random', async (req, res) => {
    const result = await get_random(req);
    console.log('Result: ', result);
    res.send(result);
})
app.listen(config().port, () => {
  console.log(`Listening on port ${config().port}`);
});