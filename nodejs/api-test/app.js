const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world......');
}
);
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});
//const port = process.env.PORT;


app.listen(3000, () => {
    console.log('My rest API program is running on port 3000');
});