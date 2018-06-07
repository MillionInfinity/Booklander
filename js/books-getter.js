// This module makes a call to the Open Library API
"use strict";

let $ = require("jquery");

let booksGetter = (query) => {
    // Link to books search API; no API key needed.  "query" will be the search string obtained from the input field
    let url = `https://openlibrary.org/search.json?title=${query}&limit=10`;
    // Returns ajax promise
    return $.ajax({
    // Where the request is being sent
    url: url,
    // Specifies the type of data expected back from the server (JavaScript Object)
    dataType: "json"
    });
};

module.exports = {booksGetter};