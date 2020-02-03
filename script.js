// Javascript functions to output text
      
// var bool = true;

// Text checks checks for length and reverses it for output
function Text() {
  var top, bottom, t_length, b_length, text;
  top = document.getElementById("top").value;
  bottom = document.getElementById("bottom").value;
  t_length = top.length;
  b_length = bottom.length;

  if (t_length % 2 == 1) {
    top = Padding(top, t_length);
    t_length = top.length;
  } 
  if (b_length % 2 == 1) {
    bottom = Padding(bottom, b_length);
    b_length = bottom.length;
  }

  top = Reverse(top, t_length);
  bottom = Reverse(bottom, b_length);

  text = top + "<br>" + bottom;
  
  document.getElementsByClassName("GreenOutput")[0].innerHTML = text;
}

// toggle the textcolour boolean, true == Green, false == Blue
// function Toggle(){
//   bool = !bool;
// }
      
// Padding duplicates the middle character of odd length strings
function Padding(str, length) {
  var pos, mid;
  pos = length / 2;
  mid = str.substring(pos, pos + 1);
  str = str.substring(0,pos + 1) + mid + str.substring(pos + 1);
  return str;
}

// Reverse modifies the text so that the second half is reversed
function Reverse(str, full_length) {
  var front, back, i, size;
  var reversed = "";
  front = str.substring(0, full_length / 2);
  back = str.substring(full_length / 2);
  
  size = back.length;
  
  for (i = 0; i < size + 1; i++ ) {
    reversed += "<backward>" + back.charAt(i) + "</backward>";
  } 

  str = front + reversed;
  return str;
}
