let pets = [];//arreglo vacio
console.log("Register");
//crear constructor
    function Pet(nombreP,generoP,razaP,servicioP,edadP,nombreduenoP,telP,pagoP,animalP){ //variable local
        this.nombre=nombreP; //constructor
        this.genero=generoP;
        this.raza=razaP;
        this.servicio=servicioP;
        this.edad=edadP;
        this.nombredueno=nombreduenoP;
        this.teldueno=telP;
        this.pago=pagoP;
        this.animal=animalP;
        
    }
        //variables globales
        //obtener los valores de los inputs
        let inputNombre=document.getElementById("txtNombre");
        let inputGenero=document.getElementById("txtGenero");
        let inputRaza=document.getElementById("txtRaza");
        let inputServicio=document.getElementById("selServicio");
        let inputEdad=document.getElementById("txtEdad");
        let inputNombreDueno=document.getElementById("txtDueno");
        let inputTelDueno=document.getElementById("txtTelDueno");
        let inputPago=document.getElementById("selPago");
        let inputAnimal=document.getElementById("selAnimal");
    function validacion(pet){
            let valida=true; //todo bien
            //reset de los inputs
            inputNombre.classList.remove("error");
            inputGenero.classList.remove("error");
            inputRaza.classList.remove("error");
            inputServicio.classList.remove("error");
            inputEdad.classList.remove("error");
            inputNombreDueno.classList.remove("error");
            inputTelDueno.classList.remove("error");
            inputPago.classList.remove("error");
            inputAnimal.classList.remove("error");


            if(pet.nombre==""){
                //si entro aquó no es valida la mascota
                //alert ("Ingresa un nombre");
                inputNombre.classList.add("error");
                console.log("Error");
                alert("Error, debe ingresar nombre");
                valida=false;
            }
            

            if(pet.genero==""){
                //si entro aquí no es valida la mascota
                inputGenero.classList.add("error");
                console.log("Error, debe ingresar género");
                alert("Error, debe ingresar género");
                valida=false;
            }
            

            if(pet.raza==""){
                //si entro aquí no es valida la mascota
                inputRaza.classList.add("error");
                console.log("Error, debe seleccionar raza");
                alert("Error, debe ingresar raza");
                valida=false;
            }
            

            //validar que el campo de servicio no quede vacio
            if(pet.servicio==""){
                //si entro aquí no es valida la mascota
                inputServicio.classList.add("error");
                console.log("Error, debe seleccionar Servicio");
                alert("Error, debe seleccionar servicio");
                valida=false;
            }
            

            if(pet.edad==""){
                //si entro aquí no es valida la mascota
                inputEdad.classList.add("error");
                console.log("Error, debe seleccionar edad");
                alert("Error, debe ingresar edad");
                valida=false;
            }
           

            if(pet.nombredueno==""){
                //si entro aquí no es valida la mascota
                inputNombreDueno.classList.add("error");
                console.log("Error, debe ingresar nombre del dueño");
                alert("Error, debe ingresar nombre del dueño");
                valida=false;
            }
            if(pet.teldueno==""){
                //si entro aquí no es valida la mascota
                inputTelDueno.classList.add("error");
                console.log("Error, debe ingresar teléfono del dueño");
                alert("Error, debe ingresar teléfono del dueño");
                valida=false;
            }
            if(pet.pago==""){
                //si entro aquí no es valida la mascota
                inputPago.classList.add("error");
                console.log("Error, debe seleccionar método de pago");
                alert("Error, debe ingresar método de pago");
                valida=false;
            }
            if(pet.animal==""){
                //si entro aquí no es valida la mascota
                inputAnimal.classList.add("error");
                console.log("Error, debe seleccionar animal");
                alert("Error, debe seleccionar animal");
                valida=false;
            }
            
            return valida;

                                
        }
        
        
    //crear function de registro
    function registro(){
        console.log("Registrando mascota...");
        //obtener los valores de los inputs
        //crear objeto
        let newPet = new Pet (inputNombre.value,inputGenero.value,inputRaza.value,inputServicio.value,inputEdad.value,inputNombreDueno.value,inputTelDueno.value,inputPago.value,inputAnimal.value);
        if(validacion(newPet)==true){
         //imprimir el objeto en consola
        console.log(newPet);
        pets.push(newPet);
        displayCards();
        //limpiar
        limpiarForm();    
        }
    }
    function limpiarForm(){
            inputNombre.value="";
            inputGenero.value="";
            inputRaza.value="";
            inputServicio.value="";
            inputEdad.value="";
            inputNombreDueno.value="";
            inputTelDueno.value="";
            inputPago.value="";
            inputAnimal.value="";
    }    
    function init(){
        console.log("Register");
        //objeto
        let pet1 = new Pet("Macchiato","Macho","Boxer","Grooming","5","Juan Perez","686 123 45 67","Tarjeta","Perro");
        let pet2 = new Pet("Perry","Macho","Chihuahua","Vacunas","4","Rosa Perales","686 890 12 34","Efectivo","Perro");
        let pet3 = new Pet("Saria","Macho","Periquito Azul","Vacunas","2","Cervantes","686 123 45 67","Tarjeta","Periquito");
        let pet4 = new Pet("Rigby","Macho","Hamster","Vacunas","1","Aylin","686 890 12 34","Efectivo","Hamster");
        pets.push(pet1,pet2,pet3,pet4); //declarar una por una. 
        displayCards();
    }
window.onload=init; //ejecuta init cuando termina de renderizar el HTML
//agregar elementos

//tener 8 variables
//