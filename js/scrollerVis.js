let hovno = 0;


let color_scale = d3.scaleLinear().domain([1, 80]).range([0, 1]);
class ScrollerVis {
  constructor(_config, _files, _map) {
    this.config = {
      another: _config.storyElement,
      map: _config.mapElement,
      vis_width: width80,
      vis_height: height100,
      margin: { top: 50, right: 10, bottom: 20, left: 10 },
      steps: ['step1', 'step2', 'step3', 'step4', 'step5', 'step6',
        'step7', 'step8', 'step9', 'step10', 'step11', 'step12',
        'step13']
    }
    this.files = _files,
      this.map = _map,
      this.initVis();
  }

  initVis() {
    let vis = this;
    vis.width = vis.config.vis_width - vis.config.margin.left - vis.config.margin.right;
    vis.height = vis.config.vis_height - vis.config.margin.top - vis.config.margin.bottom;

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
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1984")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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
    }
    else if (direction == "up") {

      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1979")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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

    }

  }

  step3(direction) {
    const vis = this;
    console.log("step3", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1989")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1984")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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

    }


  }

  step4(direction) {
    const vis = this;
    console.log("step4", direction);

    if (direction == "down") {

      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1994")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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



    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1989")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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
    }


  }
  step5(direction) {
    const vis = this;
    console.log("step5", direction);

    if (direction == "down") {

      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1999")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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

    }
    else if (direction == "up") {

      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1994")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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
    }

  }

  step6(direction) {
    const vis = this;
    console.log("step6", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2004")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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
    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "1999")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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

    }

  }

  step7(direction) {
    const vis = this;
    console.log("step7", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2009")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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

    }
    else if (direction == "up") {

      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2004")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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

    }
  }

  step8(direction) {
    const vis = this;
    console.log("step8", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2014")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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

    }
    else if (direction == "up") {

      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2009")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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
    }
  }

  step9(direction) {
    const vis = this;
    console.log("step9", direction);

    if (direction == "down") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2019")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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

    }
    else if (direction == "up") {
      let find_election_year = d3.groups(this.files[0], (d) => d.YEAR == "2014")
      const the_year = find_election_year.filter(subarray => subarray[0] === true)[0][1];
      console.log(the_year);

      g.basemap
        .selectAll("path")
        .data(this.map.features)
        .join("path")
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
        .transition()
        .attr("d", pathGenerator)
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

    }
  }

  step10(direction) {
    const vis = this;
    console.log("step10", direction);

    //// bars 
    const x = d3.scaleLinear()
      .domain([0, 4000])
      .range([0, width / 2]);

    const reverse_x = d3.scaleLinear()
      .range([width / 2, 0])
      .domain([0, 4000])

    bars_g.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Y axis
    const y = d3.scaleBand()
      .range([0, height - 20])
      .domain(this.files[3].map(d => d.year))
      .padding(.1);

    bars_g.append("g")
      .call(d3.axisLeft(y))

    //Bars
    bars_g.selectAll("myRect")
      .data(this.files[3])
      .join("rect")
      .attr("x", x(0))
      .attr("y", d => y(d.year))
      .attr("rx", 3)
      .attr("width", x(0))
      .attr("height", y.bandwidth())
      .attr("fill", "white")
      .transition().delay(function (d, i) { return i * 100 })
      .attr("width", d => x(d.in))

    reverse_g.selectAll(".bar")
      .data(this.files[3])
      .join("rect")
      .attr("class", "bar")
      .attr("height", y.bandwidth())
      .attr("rx", 3)
      .attr("y", function (d) { return y(d.year); })
      .attr("width", function (d) { return 0; })
      .attr("x", function (d) { return width / 2 })
      .transition().delay(function (d, i) { return i * 100 })
      .attr("x", function (d) { return reverse_x(d.out) })
      .attr("width", function (d) { return reverse_x(0) - reverse_x(d.out); })
      .attr("fill", "gray")

  }

  step11(direction) {
    const vis = this;
    console.log("step11", direction);

  }


  goToStep(stepIndex, direction) {
    if (hovno === 1) {
      this[this.config.steps[stepIndex]](direction);
    }
  }
}