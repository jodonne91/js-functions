/*
  This function should accept a single-letter string as a parameter.
  It should return true if the string is a vowel.
  (For the sake of argument, let's make Y count as a consonant today.)
  Otherwise, it should return false.

  Hint: string.toLowerCase()
*/

function isVowel(letter) {

	var vowels = [ 'a', 'e', 'i', 'o', 'u' ];

	return !(vowels.indexOf(letter.toLowerCase()) === -1);
	
}



// 	var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.indexOf(element);

// console.log(isVowel("a"))

/*
  This function should accept a string as a parameter.
  It should return the number of vowels in the string.
  You should make use of the isVowel() function you just wrote.

  Hint: string[0] returns the 1st character in the string
*/

function countVowels(word) {

	var counter = 0;

	for ( var i = 0 ; i < word.length ; i++ )
	{
		if (isVowel(word[i])) {
			counter++;
		}
	}

	return counter;

}
