var aside = {name:null,scope:null,contractor:null,architect:null}, projectPage;

function getElements() {
	var asideDiv = document.getElementById("aside"),
		arrows = document.getElementsByClassName("arrow");
	
	projectPage = document.getElementById("project-page");
		
	arrows[0].addEventListener("click", buttonClick);
	arrows[1].addEventListener("click", buttonClick);
	
	aside.name = asideDiv.children[0];
	aside.scope = asideDiv.children[2];
	aside.contractor = asideDiv.children[4];
	aside.architect = asideDiv.children[6];
	
	openProject(location.hash);
}

function parsePage(text) {
	var items = text.split("\n")
		.map(function(value, index, array) {return value.trim();}),
	splitter = items.lastIndexOf("---"), metadata = {},
	images = items.splice(splitter, items.length - splitter);
	
	for (var i = 0; i < items.length; i++) {
		var value = items[i], colon = value.indexOf(":");
		if (colon == -1) continue;
		metadata[value.substring(0, colon).trim()] = value.substring(colon+1, value.length).trim();
	}
	images.splice(0, 1);
	
	return {
		metadata: metadata,
		images: images
	}
}

function insertImages(images) {
	var projectFragment = document.createDocumentFragment();
	while (projectPage.firstChild) projectPage.removeChild(projectPage.firstChild);
	
	for (var i = 0; i < images.length; i++) {
		var img = document.createElement("img");
		img.src = images[i];
		projectFragment.appendChild(img);
	}
	projectPage.appendChild(projectFragment);
}

function insertData(metadata) {
	aside.name.textContent = metadata.name;
	aside.scope.textContent = metadata.scope;
	aside.contractor.textContent = metadata.contractor;
	aside.architect.textContent = metadata.architect;
}

function classToNum(c) {
	return parseInt(c.substring(c.indexOf("s")+1, c.length));
}
function numToClass(n) {
	return "view-project s" + n.toString();
}

function buttonClick(e) {
	var currentIndex = classToNum(projectPage.className), 
		total = projectPage.childElementCount;
	
	var adder = 1;
	if (this.className.indexOf("left-") > -1) adder = -1;
	
	if (currentIndex + adder < 1) return;
	else if (currentIndex + adder > total) return;
	
	projectPage.className = numToClass(currentIndex + adder);
}

function openProject(idGal) {
	if (location.hash.indexOf("gallery") == -1) return;
	var id = idGal.substring(1, location.hash.indexOf("-gallery"));
	while (projectPage.firstChild) projectPage.removeChild(projectPage.firstChild);
	projectPage.className = numToClass(1);
	
	var r = new XMLHttpRequest();
	r.onload = function() {
		var result = parsePage(this.responseText);
		insertData(result.metadata);
		insertImages(result.images);
	};
	r.open("GET", "/prj/" + id + ".yaml", true);
	r.send();
}

window.onhashchange = function(e) {
	openProject(location.hash);
}
if (document.body.readyState == "interactive" || document.body.readyState == "complete") {
	getElements();
} else {
	document.body.onload = getElements;
}