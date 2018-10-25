# SuperDiv
A div with superpowers for [react](https://reactjs.org/), powered by [styled-components](https://www.styled-components.com/)

Add helpful props to your components by extending SuperDiv

## Abilities

### Responsive
Almost all props are responsive friendly, just add one of this suffix to your prop: `Xs`, `Sm`, `Md`, `Lg`
It uses [bootstrap breakpoints](https://getbootstrap.com/docs/3.3/css/#grid-options)

### Grid
Based on [flexboxgrid](http://flexboxgrid.com/)

Name | Type | Description | Responsive suffix
--- | ---| --- | ---
container | Boolean | It uses bootstrap size | 
containerFluid | Boolean | Full width container | 
row | Boolean | A classic row | 
reverse | Boolean | Reverse the columns of this row | 
noGutters | Boolean | Remove the gutter of the row and children cols, useful for nested rows/cols | 
noGutters | Boolean | Remove the gutter of the row and children cols, useful for nested rows/cols | 
col | Boolean, Number | Up to 12 columns or full width | ✓ 
colOffset | Number | Offset a column | ✓ 
start | Boolean | Align children to the start of your SuperDiv | ✓ 
center | Boolean | Center horizontally children of your SuperDiv | ✓ 
end | Boolean | Align children to the end of your SuperDiv | ✓ 
top | Boolean | Align children to the top of your SuperDiv | ✓ 
middle | Boolean | Center vertically children of your SuperDiv | ✓ 
bottom | Boolean | Align children to the bottom of your SuperDiv | ✓ 
around | Boolean | Children of your SuperDiv are evenly distributed with equal space around them | ✓ 
between | Boolean | Children of your SuperDiv are evenly distributed | ✓ 
first | Boolean | Reorder your SuperDiv to the first position | ✓ 
last | Boolean | Reorder your SuperDiv to the last position | ✓ 

### Display
Helper to set css display to your SuperDev, based on [bootstrap](https://getbootstrap.com/docs/4.1/utilities/display/)

Name | Type | Description | Responsive suffix
--- | ---| --- | ---
dNone | Boolean | Hide your SuperDiv | ✓ 
dBlock | Boolean | Display your SuperDiv as `block` | ✓ 
dInlineBlock | Boolean | Display your SuperDiv as `inline-block` | ✓ 
dInline | Boolean | Display your SuperDiv as `inline` | ✓ 
dTable | Boolean | Display your SuperDiv as `table` | ✓ 
dTableRow | Boolean | Display your SuperDiv as `table-row` | ✓ 
dTableCell | Boolean | Display your SuperDiv as `table-cell` | ✓ 
dFlex | Boolean | Display your SuperDiv as `flex` | ✓ 
dInlineFlex | Boolean | Display your SuperDiv as `inline-flex` | ✓ 

### Spacing
Add padding and margin to your SuperDiv

Name | Type | Description | Responsive suffix
--- | ---| --- | ---
margin | Number, [Number] | Add `margin`, array work as same as css shorthand property | ✓ 
marginTop | Number | Add `margin-top` | ✓ 
marginRight | Number | Add `margin-right` | ✓ 
marginBottom | Number | Add `margin-bottom` | ✓
marginLeft | Number | Add `margin-left` | ✓ 
padding | Number, [Number] | Add `padding`, array work as same as css shorthand property | ✓ 
paddingTop | Number | Add `padding-top` | ✓ 
paddingRight | Number | Add `padding-right` | ✓ 
paddingBottom | Number | Add `padding-bottom` | ✓
paddingLeft | Number | Add `padding-left` | ✓ 
noMargin | Boolean | Reset `margin` | ✓ 
noPadding | Boolean | Reset `padding` | ✓ 
