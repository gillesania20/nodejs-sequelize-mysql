import express from 'express';
import Gig from './../models/Gig.js';
const router = express.Router();

// Get all gigs.
router.get('/', async (req, res) => {
    const findGigs = await Gig.findAll();
    return res.status(200).json({
        message: 'Gigs found.',
        gigs: findGigs
    });
});

// Get single gig.
router.get('/:id', async (req, res) => {
    const gigID = req.params.id;
    const findGig = await Gig.findOne({
        where: {
            id: gigID
        }
    });
    return res.status(200).json({
        message: 'Gig found.',
        gig: findGig
    });
});

// Add gig.
router.post('/', async (req, res) => {
    const title = req.body.title;
    const technologies = req.body.technologies;
    const budget = req.body.budget;
    const description = req.body.description;
    const contact_email = req.body.contact_email;
    await Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    });
    return res.status(201).json({
        message: 'Gig created.'
    });
});

// Update gig.
router.patch('/:id', async (req, res) => {
    const gigID = req.params.id;
    const title = req.body.title;
    const technologies = req.body.technologies;
    const description = req.body.description;
    const budget = req.body.budget;
    const contact_email = req.body.contact_email;
    await Gig.update({
        title,
        technologies,
        description,
        budget,
        contact_email
    },
    {
        where: {
            id: gigID
        }
    });
    return res.status(200).json({
        message: 'Gig updated.'
    });
});

// Delete gig.
router.delete('/:id', async (req, res) => {
    const gigID = req.params.id;
    await Gig.destroy({
        where: {
            id: gigID
        }
    });
    return res.status(200).json({
        message: 'Gig deleted.'
    });
});

export default router;