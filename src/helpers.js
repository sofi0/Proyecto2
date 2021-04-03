const hbs = require ('hbs');
// const funciones = require ('/funciones');

	hbs.registerHerlper('listar', ()=>{
		try{
			return funciones.listar()
		}catch (error){
			return "No hay cursos"
		}
	});

	hbs.registerHerlper('listarNombre', ()=>{
		try {
			return funciones.listarNombre()
		}catch (err){
			return "no existen estudiantes"
		}
	});

	hbs.registerHerlper('verEst', (ced)=> {
		listaEstudiante = require ('./estudiante.json')
		let encontrar = listaEstudiante.find(buscar => buscar.cedula == ced)
		if (encontrar){
			texto = "<div class= 'alert alert-success' role='alert'> persona encontrada"
			texto = texto + `la cedula es ${encontrar.cedula} <br>`
		}
	})

	hbs. registerHerlper('crear', (ced, nomb, email) => {
		if (ced){
			let est ={
				cedula: parseInt(ced),
				nombre: nomb,
				email: email,
			}
			console.log("funcionando")
			return funciones.estudiante(est)

		}
	});

	/*hbs.registerHerlper('registrar', (ced, nomb, pais)=>{
		if (ced){
			let est ={
				cedula: parseInt(ced),
				nombre: nomb,
				pais: pais,
			}
			listaEstudiante = require ('./estudiantes.json')
			listaEstudiante.push(est)
			console.log("ingreso")
			console.log(listaEstudiante)
			texto = `<div class='alert alert-success alert-dismissible fade show' role='alert'` 
			let datos = JSON.stringify(listaEstudiante);
			fs.writeFile('src/estudiantes.json', datos, (err)=>{
				if (err) throw (err);
					console.log('archivo fue creado con exito')
			})
			return texto
		}
	})*/
