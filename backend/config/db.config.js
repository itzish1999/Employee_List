module.exports ={
    HOST:'localhost',
    USER: 'postgres',
    PASSWORD: 'Alpha123Beta456Charlie789',
    DB: 'employees',
    dialect: 'postgres',
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

/* First 5 params are to connect to the database
pool is optional but here is what they stand for:

max = max amount of connections in pool
min = opposite of max
idle = how long someone can be afk before being released
acquire = max time that the pool will try to establish a connection before throwing
an error
*/