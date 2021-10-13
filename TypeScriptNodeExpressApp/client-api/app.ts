import express from 'express';

const app = express();
const port = 9091;

app.get('/', (req, res) => {
    res.send('Well done!');
})

app.listen(port, () => {
    // Console will print the message
    console.log('Server running at http://localhost:9091/');
})