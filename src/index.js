import express from 'express';
const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati
let p= [["ime:Ivan", "prezime:Ivić", "jmbag:123456", "godina_studija:2"],
 ["ime:Lana", "prezime:Larić", "jmbag:654321", "godina_studija:1"], 
 ["ime:Luka", "prezime:Ulsić", "jmbag:987456", "godina_studija:3"], 
 ["ime:Iva", "prezime:Ivičić", "jmbag:123457", "godina_studija:4"], 
 ["ime:Luana", "prezime:Filić", "jmbag:129652", "godina_studija:2" ]]
app.get('/', (req, res) => res.send('<a href="http://localhost:3000/studenti">Popis studenata</a> <br><a href="http://localhost:3000/studenti/first">Prvi upisani student</a> <br><a href="http://localhost:3000/studenti/last">Zadnji upisani student</a>'))
app.get('/studenti', (req, res) => {
   
    res.json(p)
})
app.get('/studenti/first',(req, res) => {
    res.json(p[0])
})
app.get('/studenti/last',(req, res) => {
    res.json(p[4])
})

app.listen(port, () => console.log(`Slušam na portu ${port}!`))