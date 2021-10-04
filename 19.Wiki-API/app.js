const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
    useNewUrlParser: true
});
const articleSchema = {
    title: String,
    content: String
};
const Article = mongoose.model("Article", articleSchema);

// for all article

app.route("/articles")
    .get((req, res)=>{
        Article.find({}, (err, foundArticles)=>{
            if(!err){
                res.send(foundArticles);
            }
            else {
                res.send(err);
            }
        });
    })
    .post(
        (req, res)=>{
            const newArticle = new Article({
                title: req.body.title,
                content: req.body.content
            });
            newArticle.save((err)=>{
                if(!err){
                    res.send("Sucessfully added to DB");
                }
                else {
                    res.send(err);
                }
            });
    })
    .delete(
        (req, res)=>{
            Article.deleteMany((err)=>{
                if(!err){
                    res.send("Sucessfully deleted");
                }
                else {
                    res.send(err);
                }
            });
    });

// for all article

app.route("/articles/:articleTitle")
    .get((req, res)=>{
        Article.findOne({title: req.params.articleTitle}, (err, foundArticle)=>{
            if(foundArticle){
                res.send(foundArticle);
            }
            else {
                res.send("No articles matching with that title");
            }
        });
    })
    .put((req, res)=>{
        Article.updateOne(
            {title: req.params.articleTitle},
            {title: req.body.title, content: req.body.content},
            {overwrite: true},
            (err) =>{
               if(!err){
                   res.send("Sucessfully Updated article!")
               }
            });
    })

app.listen(3000, ()=> {
  console.log("Server started on port 3000");
});


