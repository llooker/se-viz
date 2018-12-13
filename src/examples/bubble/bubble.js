import * as d3 from 'd3'
import { formatType, handleErrors } from '../common/utils'


var vis = {
    id: 'bubblecluster',
    label: 'Bubble Cluster',
    options: {
        color_range: {
            type: 'array',
            label: 'Color Range',
            display: 'colors',
            default: ['#dd3333', '#80ce5d', '#f78131', '#369dc1', '#c572d3', '#36c1b3', '#b57052', '#ed69af']
        },
				diameter:{
					type: "string",
					label: "Diameter",
					default:1000
				}

    },
    // Set up the initial state of the visualization
    create: function (element, config) {
        element.style.fontFamily = "\"Open Sans\", \"Helvetica\", sans-serif";
        this.svg = d3.select(element).append('svg');
				console.log(this.svg)
    },
    // Render in response to the data or settings changing
    update: function (data, element, config, queryResponse) {
        if (!handleErrors(this, queryResponse, {
            min_pivots: 0, max_pivots: 0,
            min_dimensions: 1, max_dimensions: undefined,
            min_measures: 1, max_measures: 1
        }))
            return;
        var width = element.clientWidth;
        var height = element.clientHeight;
        var radius = Math.min(width, height) / 2 - 8;
        var dimensions = queryResponse.fields.dimension_like;
        var measure = queryResponse.fields.measure_like[0];
        var format = formatType(measure.value_format) || (function (s) { return s.toString(); });
        var colorScale = d3.scaleOrdinal();
        var color = colorScale.range(config.color_range);
				//var color=d3.scale.category20();

				var children=[]
				data.forEach(function (row) {
            row.taxonomy = {
                value: dimensions.map(function (dimension) { return row[dimension.name].value; })
            };
						var d={}

						d["packageName"]=row.taxonomy["value"][0]
						d["className"]=row.taxonomy["value"][1]
						d["value"]=row[measure.name]["value"]
						children.push(d)
        });
				console.log(children)

				var obj={"children":children}
				var diameter =config.diameter;
				var format = d3.format(",d")
				var bubble = d3.pack()
    .size([width, height])
    .padding(1.5);


		var svg = (this.svg
		    .html('')
		    .attr('width', '100%')
		    .attr('height', '100%')
				.attr("class", "bubble")
		    .append('g')
		    .attr('transform', 'translate(' + 0 + ',' + 0 + ')'));

				var root = d3.hierarchy(obj)
				.sum(function(d) { return d.value; });

				var node = svg.selectAll(".node")
				      .data(bubble(root).leaves())
				      //.filter(function(d) { return !d.children; })
				    .enter().append("g")
				      .attr("class", "node")
							.attr("transform", function(d) { return "translate(" + 0 + "," + 0 + ")"; });

				   //   .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });


						console.log(node)
				  node.append("circle")
				      .attr("r", function(d) { return d.r; })
							.attr("cx", function(d) {
	return d.x;
})
.attr("cy", function(d) {
	return d.y;
})
				      .style("fill", function(d) {return color(d.data.packageName); })
				      .style("stroke", function(d) { return  d3.rgb(color(d.data.packageName)).darker(); })
				      .attr("data-title", function(d) {return d.data.className+ ": " + format(d.data.value); });

				  node.append("text")

					.attr("x", function(d) {
	return d.x;
})
.attr("y", function(d) {
	return d.y + 5;
})
				      //.attr("dy", ".3em")
				      .style("text-anchor", "middle")
							.style("font-size", "12px")

				      .text(function(d) { return d.data.packageName+ " - "+d.data.className.substring(0, d.r / 3); })
				      .attr("data-title", function(d) {return d.data.className+ ": " + format(d.data.value); })

							.each(wrap)
							;

				 //  $("circle").tooltip({container: '.bubble_chart', html: true, placement:'top'});
				  // $("text").tooltip({container: '.bubble_chart', html: true, placement:'top'});

					function wrap(d) {
			        var text = d3.select(this),
			          width = d.r * 2,
			          x = d.x,
			          y = d.y,
			          words = text.text().split(/\s+/).reverse(),
			          word,
			          line = [],
			          lineNumber = 0,
			          lineHeight = 1.1,
			          tspan = text.text(null).append("tspan").attr("x", x).attr("y", y);
			        while (word = words.pop()) {
			          line.push(word);
			          tspan.text(line.join(" "));
			          if (tspan.node().getComputedTextLength() > width) {
			            line.pop();
			            tspan.text(line.join(" "));
			            line = [word];
			            tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + "em").text(word);
			          }
			        }
			    }


    }
};
looker.plugins.visualizations.add(vis);
