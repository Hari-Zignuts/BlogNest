const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const DOMPurify = createDOMPurify(new JSDOM().window);

const sanitizeDescription = (description) => {
    return DOMPurify.sanitize(description);
}


module.exports = sanitizeDescription;