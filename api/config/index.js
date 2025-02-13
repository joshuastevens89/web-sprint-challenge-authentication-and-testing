module.exports = {
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    PORT: process.env.PORT || 9000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    };