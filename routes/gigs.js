import express from 'express';
import Gig from './../models/Gig.js';
const router = express.Router();
router.get('/', async (req, res) => {
    const findGigs = await Gig.findAll();
    res.status(200).json({
        message: 'Gigs found',
        gigs: findGigs
    });
});
export default router;