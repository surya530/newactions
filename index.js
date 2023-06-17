
let express = require("express");
let app = express();

app.get('/' , (req,res)=>{
	res.status.json({data : 'running on port 3002'});
});

app.listen(3002 , ()=>{});



