const app = require('./src/config/web-server');
const dotenv = require('dotenv');
dotenv.config();

app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000');
});