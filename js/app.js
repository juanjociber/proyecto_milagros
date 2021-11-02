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

	$btnMenu.onclick = function () {
		if (contador == 1) {
			$nav.style='left:0%; transition: all .6s'
			$sup.style='margin: 0 auto; transform: translateY(2px) rotate(-45deg)'
			$center.style='margin: 0; width:0; opacity: 0'
			$inf.style= 'margin: 0 auto; transform: translateY(-2px) rotate(45deg)'
			$btnButton.style ='background:#F05454; font-weight:bold'
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
		$btnButton.style ='font-weight:300';
		$nav.style.left='-100%';
	};
};

/**================================================
 -> CONTROL DE SUB_MENÚ RESPONSIVE
 * ================================================
 */
export const submenu = ()=>{
	const $btnSubmenu = document.querySelector('.btn-submenu'),
		  $submen = document.querySelector('.submen'),
		  $icoSubmenu = document.querySelector('#ico-submenu'),
		  esDispositivoMovil = ()=> window.innerWidth <= 991;

	$btnSubmenu.addEventListener('click',()=>{
		if(esDispositivoMovil()){
			$submen.classList.toggle('activo')
			$icoSubmenu.classList.toggle('activo')
		}
	});
};

/**==============================================
 * -> LOGOTIPO
 ================================================*/
export const logotipo = () =>{
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
}

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

export const SubmenuDesktop=()=>{
	// const icoAngulo = document.querySelector('#icoAngulo')
	const subMenu = document.querySelector('.submen')
	const btnEntrenamiento = document.querySelector('#men--mod')
	let mqMax767 = window.matchMedia('(max-width:767px)')
	
	function mqSubmenu(mqMax767){
    	if(mqMax767.matches){
        	subMenu.style.display ='none'
    	}
    	else{
        	subMenu.style.display='block'
    	}
	}
	mqSubmenu(mqMax767)
	mqMax767.addListener(mqSubmenu)
}



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

/**======================================
 * -> FORMULARIO
 ========================================*/
/**==============================================
 * VALIDANDO Y LIMPIANDO FORMULARIO
 ================================================*/
 export const funcionValidarFormulario=()=>{

	function validarFormulario(){
		let nomForm = document.forms["formulario"]["nombre"].value;
			if ( nomForm == null || nomForm == "" || nomForm.length == 0  || /^\s+$/.test(nomForm) || !isNaN(nomForm) ) {
			const $nombre = document.querySelector('#idMNombre')
			$nombre.classList.add('msj-formulario')
			mostrarMensaje($nombre)
			$nombre.innerHTML='El campo es obligatorio y solo texto'
			removeMensaje($nombre)
			document.querySelector("#nombre").focus();
			return false;
		}
	
		let apeForm = document.forms["formulario"]["apellido"].value;
			if ( apeForm == null || apeForm == "" || apeForm.length == 0  || /^\s+$/.test(apeForm) || !isNaN(apeForm) ) {
			const $apellido = document.querySelector('#idMApellido')
			$apellido.classList.add('msj-formulario')
			mostrarMensaje($apellido)
			$apellido.innerHTML='El campo es obligatorio y solo texto'
			removeMensaje($apellido)
			document.querySelector("#apellido").focus();
			return false;
		}
	
		let emailForm = document.forms["formulario"]["email"].value;
			if( emailForm== null || emailForm == "" || emailForm.length == 0 || (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(emailForm)) || !isNaN(emailForm)) {
			const $mail = document.querySelector('#idMEmail')
			$mail.classList.add('msj-formulario')
			mostrarMensaje($mail)
			$mail.innerHTML='El campo es obligatorio y formato establecido'
			removeMensaje($mail)
			document.querySelector("#email").focus();
			return false;
		}
	
		let celularForm = document.forms["formulario"]["celular"].value;
			if( isNaN(celularForm) || celularForm == null || celularForm == "" || celularForm.length == 0 || /^\s+$/.test(celularForm)){
			const $celular = document.querySelector('#idMCelular')
			$celular.classList.add('msj-formulario')
			mostrarMensaje($celular)
			$celular.innerHTML='El campo es obligatorio y solo número'
			removeMensaje($celular)
			document.querySelector("#celular").focus();
			return false;
		}
	}
	validarFormulario();
 }
 

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
        

