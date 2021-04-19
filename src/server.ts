import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.json({message: 'NLW 5'});
});

app.listen(3333, () => console.log('Server is running on port 3333'));
