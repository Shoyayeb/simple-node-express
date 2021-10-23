const express = require('express')
const cors = require('cors')
const app = express();

const port = 5000;

const data = [
    {
        "id": 0,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 1,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 2,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    }
]

app.use(cors());
app.use(express.json())

app.post('/data', (req, res) => {
    const newUser = req.body
    newUser.id = data.length
    console.log(newUser.id);
    data.push(newUser);
    console.log("hitting post", req.body);
    res.json(newUser)
})

app.get('/', (req, res) => {
    res.send("hellow from me")
})

app.get('/data', (req, res) => {
    res.send(data)
})

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const user = data[id];
    res.send(user)
})

app.get('/users', (req, res) => {
    const search = req.query.search
    // console.log(search, req);
    if (search) {
        const searchRes = data.filter(data => data.name.toLocaleLowerCase().includes(search));
        res.send(searchRes)
    } else {
        res.send(data)
    }
})

app.listen(port, () => {
    console.log("listening", port);
})