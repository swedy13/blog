---
layout: case-study
title: "DataQlick"
thumbnail: dataqlick.png
date: 2016-01-01 09:15:51 -0300
categories: case_studies
slides: simple

images:
  - url: /assets/img/companies/dataqlick/DashOriginal.png
    alt: DataQlick Original Dashboard
    title: Original Dashboard
    
  - url: /assets/img/companies/dataqlick/DashCritique.png
    alt: DataQlick Dashboard Critique
    title: Dashboard Critique

  - url: /assets/img/companies/dataqlick/DashWireframe.png
    alt: DataQlick Dashboard Wireframe
    title: Dashboard Wireframe

  - url: /assets/img/companies/dataqlick/DashMockup.png
    alt: DataQlick Dashboard Mockup
    title: Dashboard Mockup

  - url: /assets/img/companies/dataqlick/InvOriginal.png
    alt: DataQlick Original Inventory
    title: Original Inventory
    
  - url: /assets/img/companies/dataqlick/InvCritique.png
    alt: DataQlick Inventory Critique
    title: Inventory Critique

  - url: /assets/img/companies/dataqlick/InvWireframe.png
    alt: DataQlick Inventory Wireframe
    title: Inventory Wireframe

  - url: /assets/img/companies/dataqlick/InvMockup.png
    alt: DataQlick Inventory Mockup
    title: Inventory Mockup
---

{% slide %}

## Resque Bus

### Brian Leonard

##### TaskRabbit
##### 02/17/2014

{% notes %}

Hi, my name is Brian Leonard and I'm the Chief Architect and Technical Cofounder of TaskRabbit. TaskRabbit is a marketplace where neighbors help neighbors get things done.

At TaskRabbit we are using Redis and Resque to do all of our background processing. We've also gone one step further to use these tools to create an asynchronous message bus system that we call Resque Bus.

{% slide %}

### Redis

* Key/Value Store
* Atomic Operations

![Redis Logo](/images/posts/resque-bus-presentation/redis-logo.jpeg)

{% notes %}

I don't have to tell you guys about Redis, but for our purposes the main point is that we can store stuff in it and the operations are atomic.

{% slide %}

## Thanks!

Questions?

{% endslide %}
