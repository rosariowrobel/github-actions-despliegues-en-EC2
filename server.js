const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡La aplicación está corriendo en EC2!');
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
