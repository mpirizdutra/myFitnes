const fs = require('fs');
const path = require('path');

const projectName = 'fitness-app';

const folders = [
    '',
    'config',
    'controllers',
    'routes',
    'views',
    'views/partials',
    'public',
    'public/css'
];

const files = {
    '.env': 'DB_HOST=localhost\nDB_USER=root\nDB_PASSWORD=\nDB_NAME=gym_db\nPORT=3000',
    'app.js': '',
    'config/db.js': '',
    'controllers/trainingController.js': '',
    'routes/trainingRoutes.js': '',
    'views/index.ejs': '',
    'views/partials/head.ejs': '',
    'views/partials/nav.ejs': '',
    '.gitignore': 'node_modules/\n.env',
    'package.json': JSON.stringify({
        name: projectName,
        version: "1.0.0",
        description: "Tracker de entrenamiento Heavy Duty",
        main: "app.js",
        scripts: {
            "start": "node app.js",
            "dev": "nodemon app.js"
        },
        dependencies: {
            "dotenv": "^16.0.0",
            "ejs": "^3.1.0",
            "express": "^4.18.0",
            "mysql2": "^3.0.0"
        }
    }, null, 2)
};

console.log(`🚀 Creando estructura para ${projectName}...`);

// Crear carpetas
folders.forEach(folder => {
    const dirPath = path.join(__dirname, projectName, folder);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`📁 Carpeta creada: ${dirPath}`);
    }
});

// Crear archivos
Object.entries(files).forEach(([fileName, content]) => {
    const filePath = path.join(__dirname, projectName, fileName);
    fs.writeFileSync(filePath, content);
    console.log(`📄 Archivo creado: ${fileName}`);
});

console.log('\n✅ ¡Estructura completa!');
console.log(`👉 Ejecutá: cd ${projectName} && npm install`);