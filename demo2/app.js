const express = require('express')


const app = express()
const port = 80





// 引入ejs
app.set('view engine', "ejs")




//应用级中间件
app.use((req, res, next) => {
    console.log(new Date())
    next()
})
//内置中间件
app.use(express.static("static"))

app.get('/', (req, res) => {
    let title = "你好ejs";
    res.render("index.ejs", {
        title
    })
}
)

app.get('/news', (req, res) => {
    let title = {
        name: "张三",
        age: 20
    };
    let aa = "<h2>aaaa</h2>"
    res.render("index2", {
        title: title,
        aa: aa
    })
})

app.get('/news/:id', (req, res) => {
    res.send("news id")
}
)

app.get('/login', (req, res) => {
    res.render("login", {
    })
}
)

app.post('/login', (req, res) => {
    res.send("登陆成功")
}
)

//错误处理中间件
app.use((req, res, next) => {
    res.status(404).send("404")
})


app.listen(port, () => console.log(`Example app listening on port port!`))