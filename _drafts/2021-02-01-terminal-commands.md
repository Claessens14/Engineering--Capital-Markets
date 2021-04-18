---
layout: post
title: Terminal Commands
date: 2021-03-08 15:03:30 +0300
image: computer3.jpg
tags: []
---

Looking for some new terminal commands checkout these..

## code

{% highlight js %}

## calendar

cal -3

## file system

df -h

## powerful ls

ls -lha

## find if process is running

ps axc | grep jekyll [ replace jekyll with program name ]

# or

pgrep jekyll

## Look at laptop processes

top

# i recommend gotop - https://formulae.brew.sh/formula/gotop

# get a website ip address

ping google.ca

# find file

locate pdf # note you may need to create / update db

# grep and regular expression (go to regular expression)

grep "f.x" . # begging and end
grep "f.\*x" # star match any number of previos (starting a none)
grep "f\+x" # match any number (starting at 1)
grep "x$" . # match at end of the line
grep "^s" # match at the beggining
grep "\S" . # any non white space character
grep "\s" . # any white space
grep "https\?" # character before question mark is option
grep "[a-z]" # only want from a->z (any lowercase characters)
grep "[A-Za-z] #any letter

{% endhighlight %}
