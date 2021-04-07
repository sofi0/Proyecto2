const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
require('./helpers/helpers')


//path
const dirPublic = path.join(__dirname, "../public")
const dirViews = path.join(__dirname, "../template/views")
const dirPartials = path.join(__dirname, "../template/partials")

app.use(bodyParser.urlencoded({extended: false}));

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

app.post('/registrar',function(req,res){
	res.render('registrar',{
		titulo:'registrar',
		ced:req.body.cedula,
		nomb:req.body.nombre,
		email:req.body.email,
		idCurso:req.body.idCurso
	})
})

app.post('/cursos1',function(req,res){
	res.render('cursos2',{
		titulo:'ver curso',	
	})
}) 

app.post('/eliminar',function(req,res){
	res.render('cursos2',{
		titulo:'ver curso',	
		idEst: req.body.idEst,
		idC:req.body.idCur
	})
})

app.get('/cursos2',function(req,res){
	res.render('cursos2',{
		titulo:'cursos2'
	})
})


app.post('/crearcurso',function(req,res){
	res.render('cursos1',{
		id:req.body.id,
		nombreCurso:req.body.nombreCurso,
		duracion:req.body.duracion,
		costoCurso:req.body.costoCurso
	})
})

//error
app.get('*', function(req, res){
	res.render('error');
});

app.listen(3000, () => {
	console.log('servidor en el puerto 3000')
});





