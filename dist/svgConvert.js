/*
	*************************
	SVG Convert
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

		$.fn.svgConvert = function(options) {

			//
			// Settings
			//
			
				var pluginSettings = $.extend(
						{
							svgCleanupAttr: ['width','height','id','x','y','xmlns','xmlns:a','xmlns:xlink','xml:space','enable-background','version','style'],
							imgIncludeAttr: true,
							imgCleanupAttr: [],
							removeClass: true,
							addClass: 'svg-converted',
							onComplete: function() {}
						}, 
						options 
					);
					
			//
			// Variables
			//
			
				var pluginObj = this.selector,
					pluginObjName = pluginObj.substring(1),
					pluginObjLength = $(pluginObj).length;
					
				pluginSettings.imgCleanupAttr.push('alt', 'src');
				
			//
			// Build
			//
			
				$(pluginObj).each(
					function(index) {
					
						var imageObj = $(this),
							imagePath = imageObj.attr('src'),
							imageAttributes = {};
						
						// Image - Get Attributes
						
						if (pluginSettings.imgIncludeAttr) {
							
							$.each(
								this.attributes,
								function() {
									if(
										this.specified && 
										pluginSettings.imgCleanupAttr.indexOf(this.name) !== 0
									) {
										if (this.name === 'class' && pluginSettings.removeClass) {
											this.value = this.value.replace(pluginObjName + ' ', '');
										}
										if (this.name === 'class' && pluginSettings.addClass) {
											this.value = this.value += ' ' + pluginSettings.addClass;
										}
										imageAttributes[this.name] = this.value;	
									}
								}
							);
							
						}
						
						$.get(
							imagePath,
							function(data) {
								
								var svgData = $(data).find('svg'),
									svgOutput;

								// SVG - Cleanup Attributes
								
								$.each(
									pluginSettings.svgCleanupAttr, 
									function(i, item) {
										svgData.removeAttr(item);
									}
								);
								
								// Image - Include Attributes
								
								if (pluginSettings.imgIncludeAttr) {
									
									$.each(
										imageAttributes,
										function(key, value) {
											svgData.attr(key, value);
										}
									);

								}
								
								// Output
								
								imageObj.replaceWith($(data).find('svg'));
								
								// Callback - Complete
								
								if (index + 1 === pluginObjLength) {
									pluginSettings.onComplete.call(this);
								}
						
							}
						);
					
					}
				);

		};
		
	}( jQuery ));