p5.prototype.registerPreloadMethod('loadBytes');

function loadBytes(file, callback) {
  let data = {};
  let oReq = new XMLHttpRequest();
  oReq.open("GET", file, true);
  oReq.responseType = "arraybuffer";
  oReq.onload = function(oEvent) {
    let arrayBuffer = oReq.response;
    if (arrayBuffer) {
      data.values = new Uint8Array(arrayBuffer);
      if (callback) {
        callback(data);
      }
    }
  }
  oReq.send(null);
  return data;
}
