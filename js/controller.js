"use strict"
import { Articulo, Receta } from './config.js';
import {sectionContainer,sectionPrescription,fragment,modalBody} from './animations.js';


//las noticias
const noticias = [
    new Articulo("Primera Noticia", "La primera marca de galletas que nuestros expertos han escogido para esta recopilación es la española Gullón. Esta marca fabrica otros productos pero sobre todo está centrada en la elaboración de galletas para el desayuno. Gullón es una marca y también una empresa con el mismo nombre que se fundó en 1892 y merece ser incluida en esta recopilación por ser la primera marca de galletas española fundada en España. Las galletas que fabrica la marca son además especialmente saludables porque cuentan con bajo contenidos en azúcares, en sal y en grasas saturadas con lo que se trata de una marca pensada para las personas que quieren cuidar su salud sin renunciar al clásico desayuno o tentempié de galletas."),
    new Articulo("Segunda Noticia", "En segundo lugar encontramos la conocida marca Reglero, una marca de productos que forma parte de la empresa española Arluy, que se ubica en la Rioja y se dedica a fabricar galletas y chocolate a nivel nacional y también internacional. Reglero es dentro de la empresa la marca más conocida puesto que se dedica a la fabricación de productos artesanales y de calidad dirigidos sobre todo a adultos y que suelen ser la elección de muchos consumidores para fechas especiales como Navidad o eventos, destacando productos como los clásicos Nevaditos o los surtidos de galletas para el café. Esta marca con orígenes zamoranos nación en los años sesenta a nivel industrial pero desde antes era conocida por las pastelerías que regentaba la familia Reglero en Valladolid y en Zamora."),
    new Articulo("Tercera Noticia", "Otra de las marcas de galletas más reconocidas en todo el mundo es Filipinos. Son unas galletas con forma de rosquillas pero mucho más pequeñas y pueden encontrarse en muchos sabores diferentes, siendo los más populares los de chocolate blanco y chocolate negro. Esta marca destaca por ofrecer sus productos en unos envases en forma de tubo con colores muy llamativos como el rojo, el negro y el azul. En España, en Portugal y en Francia la empresa encargada de comercializar esta marca es Artiach, que forma parte del grupo Adam Foods. Además resulta curioso como en otros lugares del mundo se han adaptado con otros nombres: por ejemplo, en los Países Bajos los Filipinos tienen licencia de United Biscuits y se venden y comercializan de forma local bajo la marca Verkade.Otra de las marcas de galletas más reconocidas en todo el mundo es Filipinos. Son unas galletas con forma de rosquillas pero mucho más pequeñas y pueden encontrarse en muchos sabores diferentes, siendo los más populares los de chocolate blanco y chocolate negro. Esta marca destaca por ofrecer sus productos en unos envases en forma de tubo con colores muy llamativos como el rojo, el negro y el azul. En España, en Portugal y en Francia la empresa encargada de comercializar esta marca es Artiach, que forma parte del grupo Adam Foods. Además resulta curioso como en otros lugares del mundo se han adaptado con otros nombres: por ejemplo, en los Países Bajos los Filipinos tienen licencia de United Biscuits y se venden y comercializan de forma local bajo la marca Verkade."),
    new Articulo("Cuarta Noticia","En épocas decembrinas, las galletas de animalitos se han convertido en las protagonistas de varias reuniones mexicanas al ser el acompañamiento de bebidas calientes como café, chocolate e incluso atole, distinguiéndose por sus formas raras y bajo precio. Dichas galletas están inspiradas en la forma de 53 animales diferentes en los que destacan los osos, tigres, cebras, leones, elefantes, jirafas, gorilas, hipopótamos, koalas, rinocerontes, etc. Sin embargo, pocos conocen que en realidad, este tipo de galletas son mundialmente conocidas y consumidas en países como Inglaterra y Estados Unidos e incluso, existe el Día de las Galletas de Animalitos que se celebra el 18 de abril.")

];


