const createError = (status, message) =>  {
    const error = new Error();
    error.status = status;
    error.message = message;
    error.stack = error.stack;
    return error;
}

module.exports = createError