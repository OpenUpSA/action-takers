---
layout: guide
short-title: Wheelie bins
title: Black wheelie bins
description: A guide on what to do if your black wheelie bin is not being collected on a regular basis
name: wheelie-bins
category-link: solid-waste
category: Solid Waste
---
<div class="did-you-know">
  <div class="title">
    <i class="fa fa-question-circle fa-fw" aria-hidden="true"></i> Did you know?
  </div>
  <hr>
  <div class="content">
    <ul class="fa-ul">
      <li>
        <i class="fa-li fa fa-gavel" aria-hidden="true"></i> According to the <a target="_blank" href="http://www.dwa.gov.za/Documents/sanitation/17005SC_POLICY_National%20Sanitation%20Policy%202016%20FINAL310117.pdf"> National Sanitation Policy, 2016</a> everyone in South Africa has the right to access to basic sanitation (including refuse / solid waste removal).
      </li>
      <li>
        <i class="fa-li fa fa-gavel" aria-hidden="true"></i>Your municipality is responsible for ensuring adequate services are delivered to all residents
      </li>
    </ul>
    <ul class="fa-ul extra visible-print">
      <li>
        <i class="fa-li fa fa-trash" aria-hidden="true"></i> In Cape Town, the <a href="http://www.capetown.gov.za/Departments/Solid%20Waste%20Management%20Department" target="_blank">Department of Solid Waste</a> is responsible for the collection and disposal of waste, area cleaning, preventing waste and pollution, and minimising waste.
      </li>
      <li>
        <i class="fa-li fa fa-phone" aria-hidden="true"></i> You can phone the department at <a href="tel:0860103089">0860 103 089</a>
      </li>
      <li>
        <i class="fa-li fa fa-envelope" aria-hidden="true"></i>Emailing them is also possible at <a href="mailto:wastewise.user@capetown.gov.za">wastewise.user@capetown.gov.za</a>
      </li>
    </ul>
    <a href="../rights-responsibilities.html" class="btn btn-primary show-extra hidden-print"><i class="fa fa-caret-down" aria-hidden="true"></i> Your full rights and responsibilities</a>
  </div>
</div>

<div class="guide panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="description">Follow this guide to discover what to do if your black wheelie bin is not being collected on a regular basis. <b class="hidden-print">Click on a step for support and resources to help you take action.</b></div>
  <div class="panel single-step">
    <div class="panel-heading title-box" role="tab" id="headingOne">
      <div role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div class="circle">1</div>
        <div class="title">Ensure your bin is put out on the correct day</div>
      </div>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        {% for step in site.wheelie-bins %}
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
        <div class="title">If you are putting your refuse out on the correct day and it is still not being collected, report the issue to the city</div>
      </div>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        {% for step in site.wheelie-bins %}
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
        <div class="title">If you have reported the fault and your refuse is still not being collected, enlist the assistance of your ward councillor</div>
      </div>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
        {% for step in site.wheelie-bins %}
          {% if forloop.index == 3 %}
            {{ step.content }}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>
