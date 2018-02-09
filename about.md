---
layout: threeD
permalink: /index.html
title: About
class:
  - about
inline-css: css/about-inline.scss
---
<header class="hero threeD-cover">
	<div class="threeD-floaters threeD-fill">
		<p class="hero-subtitle threeD-float">
			Specializing in the construction of resort residences
		</p>
	</div>
</header>

<section class="see-projects">
	<a class="see-projects-link" href="/projects">See our projects</a>
	{% for image in site.data.see-projects %}
		<img height="160" src="{{ image }}" />
	{% endfor %}
</section>

## Vision

In the realm of General Contracting and Construction
Management, Oakes Management, LLC is dedicated to
the care and needs of our clients and consultants.
We’re here to shepherd our client’s dreams, to transform
two-dimensional visions into three-dimensional artistry,
and to devote our time and means to the creation of
spatial beauty.

> As described by the visionary architect Frank Lloyd Wright, 
>
> "The longer I live the more beautiful life becomes.
> If you foolishly ignore beauty, you will soon find yourself without it.
> Your life will be impoverished.
> But if you invest in beauty,
> it will remain with you all the days of your life."

Our founder, Garrette Oakes, has brought together a diverse group of highly skilled individuals to
form Oakes Management, LLC. This unique team works to maintain the traditions of old world
craftsmanship, standards, and values. We practice courtesy, respect, and care. We are
thorough and detailed, pragmatic and problem-solving, and experienced. Experience makes one
skeptical, forward thinking, and analytical. We apply this state of mind to the challenge of
monitoring the job - the liaison, subcontractors, costs, schedule, workmanship, and integrity.
From these core ideals, Oakes Management has shaped its sole purpose; to provide construction
services with a strong commitment to honoring the clients and consultants and providing the best
work possible. We believe only by meeting these ideals does one become successful.

## Details

Beauty is in the details. A well thought of and executed detail can transform a good building to
an extraordinary one. This attention to detail starts with the architect and must be followed
through by seasoned carpenters. Our executive carpenters have decades of experience,
artistry, and know how. They have an in-depth knowledge of techniques and tools that
transforms a simple junction to a critic’s admiration. Their carpentry skills are synonymous to
precision, strength, and creativity.

<div class="detail-images">
	{% for image in site.data.details %}
		<img class="detail-image" height="160" src="{{ image.src }}" alt="{{ image.alt }}" />
	{% endfor %}
</div>

<section class="experience-integrity">
	<h2 class="threeD-header">Experience Integrity</h2>
	{% assign sections = site.about | sort: 'order' %}
	{% for section in sections %}
		{% assign slug = section.title | slugify %}
		{% assign classes = 'threeD-text text' | split: ' ' %}
		{% assign isodd = forloop.index | modulo:2 %}
		{% if isodd == 1 %}
			{% assign classes = classes | push: 'threeD-odd' %}
		{% endif %}
		<div id="{{ slug }}" class="project-cover threeD-cover">
			<img src="{{ section.image }}" class="threeD-hero threeD-pane {{ slug }}-hero">
			<div class="threeD-text-container threeD-floaters threeD-pane">
				<div class="{{ classes | join: ' ' }}" style="background:{{ section.tint }}">
					{{ section.content }}
				</div>
			</div>
		</div>
	{% endfor %}
</section>

## Advantages of Contracting with Oakes Management, LLC

1. We have managed several projects between $50 million to 
	 $191 million. We know how to
   minimize the Owner’s exposure due to problems in administration.
2. We have over 50 years of experience. We know how to minimize the Owner’s exposure to
   construction defects.
3. We have an excellent record in controlling costs and budgets and maintaining schedules.
4. We have an excellent reputation for value engineering which provides our Clients the options
   for savings
5. We know concrete; we have managed a precast concrete plant.
6. We have an ABC license versus a BC license unlike most of our competitors. An ABC license
   certifies the General Contractor is legally authorized and qualified to perform Building,
   Engineering, and Site Work Construction.
7. We have licenses in both Structural and Civil Engineering.
8. We have the ability to perform our own site work, concrete, rough carpentry, and finish
   carpentry with our own crew or the option to subcontract the work out. This gives Owners the
   best options for cost and performance.
9. We lay-out Subcontractors’ work to minimize mistakes through quality control. Most
   Contractors require the Subcontractors to layout their own work which often leads to substandard
   tolerances.
10. We check and monitor the Subcontractors’ work to insure the work is performed properly.

## Our Team
<section class="team">
	{% for bio in site.bios %}
		<div class="bio">
			{{ bio.content }}
		</div>
	{% endfor %}
</section>

<section class="contact">
	<div id="contact" class="project-cover threeD-cover">
		<img src="https://maps.googleapis.com/maps/api/staticmap?markers=color:0x2E3C55|19.809012,-155.991370&size=640x640&zoom=14" class="threeD-hero threeD-pane contact-hero">
		<div class="threeD-text-container threeD-floaters threeD-pane">
			<div class="threeD-text text contact-text" style="background:rgba(46, 60, 85, 0.9)">
				{% capture contact %}{% include contact.md %}{% endcapture %}
				{{ contact | markdownify }}
			</div>
		</div>
	</div>
</section>
