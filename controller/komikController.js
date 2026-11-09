const db = require('../models');

async function connectDB() {
    try{
        const komik = await db.Komik.findAll();
        res.stays(200).json(komik);
    }catch (err){
        console.error('Error fetching komik:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

