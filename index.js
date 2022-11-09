const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('dist'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/dist/real-time_bus_tracker.html');
});



port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Runninng on port ${port}`);
})