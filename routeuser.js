import express from "express";
const app = express();
const PORT =3000;

app.get("/",(req,res)=>{
    res.send("Hello world");
});

app.get("/user/:name",(req,res)=>{
    const user =req.params.name;
    res.send(`hello,${user}!`);
});

app.listen(PORT,()=>{
    console.log(`server is running in the port http://localhost:${PORT}`);
});
