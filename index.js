import  express  from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
let tasks = [];
app.get("/", (req,res)=>{
    res.render("index.ejs", {tasks});
})

app.post("/submit",(req,res)=>{
    let task = req.body["addTask"];
    if(task){
      tasks.push(task)
    }
    res.redirect("/");
    
})

app.get("/delete/:index", (req,res)=>{
  const index = req.params.index;
  if(index >= 0 && index < tasks.length){
    tasks.splice(index, 1);
  }
  res.redirect("/");
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
