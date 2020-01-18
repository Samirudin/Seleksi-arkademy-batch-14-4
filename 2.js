// function untuk username
function usernameValidity(username) {
	var letter = /[a-z]\b[^A-Z]/g;
	var char = /[\!\@\#\$\%\^\&\*\_]/g;
	if (username.length > 4 && username.length < 13 && username.match(letter) || username.match(char)) {
		return true;
	} else {
		return false;
	}
}


//function untuk password
function password(str){
	var hurufBesar = /[A-Z]/g;
	var simbol = /[\!\@\#\$\%\^\&\*\_]/g;
	var angka = /[0-9]/g;
	if(str.length == 7 
		&& str.match(hurufBesar).length == 5
		&& str.match(simbol).length == 1
		&& str.match(angka).length == 1) {
		return true;
	} else {
		return false;
	}
};
