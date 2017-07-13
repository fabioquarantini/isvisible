# isVisible

A jQuery plugin for detect if element is in device viewport.

## Including files


```html

<!-- jQuery -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- isVisible core JS file -->
<script src="jquery.isvisible.min.js"></script>

```

## Initializing

```javascript

$(document).ready( function() {
  $('.selector').isVisible();
});

```

## Settings
isVisible accepts settings from an object of key/value pairs.

##### Example:
```javascript
$('.selector').isVisible({
  key: value,
  key: value
});
```

## List of settings

#### showClass:
*Boolean*: Add classes to the element when is visible a part ( .is-visible-top ecc.. )

*Default*: `true`

#### removeClass:
*Boolean*: Remove "ShowClass" classes when is out of viewport ( "false" is useful when animations are used only once )

*Default*: `true`

#### offset:
*Integer*: Change the location of the trigger point (All sides and all elements)

*Default*: `0`

#### offsetTop:
*Integer*: Change the location of the top side trigger point (All elements)

*Default*: `0`

#### offsetBottom:
*Integer*: Change the location of the bottom side trigger point (All elements)

*Default*: `0`

#### offsetLeft:
*Integer*: Change the location of the left side trigger point (All elements)

*Default*: `0`

#### offsetRight:
*Integer*: Change the location of the right side trigger point (All elements)

*Default*: `0`

#### classXY:
*String*: Class added to the element when all sides are in viewport

*Default*: `is-visible`

#### classX:
*String*: Class added to the element when left and right sides are in viewport

*Default*: `is-visible-x`

#### classY:
*String*: Class added to the element when top and bottom sides are in viewport

*Default*: `is-visible-y`

#### classTop:
*String*: Class added to the element when top side is in viewport

*Default*: `is-visible-top`

#### classBottom:
*String*: Class added to the element when bottom side is in viewport

*Default*: `is-visible-bottom`

#### classLeft:
*String*: Class added to the element when left side is in viewport

*Default*: `is-visible-left`

#### classRight:
*String*: Class added to the element when right side is in viewport

*Default*: `is-visible-right`

#### dataName:
*String*: Name of the data attribute which sets an offset on all sides ( Works on sigle element )

*Default*: `is-visible-offset`

#### dataNameTop:
*String*: Name of the data attribute which sets a top offset ( Works on sigle element )

*Default*: `is-visible-offset-top`

#### dataNameBottom:
*String*: Name of the data attribute which sets a bottom offset ( Works on sigle element )

*Default*: `is-visible-offset-bottom`

#### dataNameLeft:
*String*: Name of the data attribute which sets a left offset ( Works on sigle element )

*Default*: `is-visible-offset-left`

#### dataNameRight:
*String*: Name of the data attribute which sets a right offset ( Works on sigle element )

*Default*: `is-visible-offset-right`

## Event Hooks
`isVisible` : This event is triggered when element is in the viewport

#### Event extra parameters (strings):

*visiblePart*: Name of the side visible ( xy, x, top, bottom, left, right )

*scrollDirectionY*: Direction of the scroll on Y axis ( up, down)

*scrollDirectionX*: Direction of the scroll on X axis ( left, right)


##### Example:
```javascript
$('.element').on( 'isVisible', function( event, visiblePart, scrollDirectionY, scrollDirectionX  ) {
  if ( visiblePart == "y") {
    // Your code here
  }
});
```

## Credits

Copyright (c) 2017 [Fabio Quarantini](http://www.fabioquarantini.com)

## License

[MIT License](http://opensource.org/licenses/MIT)