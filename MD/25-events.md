# EVENTS
[JS FILE](./25-events.md)
> we use event tag for give clicks on event 
like 
single click to show file 
double click to show 
right click 
so  the table is 

 | event | how to use |
 |-------|------------|
 |click  ->| onclick |
 |Double click ->| ondblclick|
 |right click ->| oncontextmenu|
 |Mouse hover ->| onmouseenter |
 |mouse out -> | onmouseout|
 |mouse down ->| onmousedown|
 
 > so the pattern is to make event 
```javascript
first of all we right this inside the script or js
function event(){
    alert("we also add document.write if we want")
}
then we write this to html body
<body>
       <button onclick="event()">click me for {single click} (onclick)event</button> 
       <button ondblclick="event()">click me for {double click}(ondblclick)event</button>
       <button oncontextmenu="event()">click me for {right click}(oncontextmenu)event</button>
       <button onmouseenter="event()">click me for {mouse enter }(onmouseenter)event</button>
       <button onmouseout="event()">click me for {mouse out}(onmouseout)event</button>
       <button onmousedown="event()">click me for {mouse up}(onmousedown)event</button>
      
</body>
```
---