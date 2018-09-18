function() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
  }
  if (env == 'qa2') {
    baseURL: 'https://qa2-api.fishersci.com/fishersci-cart'
  } else if (env == 'qa1') {
    baseURL: 'https://qa1-api.fishersci.com/fishersci-cart'
  } else if(env == 'dev4') {
          baseURL: 'https://dev4-api.fishersci.com/fishersci-cart'
    }

  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);
  return config;
}