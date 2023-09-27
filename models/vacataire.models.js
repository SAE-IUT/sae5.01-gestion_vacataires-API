const mongoose = require("mongoose")

const vacataireSchema = mongoose.Schema(
    {
      message: {
          type: String,
          required: true
      },
      author: {
          type: String
      },
      likers: {
          type: [String]
      }


      // name: {
      //   type: String,
      //   required: true
      // },
      // lastName: {
      //   type: String,
      //   required: true
      // },
      // email: {
      //   type: String,
      //   required: true
      // }




      //   name: {
      //     type: String,
      //     required: true
      // },
      // lastName: {
      //     type: String,
      //     required: true
      // },
      // email: {
      //     type: String,
      //     required: true
      // },
      // department: {
      //     type: [String]
      // },
      // skills: {
      //     type: [String]
      // },
      // socials: {
      //     type: [String]
      // },
      // status: {
      //     type: String,
      //     required: false
      // },
    }
)

module.exports = mongoose.model('vacataire', vacataireSchema)
/*
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

*/

/*
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
*/