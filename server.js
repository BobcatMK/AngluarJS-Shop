connect = require("../0.10.33/node_modules/connect");
serveStatic = require("../0.10.33/node_modules/serve-static");

var app = connect();

app.use(serveStatic("."));
app.listen(5000);
