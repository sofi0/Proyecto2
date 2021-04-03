const fs = require ('fs')
listaEstudiante = [];

const listar =()=> {
	listaEstudiante = require ('./estudiantes.json')
	texto = "lista estudiantes"
	listaEstudiante.forEach(est =>{
		texto = $
	})
}

const listarNombres =() => {
	listaEstudiante=require('./estudiante.json')
		let texto = "<select name='cedula' class='form-control'>";
		listaEstudiante.forEach(est => {
			texto= `${texto} <option value='${est.cedula}'>${est.nombre}<option>`
		})
		texto = texto + "</select>"
	return texto
}

const crear = (estudiante) =>{
	listar ();
	let est ={
		cedula: estudiante.cedula,
		nombre: estudiante.nombre,
		email: estudiante.email
		
	}
	let duplicado = listaEstudiante.find(nom => nom.cedula == estudiante.cedula)
	if (duplicado){
		console.log('ya existe')
	}
	else {
		listaEstudiante.push(est)
		console.log(listaEstudiante)
		guardar()
	}
}

const listar = () => {
	try {
		listaEstudiante = JSON.parse(fs.readFileSync('estudiantes.json'))
	}catch (err) {
		listaEstudiante=[];
	}
}

const guardar = () => {
	let datos = JSON.stringify(listaEstudiante);
	fs.writeFile('estudiantes.json', datos, (err)=>{
		if (err) throw (err);
		console.log('archivo fue creado con exito')
	})
}

const ver = () => {
	listar()
	listaEstudiante.forEach(est => {
		console.log("la cedula es " + est.cedula)
		console.log("el nombre es " + est.nombre)
		console.log("la descripcion es " + est.descripcion)
		console.log("el valor es " + est.valor)
		console.log("\n")
	})
}

const cargar = () => {
	try{
		listaEstudiante = require (./estudiantes.json)	
	}catch(err){
		listaEstudiante=[];
	}
} 

module.exports = {
	listar,
	listarNombres
}