const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = phase => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER
  
  const env = {
    BOOSTRAP_CSS: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    SITE_NAME: "Dagmar Blog",
    API_BLOG: (()=>{
      if(isDevelopment){
        return "https://jsonplaceholder.typicode.com"
         } else {
           return "https://jsonplaceholder.typicode.com"
         }
    })()
  }

  return {
    env,
    reactStrictMode: true
  }
}