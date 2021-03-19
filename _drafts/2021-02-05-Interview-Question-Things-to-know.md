---
layout: post
title:  Interview Things to know
date:   2021-03-08 15:03:30 +0300
image:  computer4.jpg
tags:   []
---

# Classes and Objects

[useful link](https://techvidvan.com/tutorials/java-oops-concepts/amp/?epik=dj0yJnU9WVJGNDlqWUlMU0hrTWdNVGdjeHNhdWpONFhwVVJnLWYmcD0wJm49VFczOTdPUnFOanRGdkFTU2NwcEtaUSZ0PUFBQUFBR0FYbG5V)
![]({{site.baseurl}}/img/posts/interview/oop.jpeg)  

# DFS - Depth First Search
[VisuGo]()
Good for traversing cities, view hierarchy, search through sorted letter or numbers. use a stack

#### Python Code
[useful link](https://favtutor.com/blogs/breadth-first-search-python)  

{% highlight js %}

graph = {
  '5' : ['3','7'],
  '3' : ['2', '4'],
  '7' : ['8'],
  '2' : [],
  '4' : ['8'],
  '8' : []
}
visited = [] # List for visited nodes.
queue = []     #Initialize a queue
def bfs(visited, graph, node): #function for BFS
  visited.append(node)
  queue.append(node)
  while queue:          # Creating loop to visit each node
    m = queue.pop(0) 
    print (m, end = " ") 

    for neighbour in graph[m]:
      if neighbour not in visited:
        visited.append(neighbour)
        queue.append(neighbour)
print("Following is the Breadth-First Search")
bfs(visited, graph, '5')    # function calling

{% endhighlight %}
![]({{site.baseurl}}/img/posts/interview/bfs.png)  


# BFS - Breadth First Search
Use a queue
#### Python
{% highlight js %}
graph = { # Using a Python dictionary to act as an adjacency list
  '5' : ['3','7'],
  '3' : ['2', '4'],
  '7' : ['8'],
  '2' : [],
  '4' : ['8'],
  '8' : []
}
visited = set() # Set to keep track of visited nodes of graph.
def dfs(visited, graph, node):  #function for dfs 
    if node not in visited:
        print (node)
        visited.add(node)
        for neighbour in graph[node]:
            dfs(visited, graph, neighbour)
print("Following is the Depth-First Search")
dfs(visited, graph, '5')
{% endhighlight %}
![]({{site.baseurl}}/img/posts/interview/dfs.png)  

# Matching Bracket/Parenthesis Problem
Its best to use a stack.

# Using Hash Tables
Good for..
- keeping track of what you visit, so you don't have to revisit coordinate  
- keep track of numbers in array to sum to something  
- Fibonacci number calculation
As you can see from this [useful link](https://www.edureka.co/blog/hash-tables-and-hashmaps-in-python/) the hashmap is handle with a python dict
#### Python 3 Code
{% highlight js %}
new_dict=dict(Dave = '001' , Ava= '002' , Joe= '003')
print(new_dict)
print(new_dict['Ava'])
print(type(new_dict))
{% endhighlight %}
![]({{site.baseurl}}/img/posts/interview/dict.png)  

# Variables/Pointers Manipulation
So commonly needed to perform algos. i, j at same time. traversing linked list, with one fasting. Palindrome substring in a string
<!-- Python
{% highlight js %}
nano ~/.zshrc
{% endhighlight %} -->

# reverse linked list (duplicates , removing duplicates)
Need to use 3 different pointers
Still need to add this code
<!-- #### Python
{% highlight js %}
.
{% endhighlight %} -->

# Sorting Fundamentals 
This includes.. 
- Quicksort  
- Mergesort  
- Bubblesort techniques  
- knowing the runtime of a sort,time space complexity) O(n)  

Note that python comes with a sorting function that can be invoked
{% highlight js %}
nano ~/.zshrc
{% endhighlight %}

# Recursion
When building this function you need to consider.. 
- checks (ifs) each iteration>  
- calls variables needed?  
- return value. Do you need to return value to root or no?

Note most things can be done with a loop, this takes some practice

#### Python
{% highlight js %}
nano ~/.zshrc
{% endhighlight %}
# custom data structures (object oriented programming)

<!-- #### Python
{% highlight js %}
nano ~/.zshrc
{% endhighlight %} -->

# Binary search
Very Fundamental. Sorted list of integers

#### Python
{% highlight js %}
nano ~/.zshrc
{% endhighlight %}
  


  

   
  

***
# Image
![terminal samle]({{site.baseurl}}/img/posts/terminal.png)

# code
{% highlight js %}
nano ~/.zshrc
{% endhighlight %}

# link
 [profile](https://gist.github.com/hernamesbarbara/1937937), there are many to comb through.


# Quote

> Never put off till tomorrow what may be done day after tomorrow just as well. — Mark Twain


# Line
***
