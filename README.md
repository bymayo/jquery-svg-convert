#Shape SVG Convert
http://twitter.com/madebyshape

##Description

jQuery plugin that takes an .svg image and coverts it in to SVG code. Very useful when dealing with Content Management Systems (CMS) where users upload .svg files. Allowing you to interact with the raw code, changing fills, strokes etc.

##Usage

Note: This requires jQuery 1.10.x to work correctly. This is not included in the repo but can be downloaded from http://jquery.com or from a Google CDN - https://developers.google.com/speed/libraries/#jquery

###Installing

```html
<script>
	$(document).ready(function(){
		$('.svg-convert').shapeSvgConvert();
	});
</script>
```

##Options

### General

<table>
	<tr>
		<td><strong>Name</strong></td>
		<td><strong>Type</strong></td>
		<td><strong>Default Value</strong></td>
		<td><strong>Description</strong></td>
	</tr>
	<tr>
		<td>debug</td>
		<td>boolean</td>
		<td>false</td>
		<td>Shows debugging information in the javascript console.</td>
	</tr>
	<tr>
		<td>cleanUp</td>
		<td>array</td>
		<td>['width','height','id','x','y','xmlns:xlink','xml:space','enable-background','version']</td>
		<td>When converting to SVG code the script tidies up attributes on the <svg> element. Use this to remove these attributes.</td>
	</tr>
</table>


##Roadmap
---------