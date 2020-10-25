const dataBase = require('./db')
const createProffy = require('./createProffy')

dataBase.then(async (db) => {

    proffyValue = {
        name: "Diego Fernandes" , 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "12312312" ,
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 1,
        cost: "20"
        //proffy id vem no banco de dados
    }

    classScheduleValues = [
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 3,
            time_from: 1380,
            time_to: 1880
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de determinado professor
    //trazer junto os dados
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8 - 18
    //horário time from 8h, precisa ser menor ou igual ao horário solicitado
    //time to precisa ser acima
    const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules)
})