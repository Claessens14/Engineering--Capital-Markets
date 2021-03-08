---
layout: post
title:  Run Pytorch on Mobile
date:   2021-02-02 11:07:40 +0300
image:  stocks2.jpg
tags:   [Engineering, Coding, Swift, Python, PyTorch, Machine Learning, CoreML]
---

If you haven't seen my getting started in pytorhc yet, chekc it out here.


So in this deployment wild west, there are several options to do this. pytorch recommended method, pytorch to ONNX to coreml, pytorch to coreml (apple recommend).


We are going do the pyTorch recommended method cause they have some good supporting docs and code for procedure. 

Before we get to loading the model on teh phone we gotta properly save this model into something usuable for mobile. 

````
import pyTorch





````