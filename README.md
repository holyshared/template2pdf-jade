[![Stories in Ready](https://badge.waffle.io/holyshared/template2pdf-jade.png?label=ready&title=Ready)](https://waffle.io/holyshared/template2pdf-jade)
template2pdf-jade
========================

[![Build Status](https://travis-ci.org/holyshared/template2pdf-jade.svg?branch=master)](https://travis-ci.org/holyshared/template2pdf-jade)
[![Coverage Status](https://coveralls.io/repos/holyshared/template2pdf-jade/badge.svg?branch=master&service=github)](https://coveralls.io/github/holyshared/template2pdf-jade?branch=master)
[![Dependency Status](https://www.versioneye.com/user/projects/55feb01b601dd9001500003d/badge.svg?style=flat)](https://www.versioneye.com/user/projects/55feb01b601dd9001500003d)

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
