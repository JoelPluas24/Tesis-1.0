import { pool } from './src/config/database.js';

async function updateDB() {
    try {
        await pool.query('ALTER TABLE rutinas ADD COLUMN total_sesiones INT NOT NULL DEFAULT 10');
        console.log('Successfully added total_sesiones column');
    } catch (e: any) {
        if (e.code === 'ER_DUP_FIELDNAME') {
            console.log('Column already exists.');
        } else {
            console.error('Error adding column:', e);
        }
    } finally {
        process.exit();
    }
}

updateDB();
