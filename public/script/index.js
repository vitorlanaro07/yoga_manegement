const router = async () => {
    const routes = [
        {path: '/', view: () => console.log('Viewing Dashboard')},
        {path: '/students', view:() => console.log('Viewing Student')},
        {path: '/payment', view:() => console.log('Viewing Payment')},
        {path: '/notifications', view:() => console.log('Viewing Notifications')}
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

    match.route.view(); //here, instead of showing a message, i will send the html using a class
};

document.addEventListener('DOMContentLoaded', ()=> {
    window.addEventListener('popstate', (e) => {
        e.preventDefault();
    })
    router();
})