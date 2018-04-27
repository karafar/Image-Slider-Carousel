4/28/2018

I made this image carousel/slider. I had some inspiration from https://www.youtube.com/watch?v=KkzVFB3Ba_o

The jquery is self reliant since all the variables are defined from the HTML elements and CSS properties.

In order to add a new image just duplicate a line, add the class 'img"POS"'. Where "POS" is the position in the list starting from zero.

Be sure to update the width of the ul which is the class 'slides. The rule can be found in the style sheet under
".slider-container .slides". To update it simply multiple the number of images to the width of the container within the stated class.
This is done in the calc() function.

To add more images, be sure to read the comments within the HTML file.

You can reach me on my twitter @FaridKaradsheh
