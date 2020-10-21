//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

//console.log(date())

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

let items =[];
let workItems=[];



app.set('view engine', 'ejs');
app.use(express.static('public'))
//con get pasa la informacion por el navegador

app.get("/", function(req, res) {

	let day = date.getDate();	

    res.render("list", { listTitle: day, newListItem: items });
})

//aqui guardo lo que el usuario pasa por el 
//form y luego lo redireeciono y se ejecuta el get
app.post("/",function(req,res){
	let item = req.body.newItem

	if(req.body.list==="work"){
		workItems.push(item);
		res.redirect("/work");
	}else {
		items.push(item);

	res.redirect("/");
	}

	
})


app.get("/work",function(req,res){
	res.render("list",{listTitle:"Work List",newListItem:workItems})
})


app.post("/work",function(req,res){
	let item = req.body.newItem;
	workItems.push(item)
	res.redirect("/work")
})


app.listen(3000, function() {
    console.log("Server running on port 3000");
})


