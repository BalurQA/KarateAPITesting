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
    baseURL: 'qa2'
  } else if (env == 'qa1') {
    baseURL: 'qa1'
  } else if(env == 'dev4') {
          baseURL: 'dev4'
    }

  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);
  return config;
}