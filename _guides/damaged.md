---
layout: guide
short-title: Damaged home
title: My home has been damaged or broken
description: A guide explaining how a landlord may cause damage to your home in the process of trying to evict you and steps on how you can respond.
name: damaged
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
        <i class="fa-li fa fa-gavel"></i>Sometimes a landlord, landowner or private security might break down your home or damage parts of your home so that you are forced to leave. This often happens to people living in shacks or wendy houses, or who are unlawfully occupying buildings. These acts of intimidation and harassment are are illegal in terms of the Rental Housing Act and the Unfair Practice Regulations. Section 9 (1)(d) and (f) of the <a href="https://www.westerncape.gov.za/text/2006/5/rental_hous_trib_unfairpractice_regulations.pdf">unfair practice regulations</a> states that a landlord may not:<br><br>
        (d) "engage in oppressive or unconscionable conduct towards the tenant;" <br>
        (f) "conduct any activity which unreasonably interferes with or limits the rights of the tenant or which is expressly prohibited under the lease, the Act and these regulations, any ordinance, health or safety regulations or any other law;"
      </li>
    </ul>
  </div>
</div>

<div class="guide panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="description">If you are facing eviction and your landlord is damaging your home to try and force you out of your home, here's what you can do. <b class="hidden-print">Click on a step for support and resources to help you take action.</b></div>
  <div class="panel single-step">
    <div class="panel-heading title-box" role="tab" id="headingOne">
      <div role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div class="circle">1</div>
        <div class="title">Collect evidence of the damage</div>
      </div>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        {% for step in site.damaged %}
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
        <div class="title">File a Spoliation Order</div>
      </div>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        {% for step in site.damaged %}
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
        <div class="title">Report the matter to the police</div>
      </div>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
        {% for step in site.damaged %}
          {% if forloop.index == 3 %}
            {{ step.content }}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>
