import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Store from '../store/index'
import Auth0Callback from '../views/Auth0Callback.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth0callback',
    name: 'auth0callback',
    component: Auth0Callback,
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});



router.beforeEach( (to,from,next)=>{
  // Allow finishing callback url for logging in
  if(to.matched.some(record=>record.path == "/auth0callback")){
   console.log("router.beforeEach found /auth0callback url");
   Store.dispatch('auth0HandleAuthentication');
   next(false);
 }
 
  // check if user is logged in (start assuming the user is not logged in = false)
  let routerAuthCheck = false;  
  // Verify all the proper access variables are present for proper authorization
  if( localStorage.getItem('access_token') && localStorage.getItem('id_token') && localStorage.getItem('expires_at') ){
    console.log('found local storage tokens');
    // Check whether the current time is past the Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // set localAuthTokenCheck true if unexpired / false if expired
    routerAuthCheck = new Date().getTime() < expiresAt;  
  }
 
   // set global ui understanding of authentication
   Store.commit('setUserIsAuthenticated', routerAuthCheck);
 
   // check if the route to be accessed requires authorizaton
   if (to.matched.some(record => record.meta.requiresAuth)) {
     console.log('I am here, authentication checking, private page');
     // Check if user is Authenticated
     if(routerAuthCheck){
       // user is Authenticated - allow access
       console.log('Access granted, now we are logged in');
       next();
     }
     else{
       // user is not authenticated - redirect to login
       router.replace('/login');
     }
     
   }
   // Allow page to load 
   else{
     console.log('no authentication, public page');
     Store.commit('setUserIsAuthenticated', false);
     next();
   }
 });

export default router
