// This module makes a call to the Open Library API
"use strict";

let $ = require("jquery");

let booksGetter = (query) => {
    let url = `https://openlibrary.org/search.json?title=${query}&limit=10`;
      return $.ajax({
      url: url,
      dataType: "json"
    });
};

module.exports = {booksGetter};
