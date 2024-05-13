let hovno = 0;

const x = d3.scaleLinear()
  .domain([0, 4000])
  .range([0, width / 2]);

const reverse_x = d3.scaleLinear()
  .range([width / 2, 0])
  .domain([0, 4000])

// X axis
bars_g.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .selectAll("text")
  .style("font-family", "Montserrat")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

let initial_countries = ["Belgium", "France", "Germany", "Italy", "Luxembourg", "Netherlands"]
const drawPolygons = function (map, year, type) {

  g.basemap
    .selectAll("path")
    .data(map.features)
    .join("path")
    .on("mousemove", function (d, i) {
      if (type == "elec") {
        let the_country = year.find(function (m) {
          return m.COUNTRY_ID == i.properties.NAME
        })
        let the_rate
        if (the_country) {
          the_rate = the_country.RATE
          d3.select("#details")
            .style("display", "block")
            .style("left", d.x - 160 + "px")
            .style("top", d.y - 20 + "px")
            .html(i.properties.NAME + `: ` + the_rate + `%`)

          d3.select(this)
            .style("stroke-width", 2)
            .style("stroke", "black")
        }
      }
    })
    .on("mouseleave", function (d, i) {
      d3.select("#details")
        .style("display", "none")

      d3.select(this)
        .style("stroke", "none")
    })
    .transition().duration(500)
    .attr("d", pathGenerator)
    .attr("fill", function (d) {
      if (type == "exp") {
        let the_country = year.find(function (m) {
          return m.COUNTRY_ID == d.properties.NAME
        })
        if (the_country == undefined) {
          return "#1e2d45"
        }
        else {
          return "#7A89D3"
        }
      }
      else {
        let the_country = year.find(function (m) {
          return m.COUNTRY_ID == d.properties.NAME
        })
        if (the_country !== undefined) {
          return "rgba(255, 255, 255," + color_scale(the_country.RATE) + ")"
        }
        else {
          return "#1e2d45"
        }
      }
    })
}


