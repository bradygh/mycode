function yp(obj) { 
  body.append('pre')
    .html(js_yaml.dump(obj));
}
data = {};
data.name = "A list of 10 numbers";
data.list = d3.range(10);
yp(data);
