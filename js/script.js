
//Arrow_Down scroll

const scrollDown = document.querySelector('.nav__down');

scrollDown.addEventListener('click', () => {
  fullpage_api.moveSectionDown();
});


//Burger-menu

$('.menu-btn').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
})

function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu_button', '.burger-menu_lines');
	let links = menu.find('.burger-menu_link');
	let overlay = menu.find('.burger-menu_overlay');
	
	button.on('click', (e) => {
	  e.preventDefault();
	  toggleMenu();
	});
	
	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());
	
	function toggleMenu(){
	  menu.toggleClass('burger-menu__active');
	  
	  if (menu.hasClass('burger-menu__active')) {
		$('body').css('overlow', 'hidden');
	  } else {
		$('body').css('overlow', 'visible');
	  }
	}
  }
  
  burgerMenu('.burger-menu');

//Snow Falling

// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// Variables
const attributes = {
  particleCount: 400,   // Change amount of snowflakes
  particleSize: 3,      // Max size of a snowflake
  fallingSpeed: 1,      // Intensity of the snowfall horizontal
  colors: ['#ccc', '#eee', '#fff', '#ddd'] // Array of usable colors
}

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}


// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
    init()
})

// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// Objects
function Particle(x, y, radius, color, radians) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = radians;
    this.velocity = 0.005;

    this.update = () => {
        // Move these points over time
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians) * 400 ;
        this.y = y + Math.tan(this.radians) * 600 ;

        this.draw();
    }

    this.draw = () => {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()

        c.closePath()
    }
}

// Implementation
let particles;
function init() {
    particles = [];

    for (let i = 0; i < attributes.particleCount; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            randomIntFromRange(0.5, attributes.particleSize),
            randomColor(attributes.colors),
            Math.random() * 80
          )
        );
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(particle => {
     particle.update();
    });
}

init()
animate()



$(document).ready(function(){
  //FullPage
    new fullpage('#fullpage', {
      autoScrolling: true,
    });

  //slider
    $('.single-item').slick({
      infinite: true,
      arrows: false,
      dots: true,
      dotsClass: 'dots-style',
    });

  // custom select

  var controller = new ScrollMagic.Controller();
  $(function() {
    var scene = new ScrollMagic.Scene({
      triggerElement: "#pin1",
      triggerHook: 0,
      duration: '30%',
    })
    .setPin("#pin1")
      .addTo(controller);
  });

  $('select').niceSelect();

  if (window.innerWidth > 992) {
    setTimeout(() => cloud.style.display = "block", 2000);
  } else {
    cloud.style.display = "none"
  }
  
});


const cloud = document.querySelector('.cloud')
window.addEventListener('resize', () => {
  const width = window.innerWidth;

  if (window.innerWidth >= 1200) {
    setTimeout(() => cloud.style.display = "block", 2000);
  } 
  // else if (window.innerWidth < 1200) {
  //   cloud.style.display = "none"
  // }
});
















