import express from 'express'
import router from './routes/notesRoutes.js';


const app = express();

app.use('/api/notes', router);



app.listen(5000, ()=>{
    console.log('app is running successfullyyyyyy');
})



mongodb+srv://shohidularifin_db_user:Pm12hukwEXEe077f@cluster0.b12f0gr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
