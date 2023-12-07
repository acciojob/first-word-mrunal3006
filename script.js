function firstWord(s) {
  // your code here
	 // Check if the input string is empty or does not contain any space
  if (str === '' || !str.includes(' ')) {
    return str;
  }

  // Find the index of the first space
  const spaceIndex = str.indexOf(' ');

  // Return the first word, which is all characters up to the first space
  return str.substring(0, spaceIndex);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
