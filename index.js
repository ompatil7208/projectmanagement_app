const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
		host:"sql12.freesqldatabase.com",
		user:"sql12718987",
		password:"cwPB7XKUZt",
		database:"sql12718987"
});

app.post("/save",(req,res)=> {
	let data = [req.body.p_id,req.body.p_title,req.body.p_desc,req.body.p_link]
	let sql = "insert into pms8july24 values(?,?,?,?)";
	con.query(sql,data,(err,result)=> {
		if(err)			res.send(err);
		else			res.send(result);
	});
});

app.get("/gs",(req,res)=> {
		let sql = "select * from pms8july24";
		con.query(sql,(err,result)=> {
		if(err)			res.send(err);
		else			res.send(result);
	});
});

app.delete("/ds",(req,res)=> {
		let data = [req.body.p_id]
		let sql = "delete from pms8july24 where p_id = ?";
		con.query(sql,data,(err,result)=> {
		if(err)			res.send(err);
		else			res.send(result);
	});
});

app.put("/us",(req,res)=> {
		let data =[req.body.p_title,req.body.p_desc,req.body.p_link,req.body.p_id]
		let sql = "update pms8july24 set p_title = ? ,p_desc = ? , p_link = ? where p_id =?";
		con.query(sql,data,(err,result)=>{
		if(err)			res.send(err);
		else			res.send(result);
	});
});

app.listen(9000,()=> {console.log("ready to serve @ 9000");});