/*******
 *  Document Ready
 *******/
const logo = document.querySelector('#welcome-section h1');
const menu = document.querySelector('#menu');
const submenu = document.querySelector('#submenu');
// On Document Ready
window.addEventListener('DOMContentLoaded', () => {

    // Expand submenu on menu click
    menu.onclick = () => {
        if (submenu.style.top != '50px' ? submenu.style.top = '50px' : submenu.style.top = '0');
    }
    submenu.onclick = () => {
        submenu.style.top = '0';
    }

    // Animate logo
    setTimeout(() => {
        logo.style.color = '#fff';
    }, 2000);
});



/*******
 *  Skills
 *******/
const skillsDiv = document.querySelector('#skills-list');
const skills = [['JavaScript', 3], ['HTML', 3], ['CSS', 3], ['Sass', 2], ['Node', 2], ['Express', 2], ['React', 1], ['MongoDB', 1], ['Git', 1], ['Figma', 2]];
const fullStar = '&#9733;';
const emptyStar = '&#9734;'

// Add Skills
let ul = document.createElement('ul');
ul.className = 'skill-list';
skills.map(skill => {

    // Create stars
    let stars = '';
    num = 1 ;
   for (let i = 1; i < 4; i++) {
       if (skill[1] >= i ? stars += fullStar: stars += emptyStar);
   }

    // Create Element
    let li = document.createElement('li');
    li.className = 'skill-item';
    li.innerHTML = `${skill[0]} ${stars}`;
    ul.append(li)
});
skillsDiv.append(ul);



/*******
 *  Form Submit
 *******/
const form = document.querySelector('form');
const submit = document.querySelector('#messageIsSent');
form.addEventListener('submit', () => {submit.style.display = 'block';});



/*******
 *  ScrollTo Adjustment
 *******/
const navLink = document.querySelectorAll('.nav-link')
// Adjust Height of scrollTo Element
navLink.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        let elementTo = event.target.hash;
        let element = document.querySelector(`${elementTo}`);
        let bodyRect = document.body.getBoundingClientRect();
        let elemRect = element.getBoundingClientRect();
        let offset = elemRect.top - bodyRect.top;
        window.scrollTo(0, offset - 90)
    })
})


/*******
 *  ScrollToTop Animation
 *******/
const scrollToTop = document.querySelector('#scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.innerWidth > 1000) {
        if (window.scrollY > window.innerHeight ? scrollToTop.style.right = "30px" : scrollToTop.style.right = "-50px");
    }
    else {
        scrollToTop.style.right = "-50px";
    }
})

/*******
 *  Certificates
 *******/
const certs = {
    baseDir: 'http://seanmurphy.eu/images/certificates/',
    certificates: [
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'Responsive Web Design',
            image: 'Responsive_Web_Design.png',
            issued: 'Issued June 25, 2018',
            link: '#'
        },
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'APIs and Microservices',
            image: 'APIs_and_Microservices.png',
            issued: 'Issued June 14, 2018',
            link: '#'
        },
        {
            educator: 'Udacity',
            logo: 'udacity.png',
            name: 'Mobile Web Specialist Nanodegree',
            image: 'Mobile_Web_Specialist.png',
            issued: 'Issued June 11, 2018',
            link: '#'
        },
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'Algorithms and Data Structures',
            image: 'Algorithms_and_Data_Structures.png',
            issued: 'Issued May 31, 2018',
            link: '#'
        },
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'Legacy Data Visualization Program',
            image: 'Legacy_Data_Visualization.png',
            issued: 'Issued March 11, 2018',
            link: '#'
        },
        {
            educator: 'FreeCodeCamp',
            logo: 'freecodecamp.png',
            name: 'Legacy Front End Development Program',
            image: 'Legacy_Front_End_Development.png',
            issued: 'Issued July 13, 2017',
            link: '#'
        },
        {
            educator: 'Adobe',
            logo: 'adobe.png',
            name: 'Adobe Certified Associate in Visual Communication Using Adobe Photoshop',
            image: 'Photoshop_ACA.png',
            issued: 'Issued June 16, 2016',
            link: '#'
        }
    ]
};



