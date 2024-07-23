let jsonData = {
  "Book": "The Last Lecture",
  "Author": "Randy Pausch",
  "Published": "2007",
  "Genre": "biography",
  "Chapters": 15
};



function makeStr(data) {
  //using template literals
  let bookString = `The book "${data.Book.toLowerCase()}" was published in ${data.Published} by ${data.Author.toLowerCase()}, the book consists of ${data.Chapters} chapters and genre is ${data.Genre}.`;

  return bookString;
}

let resultString = makeStr(jsonData);
console.log(resultString);
