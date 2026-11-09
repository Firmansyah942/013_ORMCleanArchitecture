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

async function createKomik(req, res) {
    const { judul, description, author } = req.body;
    try {
        const newKomik = await db.Komik.create({ judul, description, author });
        res.status(201).json(newKomik);
    }catch (err) {
        console.error('Error creating komik:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function updateKomik(req, res) {
    const { id } = req.params;
    const { judul, description, author } = req.body;
    try{
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik not found' });
        }
        komik.judul = judul;
        komik.description = description;
        komik.author = author;
        await komik.save();
        res.status(200).json(komik);
    }catch (err) {
        console.error('Error updating komik:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}