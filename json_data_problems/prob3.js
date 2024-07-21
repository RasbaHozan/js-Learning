let jsonData = {
    "Book": "The Last Lecture",
    "Author": "Randy Pauch",
    "Published": "2007",
    "Genre": "biography",
    "Chapters": 15
  };
  
  let String = `"The book "${jsonData.Book.toLowerCase()}"was published in ${jsonData.Published} 
  by ${jsonData.Author.toLowerCase()}, the book consists of ${jsonData.Chapters} chapters and genre is ${jsonData.Genre}".`;
  
  console.log(String);
  