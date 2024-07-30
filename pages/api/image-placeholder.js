import fs from 'fs/promises';
import path from 'path';
import { getPlaiceholder } from 'plaiceholder';

export default async function handler(req, res) {
    const { src } = req.query;
    if (!src) {
        return res.status(400).json({ error: 'src is required' });
    }

    try {
        const imagePath = path.join(process.cwd(), 'public', src);
        console.log(imagePath)
        const buffer = await fs.readFile(imagePath);
        const { base64 } = await getPlaiceholder(buffer);
        res.status(200).json({ base64 });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate placeholder' });
    }
}