import connectDB from "./db/index.js";
import app from "./app.js";
import "dotenv/config"

connectDB().then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
    })

}).catch((error)=>{
    console.log("MongoDb failed to connect",error);
})
