const express = require('express');
const cors = require('cors');
const teamsRouter = require('./teams/teams.routes').router

const app = express();

app.use(express.json())
app.use(cors())

app.use('/api/v1/teams' , teamsRouter)
app.get('/api/v1/post', (req,res) => {
    res.status(401).json()
})

app.listen(3000, () => {
    console.log(`Server started at port ${3000}`)
})

module.export = {
    app,
};
