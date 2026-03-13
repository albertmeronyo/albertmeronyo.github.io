---
layout: post
title: "Talk of Europe Creative Camp"
date: 2014-10-29 15:10:00
description: "On last October 7th and 8th CEDAR joined the Talk of Europe Creative Camp, in the Nederlands Instituut voor Beeld en Geluid (NISV) in Hilversum."
tags: cedar ehumanities linked-parliament-data linked-politics talk-of-europe
categories: cedar hackathons meetings uncategorized workshops
---

[![2014-10-07 09.32.24](http://www.cedar-project.nl/wp-content/uploads/2014-10-07-09.32.24-150x150.jpg)](http://www.cedar-project.nl/wp-content/uploads/2014-10-07-09.32.24.jpg)On last October 7th and 8th CEDAR joined the [Talk of Europe](http://www.talkofeurope.eu/) Creative Camp, in the [Nederlands Instituut voor Beeld en Geluid](http://www.beeldengeluid.nl/) (NISV) in Hilversum. Talk of Europe is a CLARIN project between the VU University Amsterdam, DANS, the Erasmus University Rotterdam and NISV to achieve three goals: 1) translate the European Parliament proceedings into CLARIN standards; 2) to explore how linked data can be exploited by humanities scholars; and 3) to create tools for scholars to analyse linked datasets.

CEDAR joined these days because of our shared interest in the History of Europe and in Semantic Web technologies to publish such History as Linked Open Data. Moreover, the hackathon gave us the opportunity to develop prototypes that help us understand change of meaning over time in both datasets, one of the primary goals of CEDAR.

To this end, we developed two small snippets. The first is a straightforward use of SPARQL to (roughly) determine the varying importance of topics (i.e. titles in agenda items of parliament debates, see [data model](http://www.talkofeurope.eu/2014/08/update-datamodel/)). Source code and resulting data are available [here](https://github.com/albertmeronyo/talkofeurope). On a per-year basis users can explore how discussed issues in Europe fluctuated across years. Interestingly, some of these topics developed in such a way that they were split into other subtopics, increasing the level of concretion in their content. That made us think that, content-wise, these debates actually contain multiple layers of discourse.

[![2014-10-08 10.11.10](http://www.cedar-project.nl/wp-content/uploads/2014-10-08-10.11.10-150x150.jpg)](http://www.cedar-project.nl/wp-content/uploads/2014-10-08-10.11.10.jpg)To corroborate such hypothesis, we wrote another small tool exploiting [David Blei](http://www.cs.princeton.edu/~blei/)'s Latent Dirichlet Allocation (LDA). To make things easier, we condensed about 100 lines of code of the [gensim Python library](http://radimrehurek.com/gensim/) in a one-line, command-line executable that makes the analysis of topics in corpora easier (available [here](https://github.com/albertmeronyo/LDA)). Repeated experiments over various SPARQL resultsets against the transcribed speeches revealed that, at least, for each title agenda items contain two layers of discourse: discussion about the domain itself (e.g. human rights), and another more focused on administration, transactions and the operational level (this is, technical stuff that needs to be discussed along, independently of the topic).

Overall two days of great profit, interesting insight in a fundamental application of Linked Data (namely, how it can help us improve our interaction with the government and policy makers) and useful networking.
