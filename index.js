module.exports = (string) => {
    const username = require("username").sync();

    return string.split(username).join("*".repeat(username.length));
};
