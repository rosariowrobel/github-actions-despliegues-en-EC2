const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('Esta es mi aplicación desplegada en EC2 :)');
});

app.listen(port, () => {
    console.log(`Aplicación corriendo en http://localhost:${port}`);
});
