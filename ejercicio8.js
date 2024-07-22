let familia = [

    { nombre: "Adrian", edad: 60, parentesco: "padre", ocupacion: "ingeniero" },
    { nombre: "Natalia", edad: 55, parentesco: "madre", ocupacion: "doctora" },
    { nombre: "Lorena", edad: 28, parentesco: "hija", ocupacion: "abogada" },
    { nombre: "Carlos", edad: 15, parentesco: "sobrino", ocupacion: "estudiante" },
    { nombre: "Diego", edad: 85, parentesco: "abuelo", ocupacion: "pensionado" },

];

for (let i = 0; i < familia.length; i++) {
 console.log(
"soy"+familia[i].nombre +
",tengo"+familia[i].edad +"años" +
",parentesco:"+familia[i].parentesco +
",miocupaciónes" + familia[i].ocupacion
 );
    
}
