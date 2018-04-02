<<<<<<< HEAD
"use strict";
let $ = require('../lib/node_modules/jquery');

function getBooks(searchBooks) {
    return $.ajax({
        url: `http://openlibrary.org/search.json?q=${searchBooks}&limit=10`
    });
}




module.exports = { getBooks };
=======

"use strict";
>>>>>>> ca82b927948b826a526c86db4d056b04850245b8
