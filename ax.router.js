/***
 * @Name AxRouter
 * @Description Uses Location Object in the Browser window bound to events 
 * @Implements Router using fetch to get HTML templates to render page views via AJAX
 * @Version 0.0.1
 * @Author Goodwish Matyila
 */
export class RouterConfig {
     render(templateRef) {
         
          this.node = document.importNode(templateRef, true);
          this.preloader()
          this.updateAppContent(this.node); 
     }
     getTemplate(id) {
          return document.getElementById(id).content;
     }
     clearAndUpdate() {
          let content = document.querySelector(this.content);
          content.innerHTML = '';
          return document.querySelector(this.content);
     }
     preloader() {
          history.pushState({}, '',  location.hash.substring(1).trim());
          let loader = document.importNode(this.getTemplate('preloader'), true);
          this.clearAndUpdate()
          document.querySelector(this.content).append(loader);
     }
    
     updateAppContent(contentView) {
          setTimeout(()=>{
               this.clearAndUpdate().append(contentView);
          }, 5000 ) //randomize this
     }
     constructor() {
          this.content = "#content";
          addEventListener('hashchange', () => {
               if (location.hash.substring(1) == "/") {
                    this.render(this.getTemplate('_home')) //_home is the id of a <template id="_home"></template> 
               }
          })
     }
}


var routes = new RouterConfig();
location.replace("#/");
