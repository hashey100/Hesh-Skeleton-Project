// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks


  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
         options: {
           mangle:true
         },
       my_target: {
         files: {
           'src/js/script.min.js': 'src/js/script.js'
         }
       }
     },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'src/css/style.css': 'src/css/style.scss'
        }
      }
    },
    // configure cssmin to minify css files ------------------------------------
   cssmin: {
     options: {
       banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
     },
     build: {
       files: {
         'src/css/style.min.css': 'src/css/style.css',
       }
     }
   },
    watch: {
      stylesheets: {
        files: ['src/css/style.css', 'src/css/style.scss'],
        tasks: ['sass','cssmin']
      },  // for scripts, run jshint and uglify
      scripts: {
        files: 'src/**/*.js',
        tasks: ['uglify']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'src/js/*.js',
            'src/css/*.css',
            'src/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './src'
        }
      }
    }

  });

  grunt.registerTask('dev', ['browserSync', 'watch']);

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

};
