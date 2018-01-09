---
layout: guide
short-title: Disconnected electricity
title: Disconnected Electricity
description: A guide on how a landlord may disconnect your electricity as a way to try to force you out of your home and steps on how you can respond.
name: disconnected-electricity
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
        <i class="fa-li fa fa-gavel"></i>According to the Rental Housing Act and the Unfair Practice Regulations, your electricity cannot be cut off, UNLESS:
      </li>
    	<ol>
    	  <li>There is an emergency</li>
    	  <li>The landlord needs to do maintenance</li>
    	  <li>You are in arrears and fail to pay your arrears within 7 days of the landlord letting you know that you should. </li>
    	</ol>
    </ul>
    <div class="extra">
      ...
    </div>
    <a class="btn btn-primary show-extra"><i class="fa fa-caret-down" aria-hidden="true"></i> Your full rights and responsibilities</a>
  </div>
</div>

<div class="guide panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="description">If your landlord has disconnected your electricity as a way to try to force you out of your home, here's what you can do. <b class="hidden-print">Click on a step for support and resources to help you take action.</b></div>
  <div class="panel single-step">
    <div class="panel-heading title-box" role="tab" id="headingOne">
      <div role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div class="circle">1</div>
        <div class="title">Check with your landlord if they have cut off your electricity</div>
      </div>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        {% for step in site.disconnected-electricity %}
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
        {% for step in site.disconnected-electricity %}
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
        <div class="title">Submit a complaint form for an Unfair Practice by your landlord to the Housing Tribunal</div>
      </div>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
        {% for step in site.disconnected-electricity %}
          {% if forloop.index == 3 %}
            {{ step.content }}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>
