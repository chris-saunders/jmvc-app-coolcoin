module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: ['**/*'],
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
          urls: ['http://localhost:8000/app-ci-sample/qunit.html']
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('test', ['connect', 'qunit']);
  grunt.registerTask('travis', 'jshint');

};
