/*put the submenu's special class name as arguments, if find a match then add the show class
to the submenu*/
var arrays = new Array(".locations",".about",".media");
//store opended submenu
var openedmenu;
function dropDown(tagId) {
  if(openedmenu!=null){
    //hide the previous opened submenu
    openedmenu.classList.remove("show");
  }
  for (var i = 0; i < arrays.length; i++) {
    //console.log(tagId);
    if (arrays[i] == tagId) {
      //console.log(arrays[i]);
      document.querySelector(arrays[i]).classList.toggle("show");
      //record the opened submenu
      openedmenu=document.querySelector(arrays[i]);
    }
  }

}
