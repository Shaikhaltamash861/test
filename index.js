const exp=require("express");
const app=exp();
const PORT=process.env.PORT||5000;
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(PORT,console.log(`server is running on${PORT}`))