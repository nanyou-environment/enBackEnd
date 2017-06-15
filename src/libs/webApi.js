/* eslint-disable */
//_params格式化data=>formdata
const znzteachUrl = '/'
function _params(data,key) {
    var params = '';
    key=key||'';
    var type={'string':true,'number':true,'boolean':true};
    if(type[typeof(data)])
      params = data;
    else
      for(var i in data) {
        if(type[typeof(data[i])])
          params += key + (!key?i:('['+i+']')) + "=" +data[i] + '&';
        else
          params+=_params(data[i],key+(!key?i:('['+i+']')));
      }
      params = params.slice(0, params.length-1);
    return !key?encodeURI(params).replace(/%5B/g,'[').replace(/%5D/g,']'):params;
}

export default (options) => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.withCredentials = true; 
    req.onreadystatechange = function () {
      if (req.readyState == 4) {
        var status = req.status;
        if (status >= 200 && status < 300) {
          const jsonDta = JSON.parse(req.responseText);
          resolve && resolve(jsonDta);
        } else {
          reject && reject(status);
        }
      }
    }
    // Set request headers if provided.
    Object.keys(options.headers || {}).forEach(function (key) {
      req.setRequestHeader(key, options.headers[key]);
    });
    if (options.type == "GET" || options.type === undefined) {
      req.open("GET", znzteachUrl + options.url, true);
      req.send(null);
    } else if (options.type == "POST") {
      req.open("POST", znzteachUrl + options.url, true);
      req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
      req.send(_params(options.data||null));
    }
  })
}
/* eslint-disable */