noticias.map((parm) => {

    let div = document.createElement("div");
    let div2 = div.cloneNode(true);

    let pa = document.createElement("p");
    let h3 = document.createElement("h3");
    let btn = document.createElement("button");
    btn.className = "section__btn--info";

    div2.appendChild(pa);
    div.appendChild(h3);
    div.appendChild(div2);
    h3.textContent = parm.tittle;
    
    div.className = "section__news--description";
    div2.className = "section__news__paragraph";
    
    if(parm.descripcion.length > 200){
        
        div2.appendChild(btn);
        btn.innerHTML= `<a class="btn" data-bs-toggle="modal" href="#exampleModalToggle" role="button">leer mas</a>`;
        
        btn.onclick = ()=>{modalBody.textContent = parm.descripcion;}
        let character  = new String(parm.descripcion);
        pa.textContent = character.slice(0,350)+"...";

     }else{
        pa.textContent = parm.descripcion; 
    }
    
    fragment.appendChild(div);
    sectionContainer.appendChild(fragment);
    
    
});


//################# ventana de emergencia ###############\






// ########## las Recetas 

let prescription = [new Receta("Galletas caseras y fáciles de hacer", ["1 cucharada sopera de esencia de vainilla", " 125 gramos de harina (de cualquier tipo)", " 1 pizca de polvo de hornear", " 1 cucharada sopera de ralladura de cáscara de limón","75 gramos de azúcar1 huevo"]),
    , new Receta("Galleta con pasta quebrada", ["1/4 kg. de mantequilla", "1 huevo", "Azúcar", "350 gr. de harina", "1/4 kg. de azúcar glacé","Unos piñones","Harina"])
    , new Receta("Galletas de Navidad", ["250 gr de mantequilla", "harina para estirar", "glasa de fresa", "glasa de chocolate","450 gr de harina","250 gr de azúcar glas"])
    , new Receta("Galletas de mantequilla y miel", ["1 cucharadita de cuatro especias", "250 gr. de harina", "250 gr. de mantequilla", "2 huevos","400 gr. de chocolate de cobertura","1/2 l. de leche","250 gr. de azúcar glas","3 cucharadas de miel","1/2 l. de nata","hojas de menta"])
    , new Receta("Galletas de corazón con chocolate", ["h300 gramos de harina", "60 gramos de azúcar", "125 gramos de mantequilla", "1 huevo","1 cucharadita de limón ralladura","100 gramos de chocolate negro fondant","Azúcar glas","1 pizca de sal"])
    , new Receta("Galletas de rosa", ["150 gramos de azúcar glas", "Colorante alimentario líquido rosa", "Aroma de rosa", "45 gramos de claras de huevo"])
    , new Receta("Galletas de avena, zanahoria y miel", ["1 taza avena instantánea", "1 taza harina ", "1 zanahoria mediana, rallada", "1 cucharadita canela en polvo","1 cucharada polvos de hornear","2 cucharadas miel","2 huevos","Esencia de vainilla","Pizca sal"])
    , new Receta("Galletas de chocolate crujientes", ["250 g. harina de trigo de todo uso", "85 g. de mantequilla", "150 g. de azúcar", "1 huevo","½ cdita. de levadura química en polvo (4 g.)","1 cdita. esencia de vainilla (3 ml.)","100 g. de chocolate 70 % cacao"])

];
prescription.map((arg) => {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let ul = document.createElement("ul");


    div.className = "section__prescription--description";
    let div2 = div.cloneNode(true);
    div2.className = "section__prescription__content";
    h3.textContent = arg.titles;
    div.appendChild(h3);
    div.appendChild(div2);
    div2.appendChild(ul);

    arg.product.map((article) => {
        let li = document.createElement("li");
        li.textContent = article;
        ul.appendChild(li);
    });
    fragment.appendChild(div);
    sectionPrescription.appendChild(fragment);

});


