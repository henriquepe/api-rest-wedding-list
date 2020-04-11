const express = require('express');
const cors = require('cors');
const app = express();
const {uuid} = require('uuidv4');


app.use(express.json());
app.use(cors());


const weddingList = [];

app.get('/wedding', (req, res) => {

  return res.json(weddingList);
});

app.post('/wedding', (req, res) => {
 
  const {name, age, family} = req.body;
  
  const guest = {
    id: uuid(),
    name,
    age,
    family
  }
  console.log(guest);
  weddingList.push(guest)
  
  return res.json(guest);

});

  app.delete('/wedding/:id', (req, res) => {
    const {id} = req.params;

    const guestForDelete = weddingList.findIndex(guest => guest.id === id);

    if(guestForDelete < 0){
      return res.status(404).send("Guest not found");
    }

    

    return  res.status(204).json(weddingList.splice(guestForDelete, 1));;
     
    });
    
 



module.exports = app;








