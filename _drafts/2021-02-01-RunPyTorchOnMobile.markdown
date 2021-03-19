---
layout: post
title:  Run Pytorch on Mobile
date:   2021-02-02 11:07:40 +0300
image:  stocks2.jpg
tags:   [Engineering, Coding, Swift, Python, PyTorch, Machine Learning, CoreML]
---
## Prerequisite
* pyTorch - v1.5 or higher
* xcode



As of writing March 2020, this deployment wild west, there are several options to do this. pytorch recommended method, pytorch to ONNX to coreml, pytorch to coreml (apple recommend).   
We are going do the pyTorch recommended method cause they have some good supporting docs and code for procedure. 

Before we get to loading the model on the phone we gotta properly save this model into something usuable for mobile.  We are going use this, as our reference trace  [code](https://github.com/pytorch/ios-demo-app/blob/master/HelloWorld/trace_model.py) to save a model, note I edited it a bit below so use this.

{% highlight js %}
import torch
import torchvision
from torch.utils.mobile_optimizer import optimize_for_mobile

model = torchvision.models.mobilenet_v2(pretrained=True)
model.eval()
example = torch.rand(1, 3, 224, 224)
traced_script_module = torch.jit.trace(model, example)
torchscript_model_optimized = optimize_for_mobile(traced_script_module)
torchscript_model_optimized.save("model.pt")
{% endhighlight %}

# Create an XCode project
Then go to terminal and cd into it. I recommend open a code edittor for this part.
 
 # Loading the Model
 Looking at the pyTorch recommended project, we can see how they [load](https://github.com/pytorch/ios-demo-app/blob/master/HelloWorld/HelloWorld/HelloWorld/ViewController.swift) the model.pt generated in the steps earlier.  

 - look at quantization
 - look at lay fusion

 
 
 