const certicates = document.querySelector('#certicates');
const numberOfCerts = document.querySelector('#numberOfCerts').innerText = certs.certificates.length;
certs.certificates.map(cert => {

    // Create Divs
    let div = document.createElement('div');
    let certDiv1 = document.createElement('div');
    certDiv1.id = "certDiv1";
    let certDiv2 = document.createElement('div');
    certDiv2.id = "certDiv2";

    // HR's
    let hr = document.createElement('hr');
    hr.className = 'hr-certificates';
    div.append(hr);

    // Logo
    let logo = document.createElement('img');
    logo.src = certs.baseDir+cert.logo;
    logo.alt = `${cert.educator} logo`;
    certDiv1.append(logo);

    // Certifiicate Image
    let image = document.createElement('img');
    image.src = certs.baseDir+cert.image;
    image.alt = `${cert.name} certicate`;
    image.className = 'cert-image';
    certDiv1.append(image);

    // Certificate Name
    let name = document.createElement('h4');
    name.innerHTML = cert.name;
    certDiv2.append(name);

    // Issued Date
    let issued = document.createElement('p');
    issued.innerHTML = cert.issued; 
    issued.className = 'cert-issued';
    certDiv2.append(issued);

    // Description
    let educator = document.createElement('p');
    educator.innerHTML =  cert.educator;
    educator.className = 'cert-educator';
    certDiv2.append(educator);


    // Certificate Link
    let link = document.createElement('a');
    link.innerHTML = 'Confirm Certificate';
    link.href = cert.link;
    link.target = '_blank';
    link.className = 'cert-confirm';
    certDiv2.append(link);


    // Append
    div.append(certDiv1);
    div.append(certDiv2);
    certificates.append(div);
})

// Init
const projectsList = document.querySelector('#projects-list');

/*****
*  Projects Object
 *****/
const projects = {
    Featured: [
        {
            name: 'Build a JS & CSS Photo Editor',
            image: '#',
            link: '#',
            'technologies': ['Javascript', 'CSS', 'HTML']
        },
        {
            name: 'Build the Game "Breakout" ',
            image: '#',
            link: '#',
            'technologies': ['Javascript', 'CSS', 'HTML']
        }, 
        {
            name: 'Visualize Global Data with a Heatmap',
            image: '#',
            link: '#',
            'technologies': ['D3', 'JSON']
        },
        {
            name: 'Build a Recipe Box',
            image: '#',
            link: '#',
            'technologies': ['React', 'Node', 'Local Storage']
        },
        {
            name: 'Build a Weather App',
            image: '#',
            link: '#',
            'technologies': ['Javascript', 'JSON', 'Web API']
        },
        {
            name: 'Image Search Abstraction Layer',
            image: '#',
            link: '#',
            'technologies': ['Node', 'Express', 'MongoDB', 'Web API']
        }
    ],
    ResponsiveWebDesign: [
        {
            name: 'Build a Product Landing Page',
            image: '#',
            link: '#',
            'technologies': ['Javascript', 'CSS', 'HTML']
        },
        {
            name: 'Build a Product Landing Page',
            image: '#',
            link: '#',
            'technologies': ['Javascript', 'CSS', 'HTML']
        },
        {
            name: 'Build a Technical Documentation Page',
            image: '#',
            link: '#',
            'technologies': ['Javascript', 'CSS', 'HTML']
        },
        {
            name: 'Build a Tribute Page',
            image: '#',
            link: '#',
            'technologies': ['Javascript', 'CSS', 'HTML']
        }
    ],
    FrontEndLibraries: [
        {
            name: 'Build a Random Quote Machine',
            image: '#',
            link: '#',
            'technologies': ['Javascript', 'JSON', 'Web API']
        },
        {
            name: 'Build a Markdown Previewer',
            image: '#',
            link: '#',
            'technologies': ['React', 'Markdown']
        },
        {
            name: 'Build a JavaScript Calculator',
            image: '#',
            link: '#',
            'technologies': ['Javascript']
        },
        {
            name: 'Build a Pomodoro Clock',
            image: '#',
            link: '#',
            'technologies': ['Javascript']
        },
        {
            name: 'Build a Weather App',
            image: '#',
            link: '#',
            'technologies': ['Javascript', 'JSON', 'Web API']
        },
        {
            name: 'Build a Simon Game',
            image: '#',
            link: '#',
            'technologies': ['Javascript']
        },
        {
            name: 'Build a Wikipedia Viewer',
            image: '#',
            link: '#',
            'technologies': ['Javascript', 'JSON', 'Web API']
        }
    ],
    DataVisualization: [
        {
            name: 'Map Data with a Bar Chart',
            image: '#',
            link: '#',
            'technologies': ['D3', 'JSON']
        },
        {
            name: 'National Contiguity - Force Directed Graph',
            image: '#',
            link: '#',
            'technologies': ['D3', 'JSON']
        },
        {
            name: 'Visualize Global Data with a Heatmap',
            image: '#',
            link: '#',
            'technologies': ['D3', 'JSON']
        },
        {
            name: 'Map Meteroite Data Across the Globe',
            image: '#',
            link: '#',
            'technologies': ['D3', 'JSON']
        },
        {
            name: 'Visualize Data with a Scatterpot Graph',
            image: '#',
            link: '#',
            'technologies': ['D3', 'JSON']
        }
    ],
    ApisAndMicroservices: [
        {
            name: 'Build a Timestamp Microservice',
            image: '#',
            link: '#',
            'technologies': ['Node', 'Express']
        },
        {
            name: 'Build a Request Header Parser Microservice',
            image: '#',
            link: '#',
            'technologies': ['Node', 'Express']
        },
        {
            name: 'Build a URL Shortener Microservice',
            image: '#',
            link: '#',
            'technologies': ['Node', 'Express', 'MongoDB', 'url-valid']
        },
        {
            name: 'Image Search Abstraction Layer',
            image: '#',
            link: '#',
            'technologies': ['Node', 'Express', 'MongoDB', 'Web API']
        },
        {
            name: 'File Metadata Microservice',
            image: '#',
            link: '#',
            'technologies': ['Node', 'Express', 'MongoDB', 'multer']
        },
        {
            name: 'Build an Exercise Tracker',
            image: '#',
            link: '#',
            'technologies': ['Node', 'Express', 'MongoDB', 'Mongoose']
        }
    ],
    InformationSecurityAndQualityAssurance: [],
    ReactJS: [
        {
            name: 'Build a Github Style Markdown Previewer',
            image: '#',
            link: '#',
            'technologies': ['React', 'Node', 'Markdown']
        },
        {
            name: 'Build a Camper Leaderboard',
            image: '#',
            link: '#',
            'technologies': ['React', 'Node', 'AJAX']
        },
        {
            name: 'Build Conway\'s Game of Life',
            image: '#',
            link: '#',
            'technologies': ['React', 'Node']
        },
        {
            name: 'Build a Recipe Box',
            image: '#',
            link: '#',
            'technologies': ['React', 'Node', 'Local Storage']
        },
        {
            name: 'Build a Rougelike Dungeon Crawler Game',
            image: '#',
            link: '#',
            'technologies': ['React', 'Node', 'Phaser']
        }
    ]
}

 

 /*****
  *  Click Event Listener to Nav
  *****/
