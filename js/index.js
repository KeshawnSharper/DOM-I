const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let cta_img = document.getElementById("cta-img");
cta_img.setAttribute('src', siteContent["cta"]["img-src"])
let middle_img = document.getElementById("middle-img");
middle_img.setAttribute('src', siteContent["content"]["middle-img-src"])

let a = document.querySelectorAll('nav a')
for ( let i = 0; i < a.length - 1; i++){
   a[i].textContent = Object.values(siteContent.nav)[i]
}


let shop = document.createElement('a')
shop.textContent = "Shop"
let nav = document.querySelector('nav')
let blog = document.createElement('a')
blog.textContent = "Blog"
nav.appendChild(shop)
nav.prepend(blog)


let cta_Text = document.querySelector('.cta-text').children
for( let q = 0; q < cta_Text.length; q++){
  cta_Text[q].textContent = Object.values(siteContent.cta)[q]
}


let main_h4 = document.querySelectorAll(".top-content h4")
let main_p = document.querySelectorAll(".top-content p")
let q = 0 
let l = 1
for (let p = 0 ; p < main_h4.length;p++){
  main_h4[p].textContent = Object.values(siteContent.content)[q]
q+=2
}
for (let b = 0 ; b < main_p.length;b++){
  main_p[b].textContent = Object.values(siteContent.content)[l]
l+=2
}
let bottom_p = document.querySelectorAll(".bottom-content p")
let bottom_h4 = document.querySelectorAll(".bottom-content h4")
let w = 5
let f = 6
for (let g = 0; g < bottom_h4.length; g++){
  bottom_h4[g].textContent = Object.values(siteContent.content)[w]
w+=2
}
for (let c = 0; c < bottom_p.length; c++){
  bottom_p[c].textContent = Object.values(siteContent.content)[f]
  f+=2
}


let contact_h4 = document.querySelector('.contact h4')
contact_h4.textContent = Object.values(siteContent.contact)[0]
let contact_children = document.querySelector('.contact').children
for (let t = 1; t < contact_children.length;t++)
{contact_children[t].textContent = Object.values(siteContent.contact)[t]}
let footer = document.querySelector('footer p').textContent = Object.values(siteContent.footer)[0]




