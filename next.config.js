const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = phase => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER
  
  const env = {
    SITE_NAME: "Dagmar Blog",
    API_BLOG: (()=>{
      if(isDevelopment){
        return "https://jsonplaceholder.typicode.com/"
         } else {
           return "https://api.dagmarblog.com"
         }
    })()
  }

  return {
    env,
    reactStrictMode: true
  }
}