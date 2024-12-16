const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('Esta es mi pequeña aplicación desplegada en EC2 con GitHub Actions :)');
});

app.listen(port, () => {
    console.log(`Aplicación corriendo en http://localhost:${port}`);
});
