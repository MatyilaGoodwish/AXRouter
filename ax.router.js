/***
 * @Name AxRouter
 * @Description Uses Location Object in the Browser window bound to events 
 * @Implements Router using fetch to get HTML templates to render page views via AJAX
 * @Version 0.0.1
 * @Author Goodwish Matyila
 */

/**
 * @description listens to the hashchange event then makes an update to the view.
 * @params window, document
 */
const browserDocumentObject = document;
const browserWindowObject = window;
const urlLocation = new function () {
     this.url = location,
          this.getTemplate = async function (templateNameWithFullPath, elementRefCssSelector) {
               let acquiredTemplate = await fetch(templateNameWithFullPath);
               let templateData = await acquiredTemplate.text();
               return templateData;
          }
}


/* Attach Event */
browserWindowObject.addEventListener('hashchange', routesConfig.bind(urlLocation));

//set initial location path
location.replace("#/");

 
function routesConfig() {

     function registerRoute(requestUrl, filePath,  container){
          if (hash.match(`#/${requestUrl}`)) {
               this.getTemplate(filePath)
                    .then(data => document.querySelector(container).innerHTML = data)
          }else{
               document.querySelector(container).innerHTML = "404 not found";
          }
     }

     /**
      * @params takes the full path of the template and filename
      */
     let {
          hash
     } = this.url;

     /* Write your routes here using conditionals  */
     if (hash.match("#/social-media-marketing")) {
          this.getTemplate("views/social-imc.html")
               .then(data => document.querySelector("#main").innerHTML = data)
     }
     if (hash.match("#/privacy")) {
          this.getTemplate("views/privacy.html")
               .then(data => document.querySelector("#main").innerHTML = data)
     }
     if (hash.match("#/disclaimer")) {
          this.getTemplate("views/disclaimer.html")
               .then(data => document.querySelector("#main").innerHTML = data)
     }
     if (hash.match("#/terms")) {
          this.getTemplate("views/terms.html")
               .then(data => document.querySelector("#main").innerHTML = data)
     }
     if (hash.match("#/process")) {
          this.getTemplate("views/process.html")
               .then(data => document.querySelector("#main").innerHTML = data)
     }
     if (hash.match("#/contact")) {
          this.getTemplate("views/contact.html")
               .then(data => document.querySelector("#main").innerHTML = data)
     }
     if (hash.match("#/")) {
          this.getTemplate("views/home.html")
               .then(data => document.querySelector("#main").innerHTML = data)
     }
     if (hash.match("#/services")) {
          this.getTemplate("views/services.html")
               .then(data => document.querySelector("#main").innerHTML = data)
     }
     if (hash.match("#/pricing")) {
          this.getTemplate("views/pricing.html")
               .then(data => document.querySelector("#main").innerHTML = data)
     }
     
}
