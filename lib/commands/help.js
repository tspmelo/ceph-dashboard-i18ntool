const colors = require('colors');

let help = {
  'default': [
    'Commands:',
    '  merge'.cyan + '            Add missing target tags',
    '  help'.cyan + '             Show this screen',
    '  -v'.cyan + ', ' + '--version'.cyan + '    Display the version',
    '',
    'To learn more about a specific command, type ' + 'i18ntool help <command>'.cyan,
  ],
  'merge': [
    'Usage:',
    '  i18ntool merge -c <filename>'.cyan + '    Use settings from a json file',
    '  i18ntool merge <options>'.cyan,
    '',
    'Options:',
    '  --srcDir'.cyan + ', ' + '--sourceDirectory'.cyan,
    '    (default \'.\') directory where the source file is expected',
    '  --tarDir'.cyan + ', ' + '--targetDirectory'.cyan,
    '    (default \'.\') directory where the target files are expected (usually identical with srcDir)',
    '  --srcFile'.cyan + ', ' + '--sourceFile'.cyan,
    '    (default \'messages.xlf\') source file (relativ to srcDir)',
    '  -l'.cyan + ', ' + '--languages'.cyan,
    '    Comma separated list of languages (relativ to tarDir)',
    '  --removeUnusedIds'.cyan,
    '    (default \'true\') determine if unused IDs should be removed during merge',
    '  -q'.cyan + ', ' + '--quiet'.cyan,
    '    (default \'false\') quiet ouput. Errors will be displayed.',
    '',
    'Add missing target tags.',
    'When using ' + '-c'.cyan + ' or ' + '--config'.cyan + ' it will load the options from a json file.',
    'For more information, see the file ' + 'i18ntool.example.json'.cyan
  ],
  'help': [
    'Usage:',
    '  i18ntool help',
    '  i18ntool help <command>',
    '',
    'Type ' + 'i18ntool help'.cyan + ' to see a list of every command,',
    'or ' + 'i18ntool help <command>'.cyan + ' to learn how a specific command works.'
  ]
};

module.exports = function(args) {
  let output;

  if (typeof args === 'undefined' || args['_'].length <= 1)  {
    // If no command is given, show the default help screen
    output = 'default';
  } else {
    if(typeof help[args['_'][1]] === 'undefined') {
      // If the command doesn't exist, show the default help screen
      output = 'default';
    } else {
      // Show help screen of the given command
      output = args['_'][1];
    }
  }
  
  output = '\n' + help[output].join('\n') + '\n\n';
  process.stdout.write(output);
};
