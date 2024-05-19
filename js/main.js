window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function toggleContent(parent, p1, p2) {
  var button = d3.select('.' + parent + ' button').node();
  var paragraph1 = d3.select('#' + p1).node();
  var paragraph2 = d3.select('#' + p2).node();
  // Check if the button is currently inside paragraph1
  if (button.parentElement === paragraph2) {
    console.log("move to par1");
    // Move the button back to paragraph1
    d3.select(paragraph1).append(() => button);
    // Show paragraph2
    d3.select(paragraph2).classed('hidden', true);
    // Change button text to "Show More"
    button.textContent = "viac";
  } else {
    console.log("move to par2");
    // Move the button to paragraph2
    d3.select(paragraph2).append(() => button);
    // Show paragraph2
    d3.select(paragraph2).classed('hidden', false);
    // Change button text to "Show Less"
    button.textContent = "menej";
  }
}

const width100 = window.innerWidth - 10,
  height100 = window.innerHeight,
  width80 = width100 * 0.80,
  width20 = width100 * 0.20,
  width50 = width100 * 0.5;

const margin = { top: 45, right: 10, bottom: 0, left: 10 },
  height = height100 - margin.top - margin.bottom,
  width = width80 - margin.top - margin.bottom;

d3.select("#title_image").style("height", height/3 + "px")

//adjusting width and height for current screen
d3.select("#peace_process")
  .style("height", height - 20 + "px")
  .style("width", 400 + "px")
  .style("right", - 420 + "px")
d3.select("#peace_content")
  .style("height", height - 90 + "px")
d3.selectAll("#peace_title_div")
  .style("width", 400 + "px")

d3.selectAll("#story")
  .style("width", width100 + "px")
d3.selectAll(".graphic__vis, .graphic__vis__1, .graphic__vis__2, #visualization, #visualization1, #visualization2")
  .style("width", width100 + "px")
  .style("height", height100 + "px")
d3.selectAll(".graphic__prose, .graphic__prose__1, .graphic__prose__2")
  .style("width", width20 + "px")
  .style("left", 20 + "px")
d3.selectAll("#separator, #separator1, #separator2")
  .style("width", width100 + "px")
  .style("height", height100 + "px")
d3.selectAll(".trigger").style("padding-top", 0 + "px")
d3.select("#timeline").style("top", height + 10 + "px")
d3.select("#ind_line")
  .style("top", height / 2 + "px")
  // .style("left", width100 - 20 + "px")
d3.select("#perm2").style("right", "5px")

let counter_collab = 0;
d3.select("#info_button").on("click", function () {
  counter_collab += 1;
  if (counter_collab % 2 !== 0) {
    d3.select("#peace_process")
      .transition().duration(500)
      .style("right", 5 + "px")
  }
  else {
    d3.select("#peace_process")
      .transition().duration(500)
      .style("right", -420 + "px")
  }
})

const legend_svg = d3.select("#perm2")
  .append("svg")
  .attr("width", 300)
  .attr("height", 100)
  .append("g")
  .attr("transform", `translate(10,20)`);

let leg_data = [1, 2]
legend_svg.selectAll("line")
  .data(leg_data)
  .join("line")
  .attr("y1", function (d, i) {
    return i * 30
  })
  .attr("y2", function (d, i) {
    return i * 30
  })
  .attr("x1", function (d) {
    return 230;
  })
  .attr("x2", function (d) {
    return 280;
  })
  .attr("stroke", "white")
  
legend_svg.selectAll("circle")
  .data(leg_data)
  .join("circle")
  .attr("cy", function (d, i) {
    return i * 30
  })
  .attr("cx", 280)
  .attr("r", 10)
  .style("fill", function (d) {
    if (d == 1) {
      return "#7a89d3"
    }
    else {
      return "white"
    }
  })
  .attr("stroke", "none")
legend_svg
  .append("text")
  .attr("x", 220)
  .attr("y", 3)
  .style("fill", "white")
  .style("direction", "rtl")
  .text("Historické Udalosti")
  .style("font-size", "12px")
legend_svg
  .append("text")
  .attr("x", 220)
  .attr("y", 33)
  .style("fill", "white")
  .style("direction", "rtl")
  .style("font-size", "12px")
  .text("Európske Voľby")

