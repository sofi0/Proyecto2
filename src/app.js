const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const bodyparser = require('body-parser')
require('./helpers/helpers')

//path
const dirPublic = path.join(__dirname, "../public")
const dirViews = path.join(__dirname, "../template/views")
const dirPartials = path.join(__dirname, "../template/partials")


//static
app.use(express.static(dirPublic))

//app.use(bodyParser.urlencoded({extended: false}))

//hbs
app.set('view engine', 'hbs');
app.set('views', dirViews);
hbs.registerPartials(dirPartials)


//paginas
app.get('/',function(req,res){
	res.render('cursos1',{
		titulo:'cursos1'
	})
})


app.get('/cursos1',function(req,res){
	res.render('cursos1',{
		titulo:'cursos1'
	})
})

app.get('/registrar',function(req,res){
	res.render('registrar')
})

// app.post('/registrar',function(req,res){
// 	res.render('registrar',{
// 		titulo:'registrar',
// 		ced:req.body.cedula,
// 		nomb:req.body.nombre,
// 		email:req.body.email,
// 	})
// })

app.post('/cursos1',function(req,res){
	res.render('cursos2',{
		titulo:'ver curso',	
	})
}) 

app.get('/cursos2',function(req,res){
	res.render('cursos2',{
		titulo:'cursos2'
	})
})

//error
app.get('*', function(req, res){
	res.render('error');
});

app.listen(3000, () => {
	console.log('servidor en el puerto 3000')
});

/*app.get('cursos1',(req,res) =>{
	res.render('cursos1', {
		nombre:
	});
});*/

//error


