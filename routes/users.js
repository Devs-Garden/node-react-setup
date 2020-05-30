const express = require('express');
const router = express.Router();



/**
 * @swagger
 * /api/v1.0/register:
 *  post:
 *    summary: create a new user
 *    description: create a new user
 *    consumes:
 *      - application/json
 *    responses:
 *      '400':
 *        description: error
 */
router.post('/api/register', async (req, res) => {
    //POST Create the new user
    console.log("inside node")
        res.send({ message: 'User register successfully' });
});

module.exports = router;