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

async function getKomikbyId(req, res) {
    const { id } = req.params;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik not found' });
        }
        res.status(200).json(komik);
    }catch (err) {
        console.error('Error fetching komik:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}