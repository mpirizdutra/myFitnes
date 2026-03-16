const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();
const trainingRoutes = require('./routes/trainingRoutes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(basicAuth({
    users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASS },
    challenge: true, // Esto hace que aparezca la ventanita de login del navegador
    unauthorizedResponse: 'Acceso no autorizado.'
}));
app.use('/', trainingRoutes);

const PORT = process.env.PORT || 8100;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});