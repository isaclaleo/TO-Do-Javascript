/*
Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  const firstVowel = /[aeiou]/
  const firstPosition = str.search(firstVowel)

  if (firstPosition === 0) {
    return str + "way"
  }else if (firstPosition > 0) {
    return str.slice(firstPosition) + str.slice(0, firstPosition) + "ay"

  }
  return str + "ay";
}

console.log("✨",translatePigLatin("rhythm"));