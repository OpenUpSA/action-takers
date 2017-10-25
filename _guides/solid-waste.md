---
layout: guide
title: What to do if your wheelie bin is not being emptied regularly
description: A description about solid waste
name: solid-waste
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
      {% for step in site.solid-waste %}
        {% if forloop.index == 1 %}
          {{ step.content }}
        {% endif %}
      {% endfor %}
    </div>
  </div>
  <div class="single-step">
    <a href="2" class="title-box">
      <div class="circle">2</div>
      <div class="title">If you are putting your refuse out on the correct day and it is still not being collected, report the issue to the city</div>
    </a>
    <div class="content">
      {% for step in site.solid-waste %}
        {% if forloop.index == 2 %}
          {{ step.content }}
        {% endif %}
      {% endfor %}
    </div>
  </div>
  <div class="single-step">
    <a href="3" class="title-box">
      <div class="circle">3</div>
      <div class="title">If you have reported the fault and your refuse is still not being collected, enlist the assistance of your ward councillor</div>
    </a>
    <div class="content">
      {% for step in site.solid-waste %}
        {% if forloop.index == 3 %}
          {{ step.content }}
        {% endif %}
      {% endfor %}
    </div>
  </div>
  <div class="single-step">
    <a href="4" class="title-box">
      <div class="circle">4</div>
      <div class="title">Still no luck after talking to your ward councillor? These organisations can assist</div>
    </a>
    <div class="content who-can-help">
      <div class="partners">
        {% for who in site.who-can-help %}
          {% if who.name == "solid-waste" %}
            {% for partner in who.partners %}
              <div class="single-partner">
                <div class="row">
                  <div class="col-md-3 logo">
                    <a target="_blank" href="{{ partner.url }}"><img src="{{ partner.image }}"></a>
                  </div>
                  <div class="col-md-9 summary">
                    <div><a target="_blank" href="{{ partner.url }}"><i class="fa fa-fw fa-link" aria-hidden="true"></i>website</a></div>
                    <div><a href="tel:{{ partner.number }}"><i class="fa fa-fw fa-phone" aria-hidden="true"></i>{{ partner.number }}</a></div>
                    <div><a href="mailto:{{ partner.email }}"><i class="fa fa-fw fa-envelope" aria-hidden="true"></i>{{ partner.email }}</a></div>
                  </div>
                </div>
                <div class="description">{{ partner.description }}</div>
              </div>
            {% endfor %}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>