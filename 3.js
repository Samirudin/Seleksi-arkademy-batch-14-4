function cek_kata(str) {
  var count = 0;
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
  
    if (words[i] != "") {
      count += 1;
    } 
}
return (count) + '/' + words.length;
};