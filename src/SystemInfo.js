const express=require("express");
const os=require("os");
const port=process.env.PORT || 8000;

const app=express();


app.set("view engine","hbs");
//app.set("views");

app.get('/',(req,res)=>{
    res.render("index",{
        username:osinfo.username,
        Architecture:osinfo.Architecture,
        OsType:osinfo.osType,
        Version:osinfo.version,
        Release:osinfo.Release,
        TotalRam:osinfo.TotalRam,
        FreeRam:osinfo.free
    });
})

app.get('*',(req,res)=>{
    res.send("<h1>404 <br>Page not found</h1>");
})


const freeram=os.freemem();
const TotalRam=os.totalmem;

const osinfo={
    username:os.hostname(),
    Architecture:os.arch(),
    osType:os.type(),
    version:os.version(),
    Release:os.release(),
    free:freeram/1024/1024/1024,
    TotalRam:TotalRam/1024/1024/1024
}

//console.log(osinfo);

app.listen(port,()=>{
    console.log(`server is listening to the port number ${port}`);
})