import express from 'express';
import hbs from 'hbs';

const app = express();
const port = 3000;

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'))

hbs.registerPartials("views/partials"), err => {
    if (err) {
        console.log(err);
    }
}
app.get('/', (req, res) => res.render('home'))

app.listen(port, () => console.log("I am listening on ", port))