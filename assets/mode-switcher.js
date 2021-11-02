let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');

var iLight =	'<span class="fa-stack fa-lg">'+
				'<i class="fas fa-circle fa-stack-2x"></i>'+
				'<i class="fas fa-sun fa-stack-1x fa-inverse"></i>'+
				'</span>';

var iDark =		'<span class="fa-stack fa-lg">'+
				'<i class="fas fa-circle fa-stack-2x"></i>'+
				'<i class="fas fa-moon fa-stack-1x fa-inverse"></i>'+
				'</span>';


if (systemInitiatedDark.matches) {
	document.getElementById("theme-toggle").innerHTML = iLight;
} else {
	document.getElementById("theme-toggle").innerHTML = iDark;
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
   	document.getElementById("theme-toggle").innerHTML = iLight;
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("theme-toggle").innerHTML = iDark;
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addEventListener('change', prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = iDark;
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = iLight;
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = iDark;
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = iLight;
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	document.getElementById("theme-toggle").innerHTML = iLight;
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	document.getElementById("theme-toggle").innerHTML = iDark;
}