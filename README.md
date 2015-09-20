template2pdf-jade
========================

[![Build Status](https://travis-ci.org/holyshared/template2pdf-jade.svg?branch=master)](https://travis-ci.org/holyshared/template2pdf-jade)


Installation
------------------------

	npm install template2pdf
	npm install template2pdf-jade

Basic usage
------------------------

```js
import jade from 'template2pdf-jade';
import exporter from 'template2pdf';

let values = {
  name: 'jade'
};

exporter(jade({ /* jade options */ })).render('views/content.jade', values).then((result) => {
  result.toFile('/tmp/content.pdf', () => {
	//do something
  });
});
```
