const express = require("express");
//const { Router } = require("express");
//const router = Router();
/*
router.get('/data', (req, res) => {
    res.statusCode = 200;
    res.json({
        ok: true
    });
});
*/
const app = express();

app.use('/api/v1', require('./routers/tasksRouter'));

app.listen(3000, () => {
    console.log("SERVER RUNNING ON PORT 3000")
}); 