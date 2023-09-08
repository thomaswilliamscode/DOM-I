const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

/* 

1. Getters for all elements i will need - 
  1. header 
  2. logo 
  3. Section cta
  4. class cta-text
  5. class cta-text h1
  6. cta-text button 
  7. code snippet img
  8. class top-content
  9. img of code snippet across whole screen
  10. class bottom-content
  11. section class contact

*/
let header = document.querySelector('header')
let nav = header.querySelector('nav')
let navLinks = nav.querySelectorAll('a')
let logo = document.querySelector('#logo-img');

let cta = document.querySelector('.cta');
let ctaText = cta.querySelector('.cta-text');
let ctaH1 = ctaText.querySelector('h1');
let ctaButton = ctaText.querySelector('button');
let img1 = document.querySelector('#cta-img');

let mainContent = document.querySelector('.main-content');
let topContent = mainContent.querySelector('.top-content');
let middleImg = document.querySelector('#middle-img');
let bottomContent = mainContent.querySelector('.bottom-content');

let contactInfo = document.querySelector('.contact');

// saving nav Link Text
let idealNavLinks = ['Services', 'Product', 'Vision', 'Features', 'About','Contact']

// storing the img filepaths in variables
let newLogo = 'http://localhost:9000/img/logo.png'
let img1Logo = "http://localhost:9000/img/cta.png"
let middleLogo = "http://localhost:9000/img/accent.png"

// Setting up Nav to use nav Link text
for (let i = 0; i < navLinks.length; i++) {
  let currentNav = navLinks[i]
  let currentIdeal = idealNavLinks[i]
  currentNav.textContent = currentIdeal;
}

// setting nav links to add class italics
for (let i = 0; i < navLinks.length; i++) {
  let link = navLinks[i]
  link.classList.add('italic') 
}

// setting logo
logo.src = newLogo;

// setting up cta h1 and cta Button
ctaH1.textContent = 'DOM Is Awesome'
ctaButton.textContent = 'Get Started'

// setting up img1 
img1.src = img1Logo

// storing information for mainContent text 
let mainContentObject = {
	'features-h4': 'Features',
	'features-content':
		'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	'about-h4': 'About',
	'about-content':
		'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	'services-h4': 'Services',
	'services-content':
		'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	'product-h4': 'Product',
	'product-content':
		'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	'vision-h4': 'Vision',
	'vision-content':
		'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
};

// setting up variables to easily refrence the main content 
let topContentArray = [
	[ mainContentObject['features-h4'], mainContentObject['features-content'] ],
  [ mainContentObject['about-h4'], mainContentObject['about-content'] ],
];

// getting the text-content classes inside of top content 
let topContentDiv = topContent.querySelectorAll('.text-content')

// setting top content 
for (let i = 0; i < topContentDiv.length; i++) {
  let currentDiv = topContentDiv[i]
  let currentH4 = topContentDiv[i].querySelector('h4')
  let currentP = topContentDiv[i].querySelector('p');

  for (let j = 0; j < topContentArray[i].length; j++) {
    let h4Content = topContentArray[i][0]
    let pContent = topContentArray[i][1];

    currentH4.textContent = h4Content
    currentP.textContent = pContent
  }

}

// linking middle img
middleImg.src = middleLogo


// storing Bottom Content 
let bottomContentArray = [
	[ mainContentObject['services-h4'], mainContentObject['services-content'] ],
	[ mainContentObject['product-h4'], mainContentObject['product-content'] ],
	[ mainContentObject['vision-h4'], mainContentObject['vision-content'] ],
];

// get Bottom content divs
let bottomContentDiv = bottomContent.querySelectorAll('.text-content');

// setting bottom content 
for (let i = 0; i < bottomContentDiv.length; i++) {
	let currentDiv = bottomContentDiv[i];
	let currentH4 = bottomContentDiv[i].querySelector('h4');
	let currentP = bottomContentDiv[i].querySelector('p');

	for (let j = 0; j < bottomContentArray[i].length; j++) {
		let h4Content = bottomContentArray[i][0];
		let pContent = bottomContentArray[i][1];

		currentH4.textContent = h4Content;
		currentP.textContent = pContent;
	}
}



// getting contact info info 
let contactH4 = contactInfo.querySelector('h4')
let contactPs = contactInfo.querySelectorAll('p');


let contact = siteContent['contact']
let contactH4Info = contact['contact-h4'];
let contactAddress = contact['address']
let contactPhone = contact['phone']
let contactEmail = contact['email']

// storing contact info into an array
let contactArray = [contactAddress, contactPhone, contactEmail];

// setting the contact h4 
contactH4.textContent = contactH4Info

// setting the rest of the contact section 
for ( let i = 0; i < contactPs.length; i++ ) {
  let currentP = contactPs[ i ];
  let currentArray = contactArray[i]
  currentP.textContent = currentArray
}

// get footer
let footer = document.querySelector('footer')
let footerLink = footer.querySelector('a')
let footerContent = siteContent.footer.copyright

// setting footer
footerLink.textContent = footerContent
footerLink.classList.add('bold')
