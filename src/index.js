const crel = require('crel');
const doc = require('doc-js');
const createStorageGuest = require('cross-domain-storage/guest');

const instructions = crel(
    'div',
    {
        class: 'instructions',
    },
    crel('h3', 'cross-domain-storage guest'),
);

doc.ready(function() {
    crel(document.body, instructions);

    var storageGuest = createStorageGuest('https://nervehammer.github.io/xdstoragetest-host/');

    storageGuest.get('foo', function(error, data) {
        console.log('Guest callback: ', error, data);
    });

    storageGuest.set('foo', 'ggwp', function(error, data) {
        console.log('Set callback:', error, data);
    });
});