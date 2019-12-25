import config from './config'

import express from 'express'; 
const app = express();
app.get('/', (req, res) => {
    res.send('Fuck You Ryan')
})
app.listen(config().port, () => {
  console.log(`Listening on port ${config().port}`);
});