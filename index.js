// express
let express = require("express");
let cors = require('cors');
let path = require("path");
let data = require("./data.js");
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors({ origin : '*' }));

/*app.use(express.static(path.join(__dirname , 'build')));

app.get('/' , async (req, res)=>{
	res.sendFile(path.join(__dirname , 'build' , 'index.html'));
});
*/
app.get('/data' , (req,res)=>{
	res.status(200).json({data : data});
});

app.listen(3002 , ()=>{});

//console.log({data});

