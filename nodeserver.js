//Rinradee Phollamud Student ID:1630900981

const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

//Define Variables
var id = 65140322;
var status = "Single";

//Add Variables
var user_list = [
    { name: "Nester" , adderss: "BKK", birth_year:2003},
    { name: "Annie" , adderss: "PKT", birth_year:1999},
    { name: "Winner" , adderss: "CNX", birth_year:2022}
];

//Add Feature Bar Variables
var feature =[

    {img : "images/dessert.svg",
    top : "Dessert",
    bottom : "Enjoy with the sweetie :-)"},

    {img : "images/food.svg",
    top : "Fast Food",
    bottom : "Enjoy with the food :-)"}

]

//Add content Variables

var contentinfo =[
    {img :"images/email.svg",
    top : "rinradee.phol@bumail.net"
    },

    {img :"images/facebook.svg",
    top : "Mind Rinradee"
    },

    {img :"images/ig.svg",
    top : "Mindrins"
    }

]

var navigationbar1 = "About"
var navigationbar2 = "Docs"
var navigationbar3 = "Login"

var logo = [
    {img : "images/FOOD1.svg"}
]


//Add Content Fonts Variables
var contentfont1 = "Food community"
var contentfont2 = "By Mindrin"
var contentfont3 = "Learn More"
var about = "About"

//Set & Call EJS
app.set('view engine','ejs')

//connect public folder
app.use(express.static('public'))

//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS Test!")
}) 

//New Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index', {userid : id, status : status,
    obj_user_list : user_list})
})

//connect in dex2.ejs
app.get("/index2",(req,res) =>{
    res.render('index2',{obj_feature : feature,
        obj_contentinfo : contentinfo,
        obj_logo : logo,
        navigationbar1 : navigationbar1,
        navigationbar2 : navigationbar2,
        navigationbar3 : navigationbar3,
        contentfont1 : contentfont1, 
        contentfont2 : contentfont2,
        contentfont3 : contentfont3
    })
})

//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})