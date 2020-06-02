var selector;
var text;
var title;
window.onload = function() {
	category();
	product();
	brand();
}
function category(event) {
	selector = document.getElementById('selectCategory');
	text = selector[selector.selectedIndex].text;
	if(text == "Food"){
		document.getElementById("product0").textContent = "Cookie";
		document.getElementById("product1").textContent = "Cereals";
	} else {
		document.getElementById("product0").textContent = "Soap";
		document.getElementById("product1").textContent = "Detergent";
	}
	product();
}
function product(event) {
	selector = document.getElementById('selectProduct');
	text = selector[selector.selectedIndex].text;
	if(text == "Soap"){
		document.getElementById("brand0").textContent = "Omo";
		document.getElementById("brand1").textContent = "Ariel";
	} else if(text == "Detergent") {
		document.getElementById("brand0").textContent = "Ypê";
		document.getElementById("brand1").textContent = "Brilux";
	} else if(text == "Cookie") {
		document.getElementById("brand0").textContent = "Vitarella";
		document.getElementById("brand1").textContent = "Toddy";
	} else if(text == "Cereals") {
		document.getElementById("brand0").textContent = "Top Crock";
		document.getElementById("brand1").textContent = "Nestlé";
	}
	brand();
}
var bars = [
['Month', 'Sales'],
["January", 0],
["February", 0],
["March", 0],
["April", 0],
];
function brand(event) {
	selector = document.getElementById('selectBrand');
	text = selector[selector.selectedIndex].text;
	title = `Monthly sale of ${text}`
	if(text == "Omo"){
		bars = [
		['Month', 'Sales'],
		["January", 1],
		["February", 2],
		["March", 3],
		["April", 4],
		];
		drwaw(bars, title);
	} else if(text == "Ariel"){
		bars = [
		['Month', 'Sales'],
		["January", 3],
		["February", 5],
		["March", 2],
		["April", 10],
		];
		drwaw(bars, title)
	} else if(text == "Ypê"){
		bars = [
		['Month', 'Sales'],
		["January", 33],
		["February", 51],
		["March", 23],
		["April", 11],
		];
		drwaw(bars, title)
	} else if(text == "Brilux"){
		bars = [
		['Month', 'Sales'],
		["January", 13],
		["February", 21],
		["March", 33],
		["April", 31],
		];
		drwaw(bars, title)
	} else if(text == "Vitarella"){
		bars = [
		['Month', 'Sales'],
		["January", 15],
		["February", 27],
		["March", 38],
		["April", 30],
		];
		drwaw(bars, title)
	} else if(text == "Toddy"){
		bars = [
		['Month', 'Sales'],
		["January", 25],
		["February", 17],
		["March", 38],
		["April", 40],
		];
		drwaw(bars, title)
	} else if(text == "Top Crock"){
		bars = [
		['Month', 'Sales'],
		["January", 11],
		["February", 9],
		["March", 20],
		["April", 4],
		];
		drwaw(bars, title)
	} else if(text == "Nestlé"){
		bars = [
		['Month', 'Sales'],
		["January", 22],
		["February", 30],
		["March", 15],
		["April", 5],
		];
		drwaw(bars, title)
	}
}
  
  
function drwaw(bars, title){
	google.charts.load('current', {
		packages: ['bar']
	  }).then(drawStuff);
	google.charts.setOnLoadCallback(drawStuff);
	function drawStuff() {
		var data = new google.visualization.arrayToDataTable(bars);
		var options = {
			legend: { position: 'none' },
			is3D:true,
			chart: {
				title: title},
				axes: {
					x: {
									0: { side: 'bottom', label: ' '} // Top x-axis.
								}
							},
							bar: { groupWidth: "90%" }
						};
						var chart = new google.charts.Bar(document.getElementById('chart-container'));
						chart.draw(data, google.charts.Bar.convertOptions(options));
						window.addEventListener('resize', drawStuff, false);
				}
		}