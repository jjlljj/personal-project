/* eslint-ignore */
// based on http://bl.ocks.org/nbremer/21746a9668ffdf6d8242

import * as d3 from 'd3'
import { select } from 'd3-selection'

function RadarChart(g, data, options) {
  var cfg = {
   w: 200,       
   h: 200,
   margin: {top: 20, right: 20, bottom: 20, left: 20}, 
   levels: 3, 
   maxValue: 0,
   labelFactor: 1.25,
   wrapWidth: 60,
   opacityArea: 0.35,
   dotRadius: 4,
   opacityCircles: 0.1,
   strokeWidth: 2,
   roundStrokes: false,
   color: d3.scaleOrdinal(d3.schemeCategory10)
  };
  
  if('undefined' !== typeof options){
    for(var i in options){
    if('undefined' !== typeof options[i]){ cfg[i] = options[i]; }
    }
  }

  var maxValue = 1
    
  var allAxis = (data[0].map(function(i, j){return i.axis})), //Names of each axis
    total = allAxis.length,         //The number of different axes
    radius = Math.min(cfg.w/2, cfg.h/2),  //Radius of the outermost circle
    Format = d3.format('%'),        //Percentage formatting
    angleSlice = Math.PI * 2 / total;   //The width in radians of each "slice"
  
  //Scale for the radius
  var rScale = d3.scaleLinear()
    .range([0, radius])
    .domain([0, maxValue]);
    
  //Filter for the outside glow
  var filter = select(g).append('defs').append('filter').attr('id','glow'),
    feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation','2.5').attr('result','coloredBlur'),
    feMerge = filter.append('feMerge'),
    feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
    feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');
  
  //Wrapper for the grid & axes
  var axisGrid = select(g).append("g").attr("class", "axisWrapper");
  
  //Draw the background circles
  axisGrid.selectAll(".levels")
     .data(d3.range(1,(cfg.levels+1)).reverse())
     .enter()
    .append("circle")
    .attr("class", "gridCircle")
    .attr("r", function(d, i){return radius/cfg.levels*d;})
    .style("fill", "#CDCDCD")
    .style("stroke", "#CDCDCD")
    .style("fill-opacity", cfg.opacityCircles)
    .style("filter" , "url(#glow)");

  //Create the straight lines radiating outward from the center
  var axis = axisGrid.selectAll(".axis")
    .data(allAxis)
    .enter()
    .append("g")
    .attr("class", "axis");
  //Append the lines
  axis.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", function(d, i){ return rScale(maxValue*1.1) * Math.cos(angleSlice*i - Math.PI/2); })
    .attr("y2", function(d, i){ return rScale(maxValue*1.1) * Math.sin(angleSlice*i - Math.PI/2); })
    .attr("class", "line")
    .style("stroke", "white")
    .style("stroke-width", "2px");

  //Append the labels at each axis
  axis.append("text")
    .attr("class", "legend")
    .style("font-size", "11px")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr("x", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2); })
    .attr("y", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2); })
    .text(function(d){return d})
    .call(wrap, cfg.wrapWidth);

  //The radial line function
  var radarLine = d3.radialLine()
    .radius(function(d) { return rScale(d.value); })
    .angle(function(d,i) {  return i*angleSlice; });

  if(cfg.roundStrokes) {
    radarLine.curve(d3.curveCardinalClosed)
  }
        
  //Create a wrapper for the blobs  
  var blobWrapper = select(g).selectAll(".radarWrapper")
    .data(data)
    .enter().append("g")
    .attr("class", "radarWrapper");
      
  //Append the backgrounds  
  blobWrapper
    .append("path")
    .attr("class", "radarArea")
    .attr("d", function(d,i) { return radarLine(d); })
    .style("fill", function(d,i) { return cfg.color(i); })
    .style("fill-opacity", cfg.opacityArea)
    .on('mouseover', function (d,i){
      //Dim all blobs
      d3.selectAll(".radarArea")
        .transition().duration(200)
        .style("fill-opacity", 0.1); 
      //Bring back the hovered over blob
      d3.select(this)
        .transition().duration(200)
        .style("fill-opacity", 0.7);  
    })
    .on('mouseout', function(){
      //Bring back all blobs
      d3.selectAll(".radarArea")
        .transition().duration(200)
        .style("fill-opacity", cfg.opacityArea);
    });
    
  //Create the outlines 
  blobWrapper.append("path")
    .attr("class", "radarStroke")
    .attr("d", function(d,i) { return radarLine(d); })
    .style("stroke-width", cfg.strokeWidth + "px")
    .style("stroke", function(d,i) { return cfg.color(i); })
    .style("fill", "none")
    //.style("filter" , "url(#glow)");    
  
  //Append the circles
  blobWrapper.selectAll(".radarCircle")
    .data(function(d,i) { return d; })
    .enter().append("circle")
    .attr("class", "radarCircle")
    .attr("r", cfg.dotRadius)
    .attr("cx", function(d,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
    .attr("cy", function(d,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
    .style("fill", function(d,i,j) { return cfg.color(j); })
    .style("fill-opacity", 0.8);

  //Wrapper for the invisible circles on top
  var blobCircleWrapper = select(g).selectAll(".radarCircleWrapper")
    .data(data)
    .enter().append("g")
    .attr("class", "radarCircleWrapper");
    
  //Append a set of invisible circles on top for the mouseover pop-up
  blobCircleWrapper.selectAll(".radarInvisibleCircle")
    .data(function(d,i) { return d; })
    .enter().append("circle")
    .attr("class", "radarInvisibleCircle")
    .attr("r", cfg.dotRadius*1.5)
    .attr("cx", function(d,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
    .attr("cy", function(d,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
    .style("fill", "none")
    .style("pointer-events", "all")
    
  //Set up the small tooltip for when you hover over a circle
  var tooltip = select(g).append("text")
    .attr("class", "tooltip")
    .style("opacity", 0);
  
  //Wraps SVG text  
  function wrap(text, width) {
    text.each(function() {
    var text = d3.select(this),
      words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.4, // ems
      y = text.attr("y"),
      x = text.attr("x"),
      dy = parseFloat(text.attr("dy")),
      tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
      
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
      line.pop();
      tspan.text(line.join(" "));
      line = [word];
      tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
    });
  }
  
}

export default RadarChart