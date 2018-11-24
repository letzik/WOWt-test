var arr = [{
"id": "1",
"name": "iPhone X 32",
"image": "https://hotline.ua/img/tx/158/158046386_s265.jpg",
"title": "iphone X 32Gb main page",
 "price": 27513,
 "colors": ['white','gold','black']
}, {
"id": "2",
"name": "Xiaomi Pocophone F1",
"image": "https://hotline.ua/img/tx/177/177560957_s265.jpg",
"title": "Xiaomi Pocophone F1 64 GB main page",
"price": 10999,
"colors": ['black','blue','kevlar']
}, {
"id": "3",
"name": "Huawei P20 Pro",
"image": "https://hotline.ua/img/tx/166/166904173_s265.jpg",
"title": "Huawei P20 Pro 64 GB main page",
"price": 10999,
"colors": ['black','blue','kevlar']
}, {
"id": "4",
"name": "Samsung Galaxy S9",
"image": "https://hotline.ua/img/tx/164/164605784_s265.jpg",
"title": "Samsung Galaxy S9 64 GB main page",
"price": 18999,
"colors": ['black','blue','kevlar']
}, {
"id": "5",
"name": "Xiaomi Redmi 4A",
"image": "https://hotline.ua/img/tx/158/158126932_s265.jpg",
"title": "Xiaomi Redmi 4A 16GB main page",
"price": 2799,
"colors": ['gray','gold','rose gold']
}];

for(var i = 0; i < arr.length; i++) {
    var t = document.getElementById("catal");
   // var v = t.createElement('div');
t.innerHTML += "<div class='col-lg-4 col-md-6 col-sx-12' id='item-m'><div id='item'><h2 class='text-primary'>" + arr[i].name + "</h2><img src='" + arr[i].image + "'><p>" + arr[i].title + "</p><p>" + arr[i].price + " грн.</p><button type='button' class='btn btn-success'>Купити</button></div></div>";
}
function filterFunction() {
    var input, filter, cat, div1, h2, p, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    cat = document.getElementById("catal");
    div1 = cat.getElementsByTagName("div");
    for (i = 0; i < div1.length; i++) {
        h2 = div1[i].getElementsByTagName("h2")[0];
        p = div1[i].getElementsByTagName("p")[0];
        if (h2.innerHTML.toUpperCase().indexOf(filter) > -1 || p.innerHTML.toUpperCase().indexOf(filter) > -1) {
            div1[i].style.display = "";
        } else {
            div1[i].style.display = "none";
        }

    }
}