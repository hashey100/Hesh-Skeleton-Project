<h1>Hesh's Grunt Startup Project</h1>

<h2>How to setup</h2>
<pre>
<code>
cd 'directory' <br>
git clone this repo
</code>
</pre>

<h2>To Build Project</h2>
<pre>
<code>
>> npm install </br>
open terminal </br>
>> grunt 
</code>
</pre>
<ul>
<li>Minifies CSS & JS files</li>
<li>Minifies images</li>
</ul>

<h2>How to run</h2>
<pre>
<code>
grunt dev
</code>
</pre>
<p>This project uses browserSync and grunt-contrib-watch so when <br>
live changes are made to the index.html file or css file it syncs up automatically. </p>

<h3>Packages used</h3>
<p>
Uglify
<a href="https://github.com/gruntjs/grunt-contrib-uglify">grunt-contrib-uglify</a>
<br>
SASS compiler
<a href="https://github.com/gruntjs/grunt-contrib-sass">grunt-contrib-sass</a>
<br>
Minify CSS
<a href="https://github.com/gruntjs/grunt-contrib-cssmin">grunt-contrib-cssmin</a>
<br>
Minify images
<a href="https://github.com/gruntjs/grunt-contrib-imagemin">grunt-contrib-imagemin</a>
<br>
Watch live updates 
<a href="https://github.com/gruntjs/grunt-contrib-watch">grunt-contrib-watch</a>
</p>
