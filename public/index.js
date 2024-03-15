import Student from "./views/Student.js";
import { getData } from "./script/loadAllStudents.js";






const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path: '/', view: Student},
        // {path: '/students', view:() => console.log('Viewing Student')},
        // {path: '/payment', view:() => console.log('Viewing Payment')},
        // {path: '/notifications', view:() => console.log('Viewing Notifications')}
    ];

    // Test each route for potencial match
    
    const potencialRoutes = routes.map(route => {       // Grabing each route
        return {                                        // Returning a new route
            route:route,
            isMatch: location.pathname === route.path   // Location.pathname is every URl after and "/" -> "/Route" -> "/student/1" -> all this examples are a possible return for location.pathname
        }
    }) // Grabing each route


    // looking for the current route
    // let match = potencialRoutes.filter(route => {
    //     if(route.isMatch === true){
    //         // console.log(route);
    //         return route;
    //     }
    // });

    // let match = potencialRoutes.find(route => {
    //     if(route.isMatch === true){
    //         // console.log(route);
    //         return route;
    //     }
    // });

    let match = potencialRoutes.find(potencialRoute => potencialRoute.isMatch);


    if (!match){
        match = {
            route: routes[0],           //it's cool to update when appear a 404 error
            isMatch: true
        }
    }

    // if(location.pathname == '/'){
    //     getData().then(jsonObj => {
    //         const view = new match.route.view();
    //         document.querySelector('.principal-content').innerHTML = await view.getHtml(jsonObj);
    //     });
    
    // }

    const view = new match.route.view();

    document.querySelector('.principal-content').innerHTML = await view.getHtml();

     //here, instead of showing a message, i will send the html using a class
};

// target = new EventTarget();
// target.


//this will make change in url when I use the history navigation arrow next to the reload option 
// like this (<)(>) (↻)
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', ()=> {
    document.body.addEventListener('click', e => {
        //e.target in this case, will return the element that is marked with "data-link"
        if(e.target.matches('[data-link]')){
            e.preventDefault();
            //so, i will through the link
            navigateTo(e.target.href);
        }
    })
    // console.log(document.body);
    router();
})