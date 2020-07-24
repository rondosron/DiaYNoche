window.onload = function() {
	const http = new XMLHttpRequest()
	http.open("GET", "http://api.weatherapi.com/v1/current.json?key=4c1aff14311045f4bd860738201707&q=Cipolletti")
	http.send()
	http.onreadystatechange = function() {
		const respuesta = JSON.parse(http.responseText)
		// console.log(respuesta["current"]["temp_c"])
		let temperatura = respuesta["current"]["temp_c"]

		const centroTermometro = document.querySelector(".bolamercurio")
		const termometroSup = document.querySelector(".barramercurioSup")
		const termometroInf = document.querySelector(".barramercurioInf")
		// let temperatura = 50
		// TERMOMETOR SUPERIOR
		// MAX: 5.2CM o 196px = 50° --- MIN: 0.5 CM = 1° o 15px = 1° (menos = 0°) ---  CADA GRADO = 3.92px o 
		// TERMOMETRO INFERIOR
		// MAX: 2.5CM o 90px = -10° --- MIN: margin-bottom de 2CM o 76px = 0° --- CADA GRADO = 9px o 0.2CM
		if (temperatura >= 0){
			let alturaTermometro = temperatura * 3.92
			centroTermometro.innerHTML = temperatura + "°"
			if (temperatura > 10){
				termometroSup.style.marginBottom = "10px"
				termometroSup.style.height = alturaTermometro + "px"
				termometroInf.style.height = 0
				termometroSup.style.backgroundColor = "red"
				centroTermometro.style.backgroundColor = "red"
			} else if (temperatura >= 0) {
				termometroSup.style.height = alturaTermometro + "px"
				termometroInf.style.height = 0
				termometroSup.style.backgroundColor = "blue"
				centroTermometro.style.backgroundColor = "blue"
			}
		} else {
			let alturaTermometro = temperatura * 9
			termometroSup.style.height = 0
			termometroInf.style.height = Math.abs(alturaTermometro) + "px"
			termometroInf.style.marginBottom = 90 - Math.abs(alturaTermometro) + "px"
			termometroInf.style.backgroundColor = "blue"
			centroTermometro.style.backgroundColor = "blue"
			centroTermometro.innerHTML = temperatura + "°"
		}
	}
}