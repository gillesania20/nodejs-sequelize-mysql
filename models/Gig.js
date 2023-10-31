import { Sequelize, DataTypes } from 'sequelize';
import sequelize from './../config/database.js';
const Gig = sequelize.define('gig', {
    title: {
        type: DataTypes.STRING
    },
    technologies: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    budget: {
        type: DataTypes.STRING
    },
    contact_email: {
        type: DataTypes.STRING
    }
});

export default Gig;