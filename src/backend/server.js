const express=require('express');
const app=express();
const cors =require('cors');
const Router=express.Router();
const mongoose=require('mongoose');
const contact=require('./model');
const Schema= mongoose.Schema;
const port=4000;


app.use(cors());
app.use(express.json());
app.use('/contact',Router);


mongoose.connect(
    'mongodb+srv://santam:santam12345@cluster-q6ixt.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser:true,useUnifiedTopology: true},
);

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log('Atlas is connected')
})

app.get('/',(req,res)=>{
    contact.find()
    .then(contact=>{
        res.json(contact)
    })
    .catch(err=>{
        res.send(err)
    })
})

app.post('/create',(req,res)=>{
    const mycon=new contact(req.body)
    mycon.save()
    .then(()=>{
        res.json('Contact added')
})
    .catch(err=>res.send(err))
})

app.post('/update/:id',(req,res)=>{
    contact.findById(req.params.id)
    .then(
        con=>{
            con.name=req.body.name,
            con.phone=req.body.phone,
            con.address=req.body.address

            con.save()
            .then(()=>res.send('Contact updated'))
            .catch(err=>res.send(err))
        }       
    )
    .catch(err=>res.send(err))
});

app.delete('/:id',(req,res)=>{
    contact.findByIdAndDelete(req.params.id)
    .then(()=>res.send('Contact Deleted'))
    .catch(err=>res.send('err'))
})

app.listen(port,()=>{
    console.log('Server Running');
});