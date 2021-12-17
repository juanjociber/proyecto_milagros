"use stric"
/**======================================================= 
 * EVENTO MENÚ 
 * ======================================================= */
export const menu = ()=>{
	const $btnMenu = document.querySelector('#btnMenu'),
 		  $nav = document.querySelector('.navegacion'),
		  $sup = document.querySelector('.top-line'),
		  $center = document.querySelector('.middle-line'),
		  $inf = document.querySelector('.bottom-line'),
		  $btnButton = document.querySelector('.button');  

	let contador = 1;

	$btnMenu.onclick = function (e) {
		if (contador == 1) {
			$nav.style='left:0%; transition: all .6s'
			$sup.style='margin: 0 auto; transform: translateY(2px) rotate(-45deg)'
			$center.style='margin: 0; width:0; opacity: 0'
			$inf.style= 'margin: 0 auto; transform: translateY(-2px) rotate(45deg)'
			$btnButton.style ='font-weight:bold; transform:scale(1.2)'
			contador = 0;
		} else {
			contador = 1;
			CerrarMenResponsive()
		};
	};

	window.addEventListener('click',function(e){
		// console.log(e.target.className)
		const $navegacion = e.target.className
		if($navegacion === 'navegacion'){
			contador = 1;
			CerrarMenResponsive()
		} 
	});

	function CerrarMenResponsive(){
		$sup.style = 'margin: 5px auto; transform: translateY(0px) rotate(0deg)';
		$center.style ='margin: 0 auto; width:40%; opacity: 1';
		$inf.style='margin: 5px auto; transform: translateY(0px) rotate(0deg)';
		$btnButton.style ='font-weight:bold; transition:.4s ease';
		$nav.style.left='-100%';
	};
};

/**================================================
 -> CONTROL DE SUB_MENÚ RESPONSIVE
 * ================================================
 */
export const submenu = ()=>{
	const $btnSubmenu = document.querySelector('.submenu-btn'),
		  $submen = document.querySelector('.children'),
		  esDispositivoMovil = ()=> window.innerWidth <= 991;

	$btnSubmenu.addEventListener('click',()=>{
		if(esDispositivoMovil()){
			$submen.classList.toggle('activo')
		}
	});
};

/**==============================================
 * -> LOGOTIPO
 ================================================*/
/*export const logotipo = () =>{
	const $logoContenedor = document.querySelector('.logo'),
    	  $imgLogotipo = document.querySelector('.logo__imagen'),
    	  $cambioLogo = matchMedia('(min-width:992px)')
    	
	const changeSize = mql =>{
		mql.matches
		? $imgLogotipo.setAttribute('src','img/logo1.jpg')
		: $imgLogotipo.setAttribute('src','img/logo6.jpg')
	}
	$cambioLogo.addListener(changeSize)
	changeSize($cambioLogo);
}*/

// /**==============================================
//  * ->EVENTO BANNER
//  ================================================*/



// });

// /**==============================================
//  * LOGO-TECNOLOGÍAS
//  ================================================*/
export const logo = ()=>{
	const $logo = document.querySelectorAll('.box-imagen');
	$logo.forEach(element => {
		console.log(element)
		setInterval(() => {
		element.style="visibility: visible;transition:all 2s; width:100%"
	}, 2000);	
	});
	
	
}

export const cambioColor = ()=>{
	$(".bg-hover").hover(function(){
		// $(this).css("background","var(--bg-azul)");
		$(this).children("h2").css("color","white");
		$(this).children("div").children("p").css("color","white");
	},function(){
		$(this).css("background","white");
		$(this).children("h2").css("color","var(--colorLetra)");
		$(this).children("div").children("p").css("color","var(--colorLetra)");
	})
}


export const slider =()=>{
	let items = ["img/banner1.jpg", "img/banner2.jpg","img/banner3.jpg"]
	let i = 0

	function banner(){
    	$("#slider").attr("src",items[i]);//Ingresando a la etiqueta img
    	i++;
    	if(i>=items.length)
    	i=0;
    	setTimeout(banner,4000);
	}
	banner()
}

// export const SubmenuDesktop=()=>{
// 	const subMenu = document.querySelector('.btn-submenu')
// 	let mqMax991 = window.matchMedia('(min-width:991px)')
	
// 	function mqSubmenu(mqMax991){
//     	if(mqMax991.matches){
//         	subMenu.style.display ='none'
//     	}
//     	else{
//         	subMenu.style.display='block'
//     	}
// 	}
// 	mqSubmenu(mqMax991)
// 	mqMax991.addListener(mqSubmenu)
// }



