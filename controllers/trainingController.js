const db = require('../config/db');

exports.getDashboard = async (req, res) => {
    try {
        // Obtenemos los últimos 10 registros para mostrar en el dashboard
        const [rows] = await db.query('SELECT * FROM entrenamientos ORDER BY fecha DESC LIMIT 10');
        res.render('index', {
            title: 'Heavy Duty Log',
            entrenamientos: rows
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener datos');
    }
};

exports.storeEntry = async (req, res) => {
    const { ejercicio, peso, reps, musculo } = req.body;
    try {
        await db.query(
            'INSERT INTO entrenamientos (ejercicio, peso, reps, musculo) VALUES (?, ?, ?, ?)',
            [ejercicio, peso, reps, musculo]
        );
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al guardar el registro');
    }
};