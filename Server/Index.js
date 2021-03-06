const express = require('express'); 
const path = require('path'); 

const app = express();
const port = 3005; 

app.use(express.static('public'));

app.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/bundle.js'), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('retreiving bundle files');
        }
    })
})

app.listen(port, () => console.log(`App listening on port ${port}`));
