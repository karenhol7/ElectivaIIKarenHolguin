const {response} = require("express");

const posts = [
    {
        id: 1,
        title: 'Hello',
        body: 'Bye'
    },
    {
        id: 2,
        title: 'Hello',
        body: 'Bye'
    },
    {
        id: 3,
        title: 'Hello',
        body: 'Bye'
    }
]


const listPosts = (req, res = response) => {
    res.statusCode = 200;
    res.json(posts);
};

module.exports = {
    listPosts
}