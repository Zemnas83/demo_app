export default defineNuxtRouteMiddleware((to, from) => {

  addRouteMiddleware("auth", () => {
    const { $auth } = useNuxtApp() 

    console.log($auth?.currentUser)
    
    if (!$auth?.currentUser?.uid) {
      return abortNavigation()
    }

  });
});
