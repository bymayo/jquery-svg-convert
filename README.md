<img src="https://raw.githubusercontent.com/bymayo/svg-convert/master/screenshots/icon.png" width="50">

# SVG Convert

> This plugin was previously called 'Shape SVG Convert'. When updating please note the plugin name and options have changed slightly.

SVG Convert is a jQuery plugin that takes an `.svg` image (`<img>`) and converts it in to raw SVG code (`<svg>`) 

It is useful when dealing with Content Management Systems (CMS) where users upload `.svg` files. It allows you to then interact with the raw code, changing fills, strokes etc within the sites CSS.

## Usage

> **Important: SVG's can only be converted when ran on a server environment. "Cross Origin Requests" fail on local environments.**

## Getting Started

### Install

The simplest way to get up and running is to copy the `svgConvert.min.js` file from `dist` and place it in to your `js` folder inside your project. 

Insert the code below before your `</body>` tag.

```html
<script src="js/svgConvert.min.js"></script>
```

To initialise the plugin, use the code below in your JS files.

```javascript
$('.svg-convert').svgConvert();
```
The SVG Convert class `.svg-convert` needs to just be added to .svg's that you want converting from images, to raw code.

```html
<img src="images/monkey.svg" class="svg-convert">
```

This will then convert the image. Any attributes (E.g. class, id, data- etc) you add to the image will be carried across after it has been converted (See `Options` below for more information)

## Options

### General

<table>
	<tr>
		<td><strong>Name</strong></td>
		<td><strong>Type</strong></td>
		<td><strong>Default Value</strong></td>
		<td><strong>Description</strong></td>
	</tr>
	<tr>
		<td>svgCleanupAttr</td>
		<td>array</td>
		<td>['width','height','id','x','y',
		'xmlns','xmlns:a','xmlns:xlink',
		'xml:space','enable-background',
		'version','style']</td>
		<td>When converting to svg the script removes any attributes on the svg set inside this array. Use this to remove these attributes.</td>
	</tr>
	<tr>
		<td>imgIncludeAttr</td>
		<td>boolean</td>
		<td>true</td>
		<td>Any attributes (class, id, data-, width etc) you add to the image before it gets converted will be added to the svg after completion.</td>
	</tr>
	<tr>
		<td>imgCleanupAttr</td>
		<td>array</td>
		<td>['alt','src']</td>
		<td>If you don't want certain attributes from the image to be added on to the svg then add them in to the array</td>
	</tr>
	<tr>
		<td>removeClass</td>
		<td>boolean</td>
		<td>true</td>
		<td>Removes the selector class from the svg after it's been converted. In the example above, this would remove .svg-convert from the class attribute</td>
	</tr>
	<tr>
		<td>addClass</td>
		<td>string</td>
		<td>svg-converted</td>
		<td>After the image has been converted you can optionally add a class to the svg</td>
	</tr>
	<tr>
		<td>onComplete</td>
		<td>function</td>
		<td>null</td>
		<td>Callback that is called when all SVG's have been converted</td>
	</tr>
</table>

##Roadmap
- Ability to set options on images with a `data` attribute.