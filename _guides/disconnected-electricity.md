---
layout: guide
short-title: Disconnected electricity
title: My landlord has disconnected my electricity
description: A guide explaining how a landlord may disconnect your electricity as a way to try to force you out of your home and steps on how you can respond.
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
        <i class="fa-li fa fa-gavel"></i>A landlord or land owner cannot intimidate you to leave the property or force you to move out.
      </li>
      <li>
        <i class="fa-li fa fa-gavel"></i><a href="http://myconstitution.co.za/en/02.html#housing">Section 26(3) of the Constitution</a> states that "no one may be evicted from their home, or have their home demolished, without an order of court made after considering all the relevant circumstances. No legislation may permit arbitrary evictions."
      </li>
      <li>
        <i class="fa-li fa fa-gavel"></i>According to the <a href="https://www.gov.za/sites/www.gov.za/files/a50-99.pdf">Rental Housing Act, 1999</a> and <a href="https://www.westerncape.gov.za/text/2006/5/rental_hous_trib_unfairpractice_regulations.pdf">Section 8(2) of The Unfair Practice Regulations</a> your electricity cannot be cut off, UNLESS:
        <ul>
          <li>There is an emergency</li>
          <li>The landlord needs to do maintenance</li>
          <li>You are in arrears and fail to pay your arrears within 7 days of the landlord letting you know that you should</li>
        </ul>
      </li> 
    </ul>
    <a class="btn btn-primary show-extra"><i class="fa fa-caret-down" aria-hidden="true"></i> Your full rights and responsibilities</a>
  </div>
</div>

<div class="guide panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="description">If you think your landlord may disconnect your electricity as a way to try to force you out of your home, here's what you can do. <b class="hidden-print">Click on a step for support and resources to help you take action.</b></div>
  <div class="panel single-step">
    <div class="panel-heading title-box" role="tab" id="headingOne">
      <div role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div class="circle">1</div>
        <div class="title">Contact your landlord</div>
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
        <div class="title">File a complaint with the Rental Housing Tribunal</div>
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
  <div class="panel single-step">
    <div class="panel-heading title-box" role="tab" id="headingFour">
      <div role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
        <div class="circle">4</div>
        <div class="title">File a Spoliation Order</div>
      </div>
    </div>
    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="panel-body">
        {% for step in site.disconnected-electricity %}
          {% if forloop.index == 4 %}
            {{ step.content }}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>
