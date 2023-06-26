function checkURL(url) {
    const validator = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[.][a-zA-Z]+$/;
  
    if (validator.test(url)) {
      console.log("Valid URL");
    } else {
      console.log("Invalid URL");
    }
  }

let url = "https://pwskills.com"
checkURL(url)