---
layout: guide
short-title: Disconnected water
title: My landlord has disconnected my water
description: A guide explaining how a landlord may disconnect your water as a way to try to force you out of your home and steps on how you can respond.
name: disconnected-water
category-link: housing
category: Housing
---
<div class="did-you-know">
  <div class="title">
    <i class="fa fa-question-circle fa-fw" aria-hidden="true"></i> Know your rights
  </div>
  <hr>
  <div class="content">
    <ul class="fa-ul">
      <li>
        <i class="fa-li fa fa-gavel"></i>No person or institution may cut off your access to water. You have a right to water in terms of the Constitution. No one can deny you this right, not even the City of Cape Town.
      </li>

      <li>
        <i class="fa-li fa fa-gavel"></i><a href="https://www.westerncape.gov.za/legislation/bill-rights-chapter-2-constitution-republic-south-africa#27">Section 27(1)(b)</a> of the Bill of rights states that everyone has the right to sufficient food and water 
      </li>>

      <li>
        <i class="fa-li fa fa-gavel"></i><a href="https://www.westerncape.gov.za/legislation/bill-rights-chapter-2-constitution-republic-south-africa#27">Section 27(2)</a> states that The state must take reasonable legislative and other measures, within its available resources, to achieve the progressive realization of each of these rights.
      </li>
    </ul>
    <a class="btn btn-primary show-extra"><i class="fa fa-caret-down" aria-hidden="true"></i> Your full rights and responsibilities</a>
  </div>
</div>

<div class="guide panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="description">If you think your landlord may disconnect your water as a way to try to force you out of your home, here's what you can do. <b class="hidden-print">Click on a step for support and resources to help you take action.</b></div>
  <div class="panel single-step">
    <div class="panel-heading title-box" role="tab" id="headingOne">
      <div role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div class="circle">1</div>
        <div class="title">Contact your landlord</div>
      </div>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        {% for step in site.disconnected-water %}
          {% if forloop.index == 1 %}
            {{ step.content }}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
  <div class="panel single-step">
    <div class="panel-heading title-box" role="tab" id="headingTwo">
      <div role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        <div class="circle">2</div>
        <div class="title">Contact the City of Cape Town</div>
      </div>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        {% for step in site.disconnected-water %}
          {% if forloop.index == 2 %}
            {{ step.content }}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
  <div class="panel single-step">
    <div class="panel-heading title-box" role="tab" id="headingThree">
      <div role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        <div class="circle">3</div>
        <div class="title">Contact a plumber</div>
      </div>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
        {% for step in site.disconnected-water %}
          {% if forloop.index == 3 %}
            {{ step.content }}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
  <div class="panel single-step">
    <div class="panel-heading title-box" role="tab" id="headingFour">
      <div role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
        <div class="circle">4</div>
        <div class="title">File a complaint with the Rental Housing Tribunal</div>
      </div>
    </div>
    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="panel-body">
        {% for step in site.disconnected-water %}
          {% if forloop.index == 4 %}
            {{ step.content }}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
  <div class="panel single-step">
    <div class="panel-heading title-box" role="tab" id="headingFive">
      <div role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
        <div class="circle">5</div>
        <div class="title">File a Spoliation Order</div>
      </div>
    </div>
    <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
      <div class="panel-body">
        {% for step in site.disconnected-water %}
          {% if forloop.index == 5 %}
            {{ step.content }}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>
