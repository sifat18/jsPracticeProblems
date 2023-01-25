const removeVowels = (str) => {
  const lowerCase = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  // console.log(lowerCase)

  for (let char of lowerCase) {
    if (!vowels.includes(char)) {
    
      result += char;
    }
  }
  console.log(result) ;
};
removeVowels("EducaTion");
