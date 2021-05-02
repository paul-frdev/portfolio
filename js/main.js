const data = {
  "first_name": "Pavel",
  "last_name": "Zadyrko",
  "job_title": "FRONTEND DEVELOPMENT",
  "photo": "images/IMG_0459.jpeg",
  "phone": "+3-8063-659-66-08",
  "email": "paulivanovych@gmail.com",
  "telegram": "telegram",
  "linkedin": "linkedin",
  "address": "Ukraine, Kiev",
  "skills": [
    "Frontend Development",
    "html-5/css3",
    "sass/scss",
    "JavaScript/jquery",
    "Figma/Adobe-Photoshop",
    "Bootstrap",
    "Bootstrap",
    "Fluent in English",
  ],
  "education": [
    ["2008-2013", "Interregional Academy of Personnel Management international Relations ( European Counties )"],
  ],
  "achievements": [
    "several certificates from different courses javascript, html5, css, scss and so on",
  ],
  "profile": "Hi, there. I'm 33 years old, and I'm self-taught frontend developer, last year I was learning basic skills frontend developer. I passed several coursers and learned necessary basic knowledge related for frontend development. Some of my works are on service GitHub and there I have several public repositories with my works(you can see via link https://github.com/paul-frdev During my work I use such technologies as gulp, sass, SCSS, jQuery, bootstrap, BEM and partly JavaScript (I'm still learning it). The next step I would like to learn it will be popular framework (vue.js or react.js) I always read books and blogs for programming skills that I would solve different tasks. Now I'm reading and learning the book of JavaScript (the author of learn.javascript.ru), also I'm passing the course of JavaScript and every day I solve the tasks that to receive the practice. I strictly understand that I want and hope to find the company that to help my to grow faster and to become a good specialist in programming language. I'm really want to begin work in our company and if you are looking for trainee or junior candidate don't hesitate and write me."
};

const experience = [
  {
      "company": "COMPANY NAME 3",
      "city": "Tayler",
      "from": "2016",
      "to": 'Present',
      "position": "your position",
      "description": "Replace with your key responsibilities, accomplishments and skills that may relevant to the position you are applying for Include the keywords from the listing to capture the employer’s attention and to match applicant tracking system requirements Transform your responsibilities into quantifiable achievements by brainstorming for any numbers relevant to your key duties"
  },
  {
      "company": "COMPANY NAME",
      "city": "NEW YORK",
      "from": "2016",
      "to": 'Present',
      "position": "your position",
      "description": "Replace with your key responsibilities, accomplishments and skills that may relevant to the position you are applying for Include the keywords from the listing to capture the employer’s attention and to match applicant tracking system requirements Transform your responsibilities into quantifiable achievements by brainstorming for any numbers relevant to your key duties"
  },
  {
      "company": "COMPANY NAME 2",
      "city": "London",
      "from": "2013",
      "to": '2014',
      "position": "your position",
      "description": "Replace with your key responsibilities, accomplishments and skills that may relevant to the position you are applying for Include the keywords from the listing to capture the employer’s attention and to match applicant tracking system requirements Transform your responsibilities into quantifiable achievements by brainstorming for any numbers relevant to your key duties"
  }
]

document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;
/**
 * section data
 */
let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    expirienceData += ` <h4 class="company-name mb-2">${item.company} - ${item.city}, <i>${item.from} - ${item.to}</i></h4>`;
    expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;

// /**
//  * contact data
//  */

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}">${data.email}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="callto:${data.skype}">${data.telegram}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}">${data.linkedin}</a></li>`
document.querySelector('.address').innerHTML = `<p>${data.address}</p>`;
document.querySelector('#my-photo').src = data.photo;

// /**
//  * skills
//  */

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

// /**
//  * education
//  */

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

// /**
//  * Achievements
//  */

let achievementsData = '';
data.achievements.forEach(item => {
    achievementsData += `<li>${item},</li>`;
});
document.querySelector('.achievements-list').innerHTML = achievementsData;