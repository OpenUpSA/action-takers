---
layout: guide
title: Access to education
description: A description about access to education
name: access-education
guide-summary: We have compiled this guide to help you to get your child educated if they have been denied access to education due to additional support needs.
did-you-know: According to the <a class="act" target="_blank" href="https://www.acts.co.za/south-african-schools-act/index.html"> <i class="fa fa-fw fa-gavel" aria-hidden="true"></i> Basic Education Laws Amendment Act, 2011</a> every child in South Africa has the right to an education. If your child has been denied access to education because they have special needs, you can challenge this.
---
<div class="guide">
  <div class="description">Follow this guide to overcome barriers to learning and get your child the education they deserve. <b>Click on a step for support and resources to help you take action</b>.</div>

  <div class="single-step">
    <a href="1" class="title-box">
      <div class="circle">1</div>
      <div class="title">Get a letter from the school(s) stating the reasons why admission has been declined</div>
    </a>
    <div class="content">
      {% for step in site.access-education %}
        {% if forloop.index == 1 %}
          {{ step.content }}
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <div class="comment"><b>If all schools reject your application</b>, follow this appeal process:</div>

  <div class="single-step">
    <a href="2-1" class="title-box">
      <div class="circle">2.1</div>
      <div class="title">Write a letter of appeal to the MEC for education</div>
    </a>
    <div class="content">
      {% for step in site.access-education %}
        {% if forloop.index == 2 %}
          {{ step.content }}
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <div class="single-step">
    <a href="2-2" class="title-box">
      <div class="circle">2.2</div>
      <div class="title">Alternatively, write a letter of appeal to the District Director</div>
    </a>
    <div class="content">
      {% for step in site.access-education %}
        {% if forloop.index == 3 %}
          {{ step.content }}
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <div class="single-step">
    <a href="3" class="title-box">
      <div class="circle">3</div>
      <div class="title">The MEC will launch an investigation into your case</div>
    </a>
    <div class="content">
      {% for step in site.access-education %}
        {% if forloop.index == 4 %}
          {{ step.content }}
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <div class="single-step">
    <a href="4" class="title-box">
      <div class="circle">4</div>
      <div class="title">A meeting will be set up to discuss your child's needs</div>
    </a>
    <div class="content">
      {% for step in site.access-education %}
        {% if forloop.index == 5 %}
          {{ step.content }}
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>