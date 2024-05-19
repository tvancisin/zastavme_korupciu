let myVar = setInterval(myFunction, 500);
window.onload = myVar;
let h = window.innerHeight;
let w = window.innerWidth;
let circleData = ["data"];

var mw = screen.width;
var mh = screen.height;

console.log(mw,mh);

function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /android|avantgo|blackberry|bada\/|bb10|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|kindle|lge |maemo|meego.+mobile|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm(os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series40|series60|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
    return mobileRegex.test(userAgent);
}

if (isMobileDevice()) {
    d3.select("#contentCapsule").append("div")
        .attr("id", "description")
        .style("top", mh / 2 + "px")
        .html(`rozvoj a vznik európskej únie.` + `<br>` +
            `<h6>texty: lukáš kožina, veb: tomáš vančišín</h6>` +
            `<h6>[na mobile nefunguje zatial. sorry. skus pc]</h6>`)
}
else {
    d3.select("#contentCapsule").append("div")
        .attr("id", "description")
        .style("top", h / 2 + "px")
        .html(`rozvoj a vznik európskej únie.` + `<br>` +
            `<h6>texty: lukáš kožina, veb: tomáš vančišín</h6>` +
            `<h6>[na mobile nefunguje zatial. sorry. skus pc]</h6>`)
}


// initial screen counter
let circleObject = d3.select("#contentCapsule").append("svg")
    .attr("id", "circles")
    .attr("width", "100px")
    .attr("height", "50px")
    .style("top", h / 2 + "px")

function circleFunction(x) {
    if (x == 0) {
        return 1
    }
    else {
        return 0
    }
}

let circleG = circleObject.append("g")
circleG.selectAll("circle")
    .data(circleData)
    .enter()
    .append(function () {
        let crcls = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        crcls.setAttribute('class', "loading");
        for (var i = 0; i < 4; i++) {
            var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('fill', "#F37720");
            circle.setAttribute('cx', 10 + i * 20);
            circle.setAttribute('cy', 25);
            circle.setAttribute('r', 2);
            circle.setAttribute("class", "circle" + i)
            circle.setAttribute("opacity", circleFunction(i))
            crcls.appendChild(circle);
        }
        return crcls;
    })
    .attr('transform', function (d, i) {
        return 'translate(0,0)';
    });

let circleStatus = 0;
function myFunction() {
    circleStatus += 1;
    $(".circle1").css("opacity", function () {
        if (circleStatus === 1) {
            return 1
        }
        else if (circleStatus === 4) {
            return 0
        }
    })
    $(".circle2").css("opacity", function () {
        if (circleStatus === 2) {
            return 1
        }
        else if (circleStatus === 4) {
            return 0
        }
    })
    $(".circle3").css("opacity", function () {
        if (circleStatus === 3) {
            return 1
        }
        else if (circleStatus === 4) {
            circleStatus = 0;
            return 0
        }
    })


}
