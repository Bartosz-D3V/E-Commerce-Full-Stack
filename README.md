# SPA & RESTful E-commerce
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/Bartosz-D3V/E-commerce-full-stack-website/blob/master/LICENSE) [![license](https://img.shields.io/badge/New%20contributors-Welcome!-brightgreen.svg)]() [![built with gulp](https://img.shields.io/badge/gulp-built_project-eb4a4b.svg?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAAYAAAAOCAMAAAA7QZ0XAAAABlBMVEUAAAD%2F%2F%2F%2Bl2Z%2FdAAAAAXRSTlMAQObYZgAAABdJREFUeAFjAAFGRjSSEQzwUgwQkjAFAAtaAD0Ls2nMAAAAAElFTkSuQmCC)](http://gulpjs.com/)


Table of contents
- Introduction
- Rationale and justification for website
- Security consideration
- List of technologies
- Backend
- Frontend
- Installation
- Conclusions
- License

## Introduction
Most of the online shops you can find on the web use standard server-side rendered views which not only makes it impossible to use the webapp offline, but what is more important, it makes the page slower, bigger and lowers final user experience.
The following project has been created to overcome the above issues.
It exchange all data with backend application using RESTful api which makes it also extremely easy to create additional app for iOS or Android.
It also follows the SPA (Single Page Application) architecture pattern which means that is is not only very easy to add new views, but also  the final user experience is way better due to minimal time loading.

## Rationale and justification for website
My initial idea was to create e-commerce project that would be built using Java EE technologies with Thymeleaf which is typicall technology stack for most of the website with most parts of the website being rendered on the server side and sent back to the user.
Later on I understand that this approach has a lot of boundaries, and although might look easier it makes the application less user friendly.
This is due to long response time, re-loading all pages on views switching.
It also makes it more difficult if in the future appropriate iOS/Android application would be created that will need to consume API of the project.
I decided to create a RESTful API that could accesible for public - except from unsafe actions like removing or adding new products, or performing checkout of the customer's basket.
This not only make the website incredibly fast and user-friendly, but very easy to extend and maintain in the future.

## Security consideration
Application is accessible only from specific internet address and port by using CORS set up in appropriate Java configuration file.
Crucial parts of application are secured using Spring Security - appropriate JSON Token needs to be requested and sent back.
JSON Tokens are encrypted using SALT that are re-generated every time application is restarted.<br>
All passwords are encrypted using BCrypt with set strength of 8. This operation is then repeated 12 times.
BCrypt is one-way encryption function, meaning that once encoded, it is impossible to decode - validation is performed by comparing the cyphertexts.
All operations between server and database are transactional, meaning that in case of unexpected failure application will recover and revert all changes done to database. This has been implemented using Hibernate and Javax.
Frontend application has standard security features including appropriate input types form elements and cleaning the form data after performing AJAX requests.
Also, appropriate HTTP address endpoints are accessible only when appropriate action has taken place – for example localhost:3000/checkout/success will not appear when user will try to open it by manually – it will only appear when PayPal payment will be confirmed.
Payment mechanism is secured by HTTPS protocol and handled by PayPal vendor.
In addition, credit card details are never stored in the database.
To increase security SSL certificate could be bought from approved provider and added to website which would make the front-end application even more secure by using encryption.
Soon, I would like to implement admin dashboard where workers will be able to edit content of the website, once done, JSON Web Token will also contain a role of user so each user of the website will be able to perform only valid actions for specific role. For example, only worker will be able to add new products, but will not be able to make orders – similarly, customer will be able to make orders, but will not be able to edit content of the website.

## List of technologies

### Backend:
* Java 8
* Spring Boot
* Spring MVC
* Spring Security
* Hibernate ORM
* Hibernate Validator
* JSON Web Tokens - Java Implementation
### Frontend:
* JavaScript (ES6)
* HTML5
* CSS3
* Handlebars
* MarionetteJS
* BackboneJS
* jQuery
* BlazeCSS
* Backbone.localstorage
* Backbone.Radio
* SCSS
* NodeJS
* Browserify
* Gulp

## Installation

First create an empty database called e-commerce.
Hibernate will create the whole schema at the bootstrap time.
### Running server side application
```batch
$ ./mvnw install
$ ./mvnw spring-boot:run
```
### Running web application
```batch
$ npm install
$ gulp serve
```
You can now open localhost:3000

## Conclusions
Developing of application is never-ending process - there is always number of features to be implemented, it is not different for this particular project.
There are number of ideas that I would like to implement soon, including admin dashboard panel that would allow not only to edit the content of the page, but also to handle orders.
I truely believe that Single Page Applications backed by RESTful API is the future of the web and more and more application will us these architecture pattern, including large enterprise projects.

## License
[MIT](https://github.com/Bartosz-D3V/E-commerce-full-stack-website/blob/master/LICENSE)

