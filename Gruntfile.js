module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: ['../**'],
      // tasks: ['test'],
      options: {
        livereload: true
      },
    },
    jshint: {
      files: ['*.js']
    },
    qunit: {
      all: {
        options: {
          urls: ['http://localhost:8000/coolcoin/qunit.html']
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '../'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('test', ['qunit:all']);
  grunt.registerTask('travis', ['jshint', 'qunit:all']);

};
