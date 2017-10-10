---
layout: guide
title: What to do if your wheelie bin is not being emptied regularly
description: A description about solid waste
short-name: solid-waste
guide-summary: We have compiled this guide to help you out in those instances where solid waste is not being removed as expected
did-you-know: According to the <a class="act" target="_blank" href="http://www.dwa.gov.za/Documents/sanitation/17005SC_POLICY_National%20Sanitation%20Policy%202016%20FINAL310117.pdf"> <i class="fa fa-fw fa-gavel" aria-hidden="true"></i> National Sanitation Policy, 2016</a> everyone in South Africa has the right to access to basic sanitation (including refuse / solid waste removal).
---
<div class="guide">
  <div class="description">Follow this guide discover what to do if your black wheelie bin is not being collected on a regular basis. <b>Click on a step for support and resources to help you take action</b>.</div>

  <div class="single-step">
    <a href="1" class="title-box">
      <div class="circle">1</div>
      <div class="title">Ensure your bin is put out on the correct day</div>
    </a>
    <div class="content">
      {% for step in site.steps %}
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
      {% for step in site.steps %}
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
      {% for step in site.steps %}
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
      {% for step in site.steps %}
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
      {% for step in site.steps %}
        {% if forloop.index == 5 %}
          {{ step.content }}
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>