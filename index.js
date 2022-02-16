module.exports = (path) => {
    const username = require("username").sync();

    return path.split(username).join("*".repeat(username.length));
};
