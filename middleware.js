const logger = (req, res, next) =>{
    console.log(" i run before every req!");
    next();
};

module.exports = logger;