---
layout: guide
short-title: Intimidation
title: My landlord is intimidating me to force me out of my home
description: A guide explaining how a tenant can deal with a landlord who is using intimidation to force them out of their home.
name: intimidation
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
        <i class="fa-li fa fa-gavel"></i>A landlord may try to intimidate you through calls, messages or other ways to make you feel uncomfortable or scared as a tactic to get you to move out. The landlord may also get someone else to intimidate, harass or threaten you.
      </li>
      <li>
        <i class="fa-li fa fa-gavel"></i>Intimidation or harassment by your landlord is illegal in terms of the Rental Housing Act and the Unfair Practice Regulations. <a href="https://www.westerncape.gov.za/text/2006/5/rental_hous_trib_unfairpractice_regulations.pdf">Section 9 (1)(f) of the unfair practice regulations</a> states that a landlord may not "conduct any activity which unreasonably interferes with or limits the rights of the tenant or which is expressly prohibited under the lease, the Act and these regulations, any ordinance, health or safety regulations or any other law;"
      </li>
      <li>
        <i class="fa-li fa fa-gavel"></i>Intimidation and harassment by any person is illegal in terms of the <a href="http://www.justice.gov.za/legislation/acts/2011-017.pdf">Protection from Harassment Act</a>. Under section 2(1) of this act, any person who is facing harassment may file a protection order.
      </li>
    </ul>
    <a class="btn btn-primary show-extra"><i class="fa fa-caret-down" aria-hidden="true"></i> Your full rights and responsibilities</a>
  </div>
</div>

<div class="guide panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="description">If your landlord is using intimidation to try and force you out of your home, here's what you can do. <b class="hidden-print">Click on a step for support and resources to help you take action.</b></div>
  <div class="panel single-step">
    <div class="panel-heading title-box" role="tab" id="headingOne">
      <div role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div class="circle">1</div>
        <div class="title">Demand that your landlord stop harassing you</div>
      </div>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        {% for step in site.intimidation %}
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
        <div class="title">File a complaint form with the rental housing tribunal</div>
      </div>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        {% for step in site.intimidation %}
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
        <div class="title">Apply for a protection order</div>
      </div>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
        {% for step in site.intimidation %}
          {% if forloop.index == 3 %}
            {{ step.content }}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>
