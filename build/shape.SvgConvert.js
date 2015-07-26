/*
	*************************
	Shape SVG Convert
	*************************

	---
	Developer(s)
	---

	Jason Mayo
	http://bymayo.co.uk
	http://twitter.com/madebymayo

*/

	// ------------------------
	// Build
	// ------------------------
	
		(function ($) {

			$.fn.shapeSvgConvert = function(options) {

				//
				// Settings
				//
				
					var pluginSettings = $.extend(
							true,
							{
								debug: false,
								cleanUp: ['width','height','id','x','y','xmlns:xlink','xml:space','enable-background','version'],
							}, 
							options 
						);
						
				//
				// Variables
				//
				
					var pluginObj = this.selector;

				//
				// Debugging
				//

					function debug(name, message, seperate) {

						if(pluginSettings.debug) {
							if (seperate) {
								console.log('[Shape SVG Convert]' + '[' + name + '] ');
								console.log(message);
							}
							else {
								console.log('[Shape SVG Convert]' + '[' + name + '] ' + message);
							}
						}

					}
					
				//
				// Build
				//
				
					$(pluginObj).each(
						function(index) {
						
							var svgObj = $(this),
								svgPath = svgObj.attr('src');
								
							debug('Path ' + index, svgPath);
							
							$.get(
								svgPath,
								function(data) {
							
									var svgData = data.childNodes,
										svgLength = svgData.length,
										svgOutput,
										svgOutputClean;
									
									/*
										Node Types
										---
										1	Element
										2	Attribute
										3	Text
										4	CDATA Section
										5	Entity Reference
										6	Entity
										7	Processing Instruction
										8	Comment
										9	Document
										10	Document Type
										11	Document Fragment
										12	Notation
									*/
									
									for (var node = 0; node < svgLength; node++) {
	
										if (svgData[node].nodeType === 1) {	
											svgOutput = svgData[node];
											$.each(
												pluginSettings.cleanUp, 
												function(i, item) {
													$(svgOutput).removeAttr(item);
												}
											);
											
										}
										
									}
									
									svgObj.after(svgOutput);
									svgObj.remove();
							
								}
							);
						
						}
					);

			};
			
		}( jQuery ));