const timeline_svg = d3.select("#timeline")
  .append("svg")
  .attr("width", 50 + margin.left + margin.right)
  .attr("height", 10000 + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(0,50)`);

const y = d3.scaleLinear()
  .domain([2025, 1950])
  .range([10000, 0])
  .nice();

timeline_svg.append("g")
  .attr("class", "axisWhite")
  .call(d3.axisLeft(y).tickValues([1950, 1957, 1973, 1979, 1981, 1984,
    1986, 1989, 1993, 1994, 1995, 1999, 2004, 2007, 2009, 2013, 2014,
    2016, 2019, 2020]).tickFormat(d3.format("d")))
  .selectAll("text")
  .attr("font-family", "Montserrat")
  .attr("font-size", "14px")
  .attr("transform", "translate(50,10)")
  .style("text-anchor", "end");

let data = [1950, 1957, 1973, 1979, 1981, 1984,
  1986, 1989, 1993, 1994, 1995, 1999, 2004, 2007,
  2009, 2013, 2014, 2016, 2019, 2020]

let data1 = [1950, 1951, 1952, 1953, 1954, 1955, 
  1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 
  1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 
  1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
  1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987,
  1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
  1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
  2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
  2012, 2013, 2013, 2014, 2015, 2016, 2017, 2018,
  2019, 2020]

// Lines
timeline_svg.selectAll("myline")
  .data(data1)
  .join("line")
  .attr("x1", function (d) {
    if (data.includes(d)){
      return 60
    }
    else {
      return 6
    }

  })
  .attr("x2", 0)
  .attr("y1", function (d) {
    return y(d);
  })
  .attr("y2", function (d) {
    return y(d);
  })
  .attr("stroke", "white")
  .attr("stroke-width", 1)

let election_years = [1979, 1984, 1989, 1994, 1999,
  2004, 2009, 2014, 2019]

// Circles
timeline_svg.selectAll("mycircle")
  .data(data)
  .join("circle")
  .attr("cx", 60)
  .attr("cy", function (d) { return y(d); })
  .attr("r", function (d) {
    return 8
  })
  .style("fill", function (d) {
    if (election_years.includes(d)) {
      return "white"
    }
    else {
      return "#7a89d3"
    }
  })
  .attr("stroke-width", 2)
  .attr("stroke", function (d) {
    if (election_years.includes(d)) {
      return "white"
    }
    else {
      return "#7a89d3"
    }
  })


d3.select(".one")
  .style("height", function (d) {
    return y(1957) + "px"
  })
d3.select(".one_half")
  .style("height", function (d) {
    return y(1973) - y(1957) + "px"
  })
d3.select(".two")
  .style("height", function (d) {
    return y(1979) - y(1973) + "px"
  })
d3.select(".three")
  .style("height", function (d) {
    return y(1981) - y(1979) + "px"
  })
d3.select(".four")
  .style("height", function (d) {
    return y(1984) - y(1981) + "px"
  })
d3.select(".five")
  .style("height", function (d) {
    return y(1986) - y(1984) + "px"
  })
d3.select(".six")
  .style("height", function (d) {
    return y(1989) - y(1986) + "px"
  })
d3.select(".seven")
  .style("height", function (d) {
    return y(1993) - y(1989) + "px"
  })
d3.select(".seven_half")
  .style("height", function (d) {
    return y(1994) - y(1993) + "px"
  })
d3.select(".eight")
  .style("height", function (d) {
    return y(1995) - y(1994) + "px"
  })
d3.select(".nine")
  .style("height", function (d) {
    return y(1999) - y(1995) + "px"
  })
d3.select(".ten")
  .style("height", function (d) {
    return y(2004) - y(1999) + "px"
  })
d3.select(".eleven")
  .style("height", function (d) {
    return y(2007) - y(2004) + "px"
  })
d3.select(".twelve")
  .style("height", function (d) {
    return y(2009) - y(2007) + "px"
  })
d3.select(".thirteen")
  .style("height", function (d) {
    return y(2013) - y(2009) + "px"
  })
d3.select(".fourteen")
  .style("height", function (d) {
    return y(2014) - y(2013) + "px"
  })
d3.select(".fifteen")
  .style("height", function (d) {
    return y(2016) - y(2014) + "px"
  })
d3.select(".sixteen")
  .style("height", function (d) {
    return y(2019) - y(2016) + "px"
  })
d3.select(".seventeen")
  .style("height", function (d) {
    return y(2020) - y(2019) + "px"
  })


const bars_svg = d3.select("#visualization1")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)

const bars_g = bars_svg.append("g")
  .attr("transform", `translate(${width / 2 + 40}, ${margin.top})`);

const reverse_g = bars_svg.append("g")
  .attr("transform", "translate(" + 0 + "," + margin.top + ")");

// first map  
const my_svg = d3.select("#visualization")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", [0, 0, width, height])

const g = {
  basemap: my_svg.select("g#basemap"),
  flights: my_svg.select("g#flights"),
  airports: my_svg.select("g#airports"),
  voronoi: my_svg.select("g#voronoi"),
};

// g.voronoi
//   .attr("transform", `translate(${0}, ${3})`);

let europeProjection = d3
  .geoOrthographic()
  .center([3, 53])
  .scale([width * 1.3])
  .translate([width * 0.38, height / 2.3]);

function distance(source, target) {
  const dx2 = Math.pow(target.x - source.x, 2);
  const dy2 = Math.pow(target.y - source.y, 2);
  return Math.sqrt(dx2 + dy2);
}

function typemyAirport(airport) {
  airport.forEach(function (d) {
    d.longitude = parseFloat(d.longitude);
    d.latitude = parseFloat(d.latitude);
    const coords = europeProjection([d.longitude, d.latitude]);
    d.x = coords[0];
    d.y = coords[1];
    d.outgoing = 0;
    d.incoming = 0;
    d.flights = [];
  });
  return airport;
}
function typemyFlight(flight) {
  flight.forEach(function (d) {
    d.num = parseInt(d.num);
  });
  return flight;
}

// second map 
const my_second_svg = d3.select("#visualization2")
  .attr("width", width)
  .attr("height", height);
const second_g = {
  basemap: my_second_svg.select("g#basemap2"),
  flights: my_second_svg.select("g#flights2"),
  airports: my_second_svg.select("g#airports2"),
  voronoi: my_second_svg.select("g#voronoi2"),
};

const hypotenuse = Math.sqrt(width * width + height * height);

const tooltip = d3.select("text#tooltip");

let scales = {
  // used to scale airport bubbles
  airports: d3.scaleSqrt().range([1.4, 14]),

  // used to scale number of segments per line
  segments: d3.scaleLinear().domain([0, hypotenuse]).range([1, 30]),
};

Promise.all([
  d3.csv("data/election.csv"),
  d3.json("data/europe.json"),
  d3.csv("data/slov_eu_money.csv"),
  d3.csv("data/capitals.csv"),
]).then(function (files) {
  let capital_raw = files[3];
  let capitals_object = [];
  let capitals_connections_object = [];

  for (let i = 0; i < capital_raw.length - 1; i++) {
    capitals_object.push({
      name: capital_raw[i].Capital,
      latitude: +capital_raw[i].Latitude,
      longitude: +capital_raw[i].Longitude
    })
    for (let y = i + 1; y < capital_raw.length - 1; y++) {
      capitals_connections_object.push({
        start: capital_raw[i].Capital,
        end: capital_raw[y].Capital,
        num: 2
      })
    }
  }

  let all_locs = typemyAirport(capitals_object)
  let all_line = typemyFlight(capitals_connections_object)

  pathGenerator = d3.geoPath().projection(europeProjection);

  let new_map = files[1]

  let find_election_year = d3.groups(files[0], (d) => d.YEAR == "1950")
  const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
  console.log(the_year);
  let find_second_election_year = d3.groups(files[0], (d) => d.YEAR == "2019")
  const the_second_year = find_second_election_year.filter(subarray => subarray[0] === true)[0][1];

  g.basemap
    .selectAll("path")
    .data(new_map.features)
    .join("path")
    .attr("d", pathGenerator)
    .style("cursor", "pointer")
    .attr("stroke", "none")
    // .attr("stroke-width", 1.5)
    .attr("class", "country")
    // .attr("fill", "#0F1826")
    // .attr("fill", "#1e2d45")
    .attr("fill", function (d) {
      let the_country = the_year.find(function (m) {
        return m.COUNTRY_ID == d.properties.NAME
      })
      if (the_country == undefined) {
        return "#1e2d45"
      }
      else {
        return "#7A89D3"
      }
    })
  // .attr("fill-opacity", function (d) {
  //   let the_country = the_year.find(function (m) {
  //     return m.COUNTRY_ID == d.properties.NAME
  //   })
  //   if (the_country == undefined) {
  //     return 0
  //   }
  //   else {
  //     return color_scale(the_country.RATE)
  //   }
  // })
  // .on("mousemove", function (d, i) {
  //   let the_country = the_year.find(function (m) {
  //     return m.COUNTRY_ID == i.properties.NAME
  //   })
  //   let the_rate
  //   if (the_country) {
  //     the_rate = the_country.RATE
  //   }
  //   d3.select("#details")
  //     .style("display", "block")
  //     .style("left", d.x - 160 + "px")
  //     .style("top", d.y - 20 + "px")
  //     .html(i.properties.NAME + `: ` + the_rate + `%`)

  //   d3.select(this)
  //     .style("stroke-width", 2)
  //     .style("stroke", "white")
  // })
  // .on("mouseleave", function (d, i) {
  //   d3.select("#details")
  //     .style("display", "none")

  //   d3.select(this)
  //     .style("stroke-width", 1)
  //     .style("stroke", "gray")
  // })
  // .on("click", function (d, i) {
  //   console.log(d, i);

  // });


  // second_g.basemap
  //   .selectAll("path")
  //   .data(new_map.features)
  //   .join("path")
  //   .attr("d", pathGenerator)
  //   .style("cursor", "pointer")
  //   .attr("stroke", "#3b3b3b")
  //   .attr("stroke-width", 1)
  //   .attr("class", "country")
  //   .attr("fill", function (d) {
  //     if (d.properties.NAME == "Slovakia") {
  //       return "red"
  //     }
  //     else {
  //       return "#3b3b3b"
  //     }

  //   })
  //   .attr("opacity", function (d) {
  //     let the_country = the_second_year.find(function (m) {
  //       return m.COUNTRY_ID == d.properties.NAME
  //     })
  //     if (the_country == undefined) {
  //       return 0
  //     }
  //     else {
  //       return 1
  //     }
  //   })

  let scrollerVis;
  const prepare_data = function () {
    scrollerVis = new ScrollerVis({ storyElement: '#story', mapElement: 'map' },
      files, new_map, all_locs, all_line)
  }

  prepare_data()

  // let scrollerVis = new ScrollerVis({ storyElement: '#story', mapElement: 'map' }, data_for_scroll, year_division, the_array);
  // helper function to map over dom selection
  function selectionToArray(selection) {
    var len = selection.length
    var result = []
    for (var i = 0; i < len; i++) {
      result.push(selection[i])
    }
    return result
  }

  // select elements
  let graphicEl = document.querySelector('.graphic');
  // graphicEl1 = document.querySelector('.graphic1'),
  // graphicEl2 = document.querySelector('.graphic2'),
  graphicVisEl = graphicEl.querySelector('.graphic__vis');
  // graphicVisEl1 = graphicEl1.querySelector('.graphic__vis__1'),
  // graphicVisEl2 = graphicEl2.querySelector('.graphic__vis__2'),
  triggerEls = selectionToArray(graphicEl.querySelectorAll('.trigger'));
  // triggerEls1 = selectionToArray(graphicEl1.querySelectorAll('.trigger')),
  // triggerEls2 = selectionToArray(graphicEl2.querySelectorAll('.trigger'));


  // handle the fixed/static position of grahpic
  let toggle = function (fixed, bottom) {
    if (fixed) graphicVisEl.classList.add('is-fixed')
    else graphicVisEl.classList.remove('is-fixed')

    if (bottom) graphicVisEl.classList.add('is-bottom')
    else graphicVisEl.classList.remove('is-bottom')
  }

  // handle the fixed/static position of grahpic
  // let toggle1 = function (fixed, bottom) {
  //   if (fixed) graphicVisEl1.classList.add('is-fixed')
  //   else graphicVisEl1.classList.remove('is-fixed')

  //   if (bottom) graphicVisEl1.classList.add('is-bottom')
  //   else graphicVisEl1.classList.remove('is-bottom')
  // }

  // handle the fixed/static position of grahpic
  // let toggle2 = function (fixed, bottom) {
  //   if (fixed) graphicVisEl2.classList.add('is-fixed')
  //   else graphicVisEl2.classList.remove('is-fixed')

  //   if (bottom) graphicVisEl2.classList.add('is-bottom')
  //   else graphicVisEl2.classList.remove('is-bottom')
  // }

  // setup a waypoint trigger for each trigger element
  let waypoints = triggerEls.map(function (el) {
    // get the step, cast as number					
    let step = +el.getAttribute('data-step')

    return new Waypoint({
      element: el, // our trigger element
      handler: function (direction) {
        // if the direction is down then we use that number,
        // else, we want to trigger the previous one
        var nextStep = direction === 'down' ? step : Math.max(0, step)
        console.log(nextStep);
        scrollerVis.goToStep(nextStep, direction);

        // tell our graphic to update with a specific step
        // graphic.update(nextStep)
      },
      offset: '45%',  // trigger halfway up the viewport
    })
  })

  // setup a waypoint trigger for each trigger element
  // let waypoints1 = triggerEls1.map(function (el) {
  //   // get the step, cast as number					
  //   let step = +el.getAttribute('data-step')

  //   return new Waypoint({
  //     element: el, // our trigger element
  //     handler: function (direction) {
  //       // if the direction is down then we use that number,
  //       // else, we want to trigger the previous one
  //       var nextStep = direction === 'down' ? step : Math.max(0, step)
  //       scrollerVis.goToStep(nextStep, direction);
  //       // console.log(nextStep);
  //       // scrollerVis.goToStep(nextStep, direction);

  //       // tell our graphic to update with a specific step
  //       // graphic.update(nextStep)
  //     },
  //     offset: '10%',  // trigger halfway up the viewport
  //   })
  // })

  // setup a waypoint trigger for each trigger element
  // let waypoints2 = triggerEls2.map(function (el) {
  //   // get the step, cast as number					
  //   let step = +el.getAttribute('data-step')

  //   return new Waypoint({
  //     element: el, // our trigger element
  //     handler: function (direction) {
  //       // if the direction is down then we use that number,
  //       // else, we want to trigger the previous one
  //       var nextStep = direction === 'down' ? step : Math.max(0, step)
  //       scrollerVis.goToStep(nextStep, direction);
  //       // console.log(nextStep);
  //       // scrollerVis.goToStep(nextStep, direction);

  //       // tell our graphic to update with a specific step
  //       // graphic.update(nextStep)
  //     },
  //     offset: '30%',  // trigger halfway up the viewport
  //   })
  // })


  // enter (top) / exit (bottom) graphic (toggle fixed position)
  const enterWaypoint = new Waypoint({
    element: graphicEl,
    handler: function (direction) {
      let fixed = direction === 'down'
      let bottom = false
      toggle(fixed, bottom)
    },
  })

  const exitWaypoint = new Waypoint({
    element: graphicEl,
    handler: function (direction) {
      let fixed = direction === 'up'
      let bottom = !fixed
      toggle(fixed, bottom)
    },
    offset: 'bottom-in-view',
  })

  // enter (top) / exit (bottom) graphic (toggle fixed position)
  // const enterWaypoint1 = new Waypoint({
  //   element: graphicEl1,
  //   handler: function (direction) {
  //     let fixed = direction === 'down'
  //     let bottom = false
  //     toggle1(fixed, bottom)
  //   },
  // })

  // const exitWaypoint1 = new Waypoint({
  //   element: graphicEl1,
  //   handler: function (direction) {
  //     let fixed = direction === 'up'
  //     let bottom = !fixed
  //     toggle1(fixed, bottom)
  //   },
  //   offset: 'bottom-in-view',
  // })

  // enter (top) / exit (bottom) graphic (toggle fixed position)
  // const enterWaypoint2 = new Waypoint({
  //   element: graphicEl2,
  //   handler: function (direction) {
  //     let fixed = direction === 'down'
  //     let bottom = false
  //     toggle2(fixed, bottom)
  //   },
  // })

  // const exitWaypoint2 = new Waypoint({
  //   element: graphicEl2,
  //   handler: function (direction) {
  //     let fixed = direction === 'up'
  //     let bottom = !fixed
  //     toggle2(fixed, bottom)
  //   },
  //   offset: 'bottom-in-view',
  // })



  // const waypoints =
  //   d3.selectAll('.step')
  //     .each(function (d, stepIndex) {
  //       const thethingy = 4 - stepIndex;
  //       return new Waypoint({
  //         element: this,
  //         handler: function (direction) {
  //           const nextStep = thethingy
  //           scrollerVis.goToStep(nextStep, direction);
  //         },
  //         offset: '50%',
  //       });
  //     });

  d3.select("#contentCapsule")
    .append("button")
    .attr("class", "button button1")
    .text("noľem / dik / néz / подивіться / pozri")
    .style("top", h / 2 + "px")
    .style("border-color", "#04AA6D")

  d3.select("#circles").remove()

  function myStopFunction() {
    clearInterval(myVar);
  }

  d3.select(".button1")
    .on("click", function () {
      myStopFunction();
      d3.select("input")
        .style("visibility", "visible")
      d3.select("body").style("overflow-y", "visible")
      $("#contentCapsule").css("display", "none");
    })



})
  .catch(error => console.error(error));
