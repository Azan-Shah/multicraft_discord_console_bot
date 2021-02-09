const { serverid, url, user, key } = require('./config.json');
const api = require("multicraft").begin({
    url: url,
    user: user,
    key: key
});

let print = 'a';
api.getServerStatus(serverid).then((response) => {
  print = response;
  console.log(response);
}).then(function() {
  console.log(print)
  return print;
});

var a = print;
console.log(a);