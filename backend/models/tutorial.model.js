module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define('tutorial', {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    
    return Tutorial;
};

// Represents a tutorial table instead of me creating one

// We don't need to write CRUD functions, Sequelize supports all of them