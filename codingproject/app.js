const config = require('./config.js')
const express = require('express')
const mongoose = require('mongoose')

const Client = require('./models/Client.js')
const Therapist = require('./models/Therapist.js')
const TherapySession = require('./models/TherapySession.js')

mongoose.connect(config.mongodb, (err) => {    
    app.listen(3000, () => {
        console.log('operating on port 3000')
    })
})

const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded())

app.post('/clients/create', async (req, res) => {
    const clientInfo = req.body
    clientInfo.permissionToLeaveMessage = (clientInfo.permissionToLeaveMessage == 'yes' ? true : false );

    if (req.body.operation == "update") {
        await Client.updateOne({ id: req.body.id }, req.body)
    }

    else {
        const client = new Client(clientInfo)
        await client.save()
    }

    return res.redirect('/clients')
})

app.post('/clients/delete', async (req, res) => {
    const clientId = req.body.id 
    
    await Client.remove({
        _id: clientId
    })

    return res.end()
})

app.get('/', async (req, res) => {
    const clients = await Client.find()

    return res.render('clients.ejs', { clients })
})

app.get('/clients', async (req, res) => {
    const clients = await Client.find()

    return res.render('clients.ejs', { clients })
})

app.post('/therapists/create', async (req, res) => {
    const therapistInfo = req.body

    if (req.body.operation == "update") {
        await Therapist.updateOne({ id: req.body.id }, req.body)
    }

    else {
        const therapist = new Therapist(therapistInfo)
        await therapist.save()
    }

    return res.redirect('/therapists')
})

app.post('/therapists/delete', async (req, res) => {
    const therapistId = req.body.id 
    
    await Therapist.remove({
        _id: therapistId
    })

    return res.end()
})

app.get('/therapists', async (req, res) => {
    const therapists = await Therapist.find()

    return res.render('therapists.ejs', { therapists })
})

app.post('/sessions/create', async (req, res) => {
    const sessionInfo = req.body
    sessionInfo.clients = [ sessionInfo.client1, sessionInfo.client2, sessionInfo.client3 ]

    if (req.body.operation == "update") {
        await TherapySession.updateOne({ id: req.body.id }, req.body)
    }

    else {
        const session = new TherapySession(sessionInfo)
        await session.save()
    }

    return res.redirect('/sessions')
})



app.get('/sessions', async (req, res) => {
    const sessions = await TherapySession.find()

    return res.render('sessions.ejs', { sessions })
})
app.post('/sessions/delete', async (req, res) => {
    const sessionId = req.body.id 
    
    await TherapySession.remove({
        _id: sessionId
    })

    return res.end()
})

