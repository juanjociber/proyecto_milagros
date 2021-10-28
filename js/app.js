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
    	estado=setTimeout(banner,4000);
	}
	banner()
}

export const SubmenuDesktop=()=>{
	// const icoAngulo = document.querySelector('#icoAngulo')
	const subMenu = document.querySelector('.submen')
	const btnEntrenamiento = document.querySelector('#men--mod')
	let mqMax767 = window.matchMedia('(max-width:767px)')

	conta = 1    

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



