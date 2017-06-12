var currentImage = 0;

var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

console.log(qs["src"]);

if (qs["src"].includes("http://")) {
  qs["src"].replace("http://", "https://");
}

console.log("changed to: " + qs["src"]);

$.ajax({
  url: qs["src"],
  dataType: "script",
  success: function (data) {
    currentImage = images[0];
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "app.js";
    $("head").append(s);
    mly.moveToKey(currentImage);
  }
});