const drawBundle = function (loc, line) {
  function processOtherData(univer, connect, which) {
    let airports = univer;
    let flights = connect;

    // convert airports array (pre filter) into map for fast lookup
    let iata = new Map(airports.map((node) => [node.name, node]));

    // calculate incoming and outgoing degree based on flights
    // flights are given by airport iata code (not index)
    flights.forEach(function (link) {
      link.source = iata.get(link.start);
      link.target = iata.get(link.end);

      link.source.outgoing += link.num;
      link.target.incoming += link.num;
    });

    // remove airports out of bounds
    airports = airports.filter(
      (airport) =>
        airport.x >= 0 &&
        airport.x <= 2000 &&
        airport.y >= 0 &&
        airport.y <= 1000
    );

    // remove airports with NA state
    // airports = airports.filter((airport) => airport.name !== null);

    // remove airports without any flights
    // airports = airports.filter(
    //   (airport) => airport.outgoing > 0 && airport.incoming > 0
    // );

    // sort airports by outgoing degree
    // airports.sort((a, b) => d3.descending(a.outgoing, b.outgoing));

    // keep only the top airports
    // airports = airports.slice(0, 50);

    // done filtering airports can draw
    drawAirports(airports, which);
    drawPolygonsBundle(airports, which);

    // reset map to only include airports post-filter
    // iata = new Map(airports.map((node) => [node.name, node]));

    // filter out flights that are not between airports we have leftover
    // flights = flights.filter(
    //   (link) => iata.has(link.source.name) && iata.has(link.target.name)
    // );

    // done filtering flights can draw
    drawFlights(airports, flights, which);
  }

  processOtherData(loc, line)

  function drawPolygonsBundle(airports, which) {
    // convert array of airports into geojson format
    const geojson = airports.map(function (airport) {
      return {
        type: "Feature",
        properties: airport,
        geometry: {
          type: "Point",
          coordinates: [airport.longitude, airport.latitude],
        },
      };
    });

    // calculate voronoi polygons
    const polygons = d3.geoVoronoi().polygons(geojson);

    second_g.voronoi
      .selectAll("path")
      .data(polygons.features)
      .enter()
      .append("path")
      .attr("d", d3.geoPath(europeProjection))
      .attr("class", "voronoi")
      // .on("click", function (event, d) {
      //   click_checker += 1;
      //   if (click_checker % 2 == 0) {
      //     $(".flight:not(.highlight)").css("opacity", 0);
      //   } else {
      //     d3.select("text#tooltip").style("visibility", "hidden");
      //     $(".flight:not(.highlight)").css("opacity", 1);
      //     d3.selectAll(".airport").classed("highlight", false);
      //     d3.selectAll(".flight").classed("highlight", false);
      //   }
      // })
      .on("mouseover", function (event, d) {
        // console.log(event,d);
        let airport = d.properties.site.properties;

        // d3.select(airport.bubble).classed("highlight", true);

        // d3.selectAll(airport.flights)
        //   .classed("highlight", true)
        //   .raise();

        // make tooltip take up space but keep it invisible
        tooltip.style("display", null);
        tooltip.style("visibility", "hidden");

        // set default tooltip positioning
        tooltip.attr("text-anchor", "middle");
        tooltip.attr("dy", -scales.airports(airport.outgoing) - 4);
        tooltip.attr("x", airport.x);
        tooltip.attr("y", airport.y);

        // set the tooltip text
        tooltip.text(airport.name);

        // // double check if the anchor needs to be changed
        let bbox = tooltip.node().getBBox();

        if (bbox.x <= 0) {
          tooltip.attr("text-anchor", "start");
        } else if (bbox.x + bbox.width >= width) {
          tooltip.attr("text-anchor", "end");
        }

        tooltip.style("visibility", "visible");
      })
      .on("mouseout", function (event, d) {
        let airport = d.properties.site.properties;

        d3.select(airport.bubble).classed("highlight", false);

        d3.selectAll(airport.flights).classed("highlight", false);

        d3.select("text#tooltip").style("visibility", "hidden");
      });
    // .on("dblclick", function (d) {
    //   // toggle voronoi outline
    //   let toggle = d3.select(this).classed("highlight");
    //   d3.select(this).classed("highlight", !toggle);
    // });
  }

  function drawAirports(airports, which) {
    // adjust scale
    const extent = d3.extent(airports, (d) => d.outgoing);
    scales.airports.domain(extent);

    // draw airport bubbles
    second_g.airports
      .selectAll("circle.airport")
      .data(airports, (d) => d.iata)
      .enter()
      .append("circle")
      .attr("r", function (d) {
        return 2;
      })
      .attr("cx", (d) => d.x) // calculated on load
      .attr("cy", (d) => d.y) // calculated on load
      .attr("class", "airport")
      .each(function (d) {
        // adds the circle object to our airport
        // makes it fast to select airports on hover
        d.bubble = this;
      });
  }

  function drawFlights(airports, flights, which) {

    // break each flight between airports into multiple segments
    let bundle = generateSegments(airports, flights);

    // https://github.com/d3/d3-shape#curveBundle
    let line = d3
      .line()
      .curve(d3.curveBundle)
      .x((airport) => airport.x)
      .y((airport) => airport.y);

    // const limit = 100;

    let links = second_g.flights
      .selectAll("path.flight")
      .data(bundle.paths)
      .enter()
      .append("path")
      .attr("d", line)
      .attr("class", "flight")
      .each(function (d, i) {
        // if (i > limit) {
        //   return;
        // }
        // adds the path object to our source airport
        // makes it fast to select outgoing paths
        d[0].flights.push(this);
      });

    let layout = d3
      .forceSimulation()
      // settle at a layout faster
      .alphaDecay(0.3)
      // nearby nodes attract each other
      .force(
        "charge",
        d3.forceManyBody().strength(10)
          .distanceMax(scales.airports.range()[1] * 2)
      )
      // edges want to be as short as possible
      // prevents too much stretching
      .force("link", d3.forceLink().strength(0.8).distance(0))
      .on("tick", function (d) {
        links.attr("d", line);
      })
      .on("end", function (d) {
        // console.log("layout complete");
      });

    layout.nodes(bundle.nodes).force("link").links(bundle.links);
    // if (which == "study") {
    //   d3.selectAll(".flight").style("stroke-opacity", 0.3);
    // } else {
    //   d3.selectAll(".flight").style("stroke-opacity", 0.1);
    // }
  }

  function generateSegments(nodes, links) {
    // generate separate graph for edge bundling
    // nodes: all nodes including control nodes
    // links: all individual segments (source to target)
    // paths: all segments combined into single path for drawing
    let bundle = { nodes: [], links: [], paths: [] };

    // make existing nodes fixed
    bundle.nodes = nodes.map(function (d, i) {
      d.fx = d.x;
      d.fy = d.y;
      return d;
    });

    links.forEach(function (d, i) {
      // calculate the distance between the source and target
      let length = distance(d.source, d.target);

      // calculate total number of inner nodes for this link
      let total = Math.round(scales.segments(length));

      // create scales from source to target
      let xscale = d3
        .scaleLinear()
        .domain([0, total + 1]) // source, inner nodes, target
        .range([d.source.x, d.target.x]);

      let yscale = d3
        .scaleLinear()
        .domain([0, total + 1])
        .range([d.source.y, d.target.y]);

      // initialize source node
      let source = d.source;
      let target = null;

      // add all points to local path
      let local = [source];

      for (let j = 1; j <= total; j++) {
        // calculate target node
        target = {
          x: xscale(j),
          y: yscale(j),
        };

        local.push(target);
        bundle.nodes.push(target);

        bundle.links.push({
          source: source,
          target: target,
        });

        source = target;
      }

      local.push(d.target);

      // add last link to target node
      bundle.links.push({
        source: target,
        target: d.target,
      });

      bundle.paths.push(local);
    });

    return bundle;
  }
}