/*===================================
-> CREANDO TESTIMONIOS:
=====================================*/
export const funcionTestimonio=()=>{

const testimonios=[
    {   imgTestimonio:'img/persona1.jpg' ,
        comentario: `<i class='bx bxs-quote-alt-left comillas'></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae. <i class='bx bxs-quote-alt-right comillas'></i>`,
        nombre: 'Vania H.F.',
        distrito: 'Los Olivos'},
    {   imgTestimonio:'img/persona2.jpg' ,
        comentario: `<i class='bx bxs-quote-alt-left comillas'></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum voluptas est veniam. Neque
                      rem atque dolore ratione amet nam, fugiat, tempora et necessitatibus consequatur odit? Et maiores
                      deserunt illum molestiae. <i class='bx bxs-quote-alt-right comillas'></i>`,
        nombre: 'André H.F.',
        distrito: 'Los Olivos'}
    ]

let testimonioArray = Object.entries(testimonios);

const $containerTestimonio = document.querySelector('.container-sliderTestimonio')
const $sliderDiv = document.createElement('DIV')
const $sliderTestBtnRigth = document.createElement('DIV')
const $sliderTestBtnLeft = document.createElement('DIV')

$sliderTestBtnRigth.classList.add('sliderTestimonio__btn')
$sliderTestBtnRigth.classList.add('sliderTestimonio__btn--rigth')
$sliderTestBtnRigth.id='btnTestimonio-right'
$sliderTestBtnRigth.innerHTML=
`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right"
    width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#bbbbbbe1" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="9 6 15 12 9 18" />
</svg>`
$sliderTestBtnLeft.classList.add('sliderTestimonio__btn')
$sliderTestBtnLeft.classList.add('sliderTestimonio__btn--left')
$sliderTestBtnLeft.id='btnTestimonio-left'
$sliderTestBtnLeft.innerHTML=
` <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44"
    height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#bbbbbbe1" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="15 6 9 12 15 18" />
</svg>`
$sliderDiv.classList.add('sliderTestimonio')
$sliderDiv.id='sliderTestimonio'

$containerTestimonio.appendChild($sliderDiv)
$containerTestimonio.appendChild($sliderTestBtnRigth)
$containerTestimonio.appendChild($sliderTestBtnLeft)

testimonioArray.forEach(function(e){
    // console.log(e[1])
    const $sliderSection = document.createElement('DIV')
    const $imgSlider = document.createElement('IMG')
    const $sliderContenido = document.createElement('DIV')
    const $psliderComentario = document.createElement('P')
    const $psliderNombre = document.createElement('P')
    const $smallDistrito = document.createElement('SMALL')

    $smallDistrito.textContent=e[1].distrito
    $smallDistrito.classList.add('distrito')
    $psliderNombre.textContent=e[1].nombre
    $psliderNombre.classList.add('nombre')
    $psliderComentario.classList.add('comentario')
    $psliderComentario.innerHTML =e[1].comentario
    $sliderSection.classList.add('sliderTestimonio__section')
    $imgSlider.classList.add('sliderTestimonio__img')
    $imgSlider.setAttribute('src',e[1].imgTestimonio)
    $imgSlider.setAttribute('Alt','imagenTestimonio')
    $sliderContenido.classList.add('sliderTestimonio__contenido')
      
    $sliderContenido.appendChild($psliderComentario)
    $sliderContenido.appendChild($psliderNombre)
    $sliderContenido.appendChild($smallDistrito)
    $sliderSection.appendChild($imgSlider)
    $sliderSection.appendChild($sliderContenido)
    $sliderDiv.appendChild($sliderSection)
});

/**======================================
 * -> EVENTO SLIDER TESTIMONIO
 ========================================*/
const $sliderTestimonio = document.querySelector('#sliderTestimonio');
let $sliderSection = document.querySelectorAll('.sliderTestimonio__section');
let $sliderSectionLast = $sliderSection[$sliderSection.length -1];

const $btnLeft = document.querySelector('#btnTestimonio-left');
const $btnRigth = document.querySelector('#btnTestimonio-right');

$sliderTestimonio.insertAdjacentElement('afterbegin',$sliderSectionLast);

function Next(){
    let $sliderSectionFirst = document.querySelectorAll('.sliderTestimonio__section')[0];
    $sliderTestimonio.style.marginLeft = '-200%';
    $sliderTestimonio.style.transition = 'all 0.5s';
    setTimeout(() => {  
        $sliderTestimonio.style.transition = 'none';
        $sliderTestimonio.insertAdjacentElement('beforeend',$sliderSectionFirst);
        $sliderTestimonio.style.marginLeft = '-100%';
    }, 500);
}

$btnRigth.addEventListener('click',function(){
    Next();
})

function Prev(){
    let $sliderSection = document.querySelectorAll('.sliderTestimonio__section');
    let $sliderSectionLast = $sliderSection[$sliderSection.length -1];

    $sliderTestimonio.style.marginLeft = '0';
    $sliderTestimonio.style.transition = 'all 0.5s';
    setTimeout(() => {  
        $sliderTestimonio.style.transition = 'none';
        $sliderTestimonio.insertAdjacentElement('afterbegin',$sliderSectionLast);
        $sliderTestimonio.style.marginLeft = '-100%';
    }, 500);
}

$btnLeft.addEventListener('click',function(){
    Prev();
})
}
/**==============================================
 * FLECHAS
 ================================================*/
