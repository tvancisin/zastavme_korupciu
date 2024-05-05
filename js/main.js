window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const width100 = window.innerWidth - 10,
  height100 = window.innerHeight,
  width80 = width100 * 0.80,
  width20 = width100 * 0.20,
  width50 = width100 * 0.5;


  window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  if (window.mobileCheck()){
    height100 + 50 + px 
  }


const margin = { top: 45, right: 10, bottom: 0, left: 10 },
  height = height100 - margin.top - margin.bottom,
  width = width80 - margin.top - margin.bottom;

//adjusting width and height for current screen
d3.selectAll("#story")
  .style("width", width100 + "px")
d3.selectAll(".graphic__vis, .graphic__vis__1, .graphic__vis__2, #visualization, #visualization1, #visualization2")
  .style("width", width100 + "px")
  .style("height", height100 + "px")
d3.selectAll(".graphic__prose, .graphic__prose__1, .graphic__prose__2")
  .style("width", width20 + "px")
  .style("left", width80 + "px")
d3.selectAll("#separator, #separator1, #separator2")
  .style("width", width100 + "px")
  .style("height", height100 + "px")
d3.selectAll(".trigger").style("padding-top", 0 + "px")
d3.select("#timeline").style("top", height + 10 + "px")
d3.select("#ind_line")
  .style("top", height / 2 + "px")
  .style("left", width100 - 20 + "px")


const legend_svg = d3.select("#perm2")
  .append("svg")
  .attr("width", 220)
  .attr("height", 80)
  .append("g")
  .attr("transform", `translate(10,20)`);

let leg_data = [1, 2]
// Circles and lines for the legend
legend_svg.selectAll("line")
  .data(leg_data)
  .join("line")
  .attr("x1", function(d,i){
    return i * 80
  })
  .attr("x2", function(d,i){
    return i * 80
  })
  .attr("y1", function (d) {
    return 20;
  })
  .attr("y2", function (d) {
    return 40;
  })
  .attr("stroke", "grey")
legend_svg.selectAll("circle")
  .data(leg_data)
  .join("circle")
  .attr("cx", function (d, i) {
    return i * 80
  })
  .attr("cy", 20)
  .attr("r", 7)
  .style("fill", function (d) {
    if (d == 2) {
      return "#7a89d3"
    }
    else {
      return "white"
    }
  })
  .attr("stroke", "none")
  legend_svg
  .append("text")
  .attr("x", -10)
  .attr("y", 50)
  .style("fill", "white")
  .text("EuroVolby")
  .style("font-size", "12px")
  legend_svg
  .append("text")
  .attr("x", 70)
  .attr("y", 50)
  .style("fill", "white")
  .style("font-size", "12px")
  .text("Rozsirenie EU")



const timeline_svg = d3.select("#timeline")
  .append("svg")
  .attr("width", 50 + margin.left + margin.right)
  .attr("height", 10000 + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(70,50)`);

const y = d3.scaleLinear()
  .domain([2025, 1950])
  .range([10000, 0])
  .nice();

timeline_svg.append("g")
  .attr("class", "axisWhite")
  .call(d3.axisLeft(y).tickValues([1950, 1973, 1979, 1981, 1984,
    1986, 1989, 1994, 1995, 1999, 2004, 2007, 2009, 2013, 2014, 2019, 2020]))
  .selectAll("text")
  .attr("font-family", "Montserrat")
  .attr("font-size", "12px")
  .attr("transform", "translate(0,10)rotate(0)")
  .style("text-anchor", "end");

let data = [1950, 1973, 1979, 1981, 1984,
  1986, 1989, 1994, 1995, 1999, 2004, 2007,
  2009, 2013, 2014, 2019, 2020]

// Lines
timeline_svg.selectAll("myline")
  .data(data)
  .join("line")
  .attr("x1", -60)
  .attr("x2", 0)
  .attr("y1", function (d) {
    return y(d);
  })
  .attr("y2", function (d) {
    return y(d);
  })
  .attr("stroke", "grey")

let election_years = [1979, 1984, 1989, 1994, 1999,
  2004, 2009, 2014, 2019]

// Circles
timeline_svg.selectAll("mycircle")
  .data(data)
  .join("circle")
  .attr("cx", -60)
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
    return y(1973) + "px"
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
    return y(1994) - y(1989) + "px"
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
    return y(2019) - y(2014) + "px"
  })
d3.select(".sixteen")
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

const g = {
  basemap: my_svg.select("g#basemap"),
  flights: my_svg.select("g#flights"),
  airports: my_svg.select("g#airports"),
  voronoi: my_svg.select("g#voronoi"),
};

g.voronoi
  .attr("transform", `translate(${0}, ${3})`);

let europeProjection = d3
  .geoOrthographic()
  .center([2, 54])
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
  d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv"),
  d3.csv("data/slov_eu_money.csv"),
  d3.csv("data/capitals.csv"),
]).then(function (files) {
  let capital_raw = files[4];
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

  // console.log(capitals_object, capitals_connections_object);

  let all_locs = typemyAirport(capitals_object)
  let all_line = typemyFlight(capitals_connections_object)


  pathGenerator = d3.geoPath().projection(europeProjection);

  let new_map = files[1]

  let find_election_year = d3.groups(files[0], (d) => d.YEAR == "1950")
  const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
  console.log(the_year);
  let find_second_election_year = d3.groups(files[0], (d) => d.YEAR == "2019")
  const the_second_year = find_second_election_year.filter(subarray => subarray[0] === true)[0][1];

  // g.voronoi
  //   .selectAll("path")
  //   .data(new_map.features)
  //   .join("path")
  //   .attr("d", pathGenerator)
  //   .style("cursor", "pointer")
  //   .attr("stroke", "none")
  //   .attr("fill", "#232323")
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


  second_g.basemap
    .selectAll("path")
    .data(new_map.features)
    .join("path")
    .attr("d", pathGenerator)
    .style("cursor", "pointer")
    .attr("stroke", "#3b3b3b")
    .attr("stroke-width", 1)
    .attr("class", "country")
    .attr("fill", function (d) {
      if (d.properties.NAME == "Slovakia") {
        return "red"
      }
      else {
        return "#3b3b3b"
      }

    })
    .attr("opacity", function (d) {
      let the_country = the_second_year.find(function (m) {
        return m.COUNTRY_ID == d.properties.NAME
      })
      if (the_country == undefined) {
        return 0
      }
      else {
        return 1
      }
    })

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
})
  .catch(error => console.error(error));
