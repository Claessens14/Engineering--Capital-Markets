---
layout: post
title:  How To Add Some Colour To Your Terminal
date:   2021-02-05 15:03:30 +0300
image:  computer5.jpg
tags:   [Mac, Terminal]
---
Looking to add some colour to your terminal? Follow these steps..   

![terminal samle]({{site.baseurl}}/img/posts/terminal.png)

First open the system preferences and select a theme, I chose green as scene above. Reboot your terminal. After the we will look at colouring the prompt.

![terminal perference]({{site.baseurl}}/img/posts/terminal_preferences.png)


After [Mac OS Catalina](https://www.macobserver.com/tips/quick-tip/macos-catalina-terminal-bash/) the default terminal is Z shell. Run the following command to access your terminal profile..  

{% highlight js %}
nano ~/.zshrc
{% endhighlight %}

Note if you are using a bash terminal, your will want to use the .bashrc instead.  
{% highlight js %}
export CLICOLOR=1
export LSCOLORS="Gxfxcxdxbxegedabagacad"
export GREP_OPTIONS='--color=auto'

# cd Path/You/want/to/go/to/on/start
{% endhighlight %}

Reboot and you should see colour now. If you like, Uncomment the last line, and enter a default path command. I included Grep in there, I hope to add a tutorial on that soon, its fast and useful.  
If you would like to see more commands, checkout this persons [profile](https://gist.github.com/hernamesbarbara/1937937), there are many to comb through.
