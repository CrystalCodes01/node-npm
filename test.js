var myChalk = require ('chalk');
var myKirbyDance = require ('kirby-dance');

// style a string
console.log (myChalk.blue('Hello world!'));

// combine styled and normal strings
console.log (myChalk.blue('Hello') + 'World' + myChalk.red('!'));

// compose multiple styles using the chainable API
console.log (myChalk.blue.bgRed.bold('Hello world!'));

// pass in multiple arguments
console.log (myChalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// nest styles
console.log (myChalk.red('Hello', myChalk.underline.bgBlue('world') + '!'));

// nest styles of the same type even (color, underline, background)
console.log (myChalk.green(
    'I am a green line ' +
    myChalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

for (var i = 1; i <= 10; i += 1) {
  console.log("Hello There! #" + myChalk.cyan(i));
}

var kirbyDance = require('kirby-dance');

console.log(myChalk.magenta(kirbyDance(4))); // "<('.'<) (>'.')> <('.'<) (>'.')>"

console.log(kirbyDance(-7)); // "(>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')>"
