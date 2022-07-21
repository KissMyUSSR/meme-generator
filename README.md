# Meme Generator website with React

Deploy: https://kissmyussr.github.io/meme-generator/

Technologies used: React+js, scss, Canvas API, imgflip API

## About this project

This website uses imgflip API to fetch popular meme templates or upload it locally. After which it imploys Canvas API to render an image.
It stores information on all the changes to the original template: positioning, font, color and other settings for all the text boxes and filters applied to an image.
After that using Canvas API it consumes all the data and applies the changes.
There is a margin of error in rendering since Canvas API can't exactly use css data.
There were major hurdles that I've run across while making this project. More on that below.

## Issues I've run across

First and foremost imgflip API sucks.
Initially I didn't intend to use Canvas API, I hoped that imgflip API could do all the rendering since it promises to be able to do so.
But the reality is that the API they provide for rendering is fatally imprecise and documentation is so lacking that it's almost nonexistent.
I thought of abandoning the project entirely but I just couldn't throw away everything that I had already done at the time.
Although there is almost nothing left from what it was originally.

Also I should note that Canvas API is quite quirky and I had to think of many workarounds to make the rendered image at least similar to what it should be.