let color_scale = d3.scaleLinear().domain([1, 80]).range([0, 1]);
class ScrollerVis {
  constructor(_config, _files, _map, _locs, _lines) {
    this.config = {
      another: _config.storyElement,
      map: _config.mapElement,
      vis_width: width80,
      vis_height: height100,
      margin: { top: 50, right: 10, bottom: 20, left: 10 },
      steps: ['step1', 'step2', 'step3', 'step4', 'step5', 'step6',
        'step7', 'step8', 'step9', 'step10', 'step11', 'step12',
        'step13', 'step14', 'step15', 'step16', 'step17']
    }
    this.files = _files,
      this.map = _map,
      this.locations = _locs,
      this.lines = _lines,
      this.initVis();
  }

  initVis() {
    let vis = this;
    vis.width = vis.config.vis_width - vis.config.margin.left - vis.config.margin.right;
    vis.height = vis.config.vis_height - vis.config.margin.top - vis.config.margin.bottom;

    // Y axis
    this.y = d3.scaleBand()
      .range([0, height - 20])
      .domain(this.files[3].map(d => d.year))
      .padding(.1);

    bars_g.append("g")
      .call(d3.axisLeft(this.y))
      .selectAll("text")
      .attr("transform", "translate(-11,0)")
      .style("font-family", "Montserrat")
      .style("font-size", "12px")
      .style("text-anchor", "middle");


    // d3.selectAll(".tick text").style("visibility", "hidden")

    setTimeout(function () {
      hovno = 1;
    }, 800);
  }

  step1(direction) {
    const vis = this;
    console.log("step1", direction);
  }

  step2(direction) {
    const vis = this;
    console.log("step2", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1973")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")

    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1950")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")
    }
  }

  step3(direction) {
    const vis = this;
    console.log("step3", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1979")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1973")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")
    }
  }

  step4(direction) {
    const vis = this;
    console.log("step4", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1981")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1979")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
  }

  step5(direction) {
    const vis = this;
    console.log("step5", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1984")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1981")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")
    }
  }

  step6(direction) {
    const vis = this;
    console.log("step6", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1986")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")

    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1984")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
  }

  step7(direction) {
    const vis = this;
    console.log("step7", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1989")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1986")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")
    }
  }

  step8(direction) {
    const vis = this;
    console.log("step8", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1994")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1989")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
  }

  step9(direction) {
    const vis = this;
    console.log("step9", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1995")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1994")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
  }

  step10(direction) {
    const vis = this;
    console.log("step10", direction);
    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1999")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1995")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")
    }

  }

  step11(direction) {
    const vis = this;
    console.log("step11", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2004")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1999")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
  }

  step12(direction) {
    const vis = this;
    console.log("step12", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2007")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2004")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
  }

  step13(direction) {
    const vis = this;
    console.log("step13", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2009")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2007")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")
    }
  }

  step14(direction) {
    const vis = this;
    console.log("step14", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2013")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2009")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
  }

  step15(direction) {
    const vis = this;
    console.log("step15", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2014")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2013")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")
    }
  }

  step16(direction) {
    const vis = this;
    console.log("step16", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2019")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2014")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
  }

  step17(direction) {
    const vis = this;
    console.log("step17", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2020")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "exp")
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2019")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      drawPolygons(this.map, the_year, "elec")
    }
  }
  // mirror bars vis
  // step10(direction) {
  //   const vis = this;
  //   console.log("step10", direction);

  //   if (direction == "down") {
  //     //Bars

  //     d3.selectAll(".tick text").style("visibility", "visible")

  //     bars_g.selectAll(".myRect")
  //       .data(this.files[3])
  //       .join("rect")
  //       .attr("class", "myRect")
  //       .attr("x", x(0))
  //       .attr("y", d => this.y(d.year))
  //       .attr("rx", 3)
  //       .attr("width", x(0))
  //       .attr("height", this.y.bandwidth())
  //       .attr("fill", "white")
  //       .transition().delay(function (d, i) { return i * 100 })
  //       .attr("width", d => x(d.in))

  //     reverse_g.selectAll(".bar")
  //       .data(this.files[3])
  //       .join("rect")
  //       .attr("class", "bar")
  //       .attr("height", this.y.bandwidth())
  //       .attr("rx", 3)
  //       .attr("y", (d) => this.y(d.year))
  //       .attr("width", function (d) { return 0; })
  //       .attr("x", function (d) { return width / 2 })
  //       .transition().delay(function (d, i) { return i * 100 })
  //       .attr("x", function (d) { return reverse_x(d.out) })
  //       .attr("width", function (d) { return reverse_x(0) - reverse_x(d.out); })
  //       .attr("fill", "gray")
  //   }
  //   else if (direction == "up") {

  //     d3.selectAll(".tick text").style("visibility", "hidden")
  //     //Bars
  //     bars_g.selectAll(".myRect")
  //       .transition()
  //       .attr("width", x(0))

  //     reverse_g.selectAll(".bar")
  //       .transition()
  //       .attr("width", 0)
  //       .attr("x", width / 2)
  //   }
  // }

  // edge bundle
  // step13(direction) {
  //   const vis = this;
  //   console.log("step13", direction);

  //   drawBundle(this.locations, this.lines);

  // }





  goToStep(stepIndex, direction) {
    if (hovno === 1) {
      this[this.config.steps[stepIndex]](direction);
    }
  }
}