window.hljs = require('highlight.js/lib/core');
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('c', require('highlight.js/lib/languages/c'));
hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('diff', require('highlight.js/lib/languages/diff'));
hljs.registerLanguage('go', require('highlight.js/lib/languages/go'));
hljs.registerLanguage('ini', require('highlight.js/lib/languages/ini'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('less', require('highlight.js/lib/languages/less'));
hljs.registerLanguage('makefile', require('highlight.js/lib/languages/makefile'));
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));
hljs.registerLanguage('plaintext', require('highlight.js/lib/languages/plaintext'));
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
hljs.registerLanguage('rust', require('highlight.js/lib/languages/rust'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));
hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
});
