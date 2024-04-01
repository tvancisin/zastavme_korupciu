const width100 = window.innerWidth - 10,
  height100 = window.innerHeight,
  width80 = width100 * 0.80,
  width20 = width100 * 0.20,
  width50 = width100 * 0.5;

const margin = { top: 45, right: 10, bottom: 0, left: 10 },
  height = height100 - margin.top - margin.bottom,
  width = width80 - margin.top - margin.bottom;

//adjusting width and height for current screen
d3.selectAll("#story")
  .style("width", width100 + "px")
d3.selectAll(".graphic__vis, .graphic__vis__1, #visualization, #visualization1")
  .style("width", width80 + "px")
  .style("height", height100 + "px")
d3.selectAll(".graphic__prose, .graphic__prose__1")
  .style("width", width20 + "px")
  .style("left", width80 + "px")
d3.selectAll("#separator, #separator1")
  .style("width", width100 + "px")
  .style("height", height100 + "px")
d3.selectAll(".trigger").style("padding-top", height100 / 2 + "px")

const bars_svg = d3.select("#visualization1")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)

const bars_g = bars_svg.append("g")
  .attr("transform", `translate(${width / 2 + 40}, ${margin.top})`);

const reverse_g = bars_svg.append("g")
  .attr("transform", "translate(" + 0 + "," + margin.top + ")");

// map svg, g, and projection
const my_svg = d3.select("#visualization")
  .attr("width", width)
  .attr("height", height);
const g = {
  basemap: my_svg.select("g#basemap"),
  flights: my_svg.select("g#flights"),
  airports: my_svg.select("g#airports"),
  voronoi: my_svg.select("g#voronoi"),
};
let europeProjection = d3
  .geoOrthographic()
  .center([2, 54])
  .scale([width * 1.5])
  .translate([width * 0.38, height / 2.6]);

Promise.all([
  d3.csv("data/election.csv"),
  d3.json("data/europe.json"),
  d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv"),
  d3.csv("data/slov_eu_money.csv"),
]).then(function (files) {

  pathGenerator = d3.geoPath().projection(europeProjection);
  let color_scale = d3.scaleLinear().domain([1, 80]).range([0, 1]);

  let new_map = files[1]

  let find_election_year = d3.groups(files[0], (d) => d.YEAR == "1979")
  const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];

  g.basemap
    .selectAll("path")
    .data(new_map.features)
    .join("path")
    .attr("d", pathGenerator)
    .style("cursor", "pointer")
    .attr("stroke", "black")
    .attr("stroke-width", 0.5)
    .attr("class", "country")
    .attr("fill", "white")
    .attr("opacity", function (d) {
      let the_country = the_year.find(function (m) {
        return m.COUNTRY_ID == d.properties.NAME
      })
      if (the_country == undefined) {
        return 0
      }
      else {
        return color_scale(the_country.RATE)
      }
    })
    .on("mousemove", function (d, i) {
      let the_country = the_year.find(function (m) {
        return m.COUNTRY_ID == i.properties.NAME
      })
      let the_rate
      if (the_country) {
        the_rate = the_country.RATE
      }
      d3.select("#details")
        .style("display", "block")
        .style("left", d.x - 160 + "px")
        .style("top", d.y - 20 + "px")
        .html(i.properties.NAME + `: ` + the_rate + `%`)

      d3.select(this)
        .style("stroke-width", 3)
        .style("stroke", "white")
    })
    .on("mouseleave", function (d, i) {
      d3.select("#details")
        .style("display", "none")

      d3.select(this)
        .style("stroke-width", 0.5)
        .style("stroke", "black")
    })
    .on("click", function (d, i) {
      console.log(d, i);

    });


  let scrollerVis;
  const prepare_data = function () {
    scrollerVis = new ScrollerVis({ storyElement: '#story', mapElement: 'map' },
      files, new_map)
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
  let graphicEl = document.querySelector('.graphic'),
    graphicEl1 = document.querySelector('.graphic1'),
    graphicVisEl = graphicEl.querySelector('.graphic__vis'),
    graphicVisEl1 = graphicEl1.querySelector('.graphic__vis__1'),
    triggerEls = selectionToArray(graphicEl.querySelectorAll('.trigger')),
    triggerEls1 = selectionToArray(graphicEl1.querySelectorAll('.trigger'));

  // handle the fixed/static position of grahpic
  let toggle = function (fixed, bottom) {
    if (fixed) graphicVisEl.classList.add('is-fixed')
    else graphicVisEl.classList.remove('is-fixed')

    if (bottom) graphicVisEl.classList.add('is-bottom')
    else graphicVisEl.classList.remove('is-bottom')
  }

  // handle the fixed/static position of grahpic
  let toggle1 = function (fixed, bottom) {
    if (fixed) graphicVisEl1.classList.add('is-fixed')
    else graphicVisEl1.classList.remove('is-fixed')

    if (bottom) graphicVisEl1.classList.add('is-bottom')
    else graphicVisEl1.classList.remove('is-bottom')
  }

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
      offset: '30%',  // trigger halfway up the viewport
    })
  })

  // setup a waypoint trigger for each trigger element
  let waypoints1 = triggerEls1.map(function (el) {
    // get the step, cast as number					
    let step = +el.getAttribute('data-step')

    return new Waypoint({
      element: el, // our trigger element
      handler: function (direction) {
        // if the direction is down then we use that number,
        // else, we want to trigger the previous one
        var nextStep = direction === 'down' ? step : Math.max(0, step)
        scrollerVis.goToStep(nextStep, direction);
        // console.log(nextStep);
        // scrollerVis.goToStep(nextStep, direction);

        // tell our graphic to update with a specific step
        // graphic.update(nextStep)
      },
      offset: '30%',  // trigger halfway up the viewport
    })
  })

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
  const enterWaypoint1 = new Waypoint({
    element: graphicEl1,
    handler: function (direction) {
      let fixed = direction === 'down'
      let bottom = false
      toggle1(fixed, bottom)
    },
  })

  const exitWaypoint1 = new Waypoint({
    element: graphicEl1,
    handler: function (direction) {
      let fixed = direction === 'up'
      let bottom = !fixed
      toggle1(fixed, bottom)
    },
    offset: 'bottom-in-view',
  })

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