export const funcionFlechas=()=>{
	let flechaizq = document.querySelector('#prev')
        let flechader = document.querySelector('#next')

        flechaizq.addEventListener("click",function(e){
            console.log(e)
            let contenedor = document.querySelector(".carousel")
            contenedor.scrollLeft -= 100;
        })
        flechader.addEventListener("click",function(e){
            console.log(e)
            let contenedor = document.querySelector(".carousel")
            contenedor.scrollLeft += 100;
    })
}
  
/**==============================================
 * SLIDERHEADER - RECEPTIVO
 ================================================*/
export const sliderHeader = ()=>{
	const btns = document.querySelectorAll(".nav-btn");
	const slides = document.querySelectorAll(".imagen__slide");
	const contents = document.querySelectorAll(".content");

	var sliderNav = function(manual){
		btns.forEach((btn)=>{
			btn.classList.remove("active");
		})
	
		slides.forEach((slide)=>{
			slide.classList.remove("active");
		})
	
		contents.forEach((content)=>{
			content.classList.remove("active");
		})

		btns[manual].classList.add("active");
		slides[manual].classList.add("active");
		contents[manual].classList.add("active");
	}

	btns.forEach((btn, i) => {
		btn.addEventListener("click",()=>{
			sliderNav(i);
		})
	});
}

/**=======================================================
*              NAVEGACIÓN ESTÁTICA
=========================================================*/
export const observerHeader=()=>{
	document.addEventListener('DOMContentLoaded', function() {
		navegacionFija();
	});

	function navegacionFija() {
		const barra = document.querySelector('#header');
		const observer = new IntersectionObserver( function(entries) {
			if(entries[0].isIntersecting) {
				console.log(barra)
				barra.classList.remove('fijo')
			} else {
				barra.classList.add('fijo')
			}
		});
		// Elemento a observar
		observer.observe(document.querySelector('#imagen'));
	};
}

/**=======================================================
*              MODAL-NAVEGACION
=========================================================*/
export const modalNavegation=()=>{
	//VARIABLES
	const btnCierra = document.querySelector('#btn-cierra');
	const btnAdelanta = document.querySelector('#btn-adelanta');
	const btnRetrocede = document.querySelector('#btn-retrocede');
	const imagenesTarjetas = document.querySelectorAll('#imagenes-tarjetas img');
	const lightbox = document.querySelector('#ligthbox-contenedor');
	const imagenActiva = document.querySelector('#img-activa');

	let indiceImagen = 0;
	//ABRIENDO LIGHTBOX
	const abreLightbox = (event) =>{
		imagenActiva.src = event.target.src;
		lightbox.style.display= 'flex';
		indiceImagen = Array.from(imagenesTarjetas).indexOf(event.target);
	};
	imagenesTarjetas.forEach((imagen)=>{
		imagen.addEventListener('click',abreLightbox);
	});

	//BÓTON CERRAR
	btnCierra.addEventListener('click',()=>{
		lightbox.style.display= 'none';
	});

	//BOTÓN SIGUIENTE
	const adelantaImagen = () =>{
		if(indiceImagen === imagenesTarjetas.length -1){
			indiceImagen = -1;
		}
		imagenActiva.src = imagenesTarjetas[indiceImagen + 1].src
		indiceImagen++;
	};
	btnAdelanta.addEventListener('click',adelantaImagen);

	//BOTÓN ANTERIOR
	const retrocedeImagen = () =>{
		if(indiceImagen === 0){
			indiceImagen = imagenesTarjetas.length;
		}
		imagenActiva.src = imagenesTarjetas[indiceImagen - 1].src;
		indiceImagen--;
	};
	btnRetrocede.addEventListener('click',retrocedeImagen);
}

/**=======================================================
*              GENERADOR CONTEO
=========================================================*/
export const generadorConteo = ()=>{
	function contar() {
		let contador = document.getElementById('txt'); 
		if(contador.innerHTML < 20)
		contador.innerHTML = cuenta++;
		setTimeout(contar, 100);
	}
	var cuenta = 0;
	contar();

	function contara() {
		let conta = document.getElementById('txt-clientes'); 
		if(conta.innerHTML < 250)
		conta.innerHTML = acumulador++;
		setTimeout(contara, 80);
	}
	var acumulador = 0;
	contara();
}

/**=======================================================
*              PROGRESSBAR
=========================================================*/
export const progressMaster=()=>{
	function progress(){
		var el = document.getElementById('progress');
		var width = 1;

		var id = setInterval(frame,60);
		function frame(){
			if(width>=79){
				clearInterval(id);
			}else{
				width++;
				el.style.width = width + '%';
			}
		}
	}
	progress()
}