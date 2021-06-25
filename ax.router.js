/***
 * @Name AXRouter
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
     /**
      * @params takes the full path of the template and filename
      */
     let {
          hash
     } = this.url;

     /* Write your routes here using conditionals  */
     if (hash.match("#/services")) {
          this.getTemplate("views/social-imc.html")
               .then(data => document.querySelector("#content").innerHTML = data)
     }
}
