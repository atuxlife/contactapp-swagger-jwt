import app from './app';
import './db';

app.listen(process.env.SV_PORT || 3000);
console.log('Server listen on port ', process.env.SV_PORT || 3000);