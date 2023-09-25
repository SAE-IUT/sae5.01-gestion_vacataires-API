const express = require('express')
const cors = require('cors');

const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
  res.status(404).send("ERROR")
})

// GET the tutors data
app.get('/vacataires', (req, res) => {
    res.status(200).json({
      vacataires: [
        {
          "id": number = 1,
          "name": string = "Louis",
          "lastName": string = "Chanouha",
          "abbreviation" : string = "LC",
          "department": string = [
            "info",
            "cs"
          ],
          "email" : string = "louis.chanouha@gmail.com",
          "skills" : string = [
            "Développement",
            "Base de données",
            "Réseaux"
          ],
          "socials" : string = [
            "",
            "",
            ""
          ],
          "status": string = "en attente"
        },
        {
          "id": number = 2,
          "name": string = "Jean-Michel",
          "lastName": string = "Bruel",
          "abbreviation" : string = "JMB",
          "department": string = [
            "info",
            "cs"
          ],
          "email" : string = "jean-michel.bruel@gmail.com",
          "skills" : string = [
            "Développement",
            "Base de données",
            "Réseaux"
          ],
          "socials" : string = [
            "",
            "",
            ""
          ],
          "status": string = "libre"
        },
        {
          "id": number = 3,
          "name": string = "Esther",
          "lastName": string = "Pendaries",
          "abbreviation" : string = "EP",
          "department": string = [
            "info",
            "cs"
          ],
          "email" : string = "esther.pendaries@gmail.com",
          "skills" : string = [
            "Développement",
            "Base de données",
            "Réseaux"
          ],
          "status": string = "admis"
        }
      ],

    }
    )
})

// GET the tutors data
app.get('/cours', (req, res) => {
  res.status(200).json({
    cours: [
      {
        "id": number = 1,
        "name": string = "Développement Avancée",
        "department": string = "BUT2",
        "tutors": string = [
          "JMB",
          "LC"
        ]
      },
      {
        "id": number = 2,
        "name": string = "Archi réseau",
        "department": string = "BUT3",
        "tutors": string = [
          "JMB"
        ]
      },
      {
        "id": number = 3,
        "name": string = "Base de données",
        "department": string = "BUT1",
        "tutors": string = [
          "EP",
          "LC"
        ]
      },
      {
        "id": number = 4,
        "name": string = "Base de données",
        "department": string = "BUT1",
        "tutors": string = [
          "EP",
          "LC"
        ]
      },
      {
        "id": number = 5 ,
        "name": string = "Base de données",
        "department": string = "BUT1",
        "tutors": string = [
          "EP",
          "LC"
        ]
      }
    
    ]
  }
  )
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