const projectsNav = document.querySelectorAll('.projects-nav li');
projectsNav.forEach(nav => {
    nav.onclick = changeActiveProjects;
});



/*****
 *  Change Project Type
  *****/
function changeActiveProjects(nav) {

    // Change 'Active' State
    projectsNav.forEach(item => {
        if(item.id == 'active') {
            item.removeAttribute('id')
        }
    });
    nav.target.id = 'active';
    changeProjects(nav.target.className);
}



/*****
 *  Change Projects
  *****/
 function changeProjects(item) {
    const nav = projects[item];

    // If project list is empty
    if (nav.length === 0) return noprojects();

    // Remove Child Elements
    while (projectsList.hasChildNodes()) {
        projectsList.removeChild(projectsList.lastChild);
    }

    nav.map(project => {

        // Create link to contain Div
        let link = document.createElement('a');
        link.href = project.link;
        link.target = '_blank';
        link.className =  'project-link';

        // Main Containing Div
        let div = document.createElement('div');
        div.className = 'project-tile';



        // Div 1
        let div1 = document.createElement('div');
        div1.className = 'project-div1';
        
        // Project Image
        let image = document.createElement('img');
        image.src = project.image;
        div1.append(image);

        // Project Gradient
        let gradient = document.createElement('div');
        gradient.className = "project-gradient";
        div1.append(gradient);



        // Div 2
        let div2 = document.createElement('div');
        div2.className = 'project-div2';

        // Project Name
        let name = document.createElement('h4');
        name.innerHTML = project.name;
        div2.appendChild(name);


        //Projet Technologies Used
        let technologies = document.createElement('ul');
        technologies.className = 'project-technologies';
        for (let i in project.technologies) {
            let li = document.createElement('li');
            li.innerHTML = project.technologies[i];
            technologies.append(li);
        }
        div2.append(technologies);

        // Animations
        div.onmouseenter = () => {
            gradient.style.background = 'rgba(0, 0, 0, 0.0)';
            image.style.transform = 'scale(1.6)';
        }
        div.onmouseleave = () => {
            image.style.transform = 'scale(1.2)';
            gradient.style.background = 'rgba(0, 0, 0, 0.225)';
        }

        // Append to Div
        div.append(div1);
        div.append(div2);
        link.append(div);
        projectsList.append(link);
    })
 }
changeProjects('Featured');




 /*****
 *  Empty Projects List
  *****/
function noprojects() {
    let emptyList = document.createElement('span');

    // Remove Child Elements
    while (projectsList.hasChildNodes()) {
        projectsList.removeChild(projectsList.lastChild);
    }

    // Add empty element
    emptyList.className = 'empty-list';
    emptyList.innerHTML = 'No Projects Yet';
    
    projectsList.appendChild(emptyList);
}

