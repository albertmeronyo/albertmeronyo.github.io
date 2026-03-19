---
layout: post
title: "Harmonization efforts"
date: 2014-03-30 17:22:30
description: "Harmonization is a fundamental task in CEDAR to improve census data quality and comparability."
tags: cedar ehumanities harmonization sparql
categories: cedar demos milestones
thumbnail: /assets/img/maps-faq-census_orig_sm.jpg
---

Harmonization is a fundamental task in CEDAR to improve census data quality and comparability. A first release (r1) of harmonized census data is available at the SPARQL endpoint

<http://lod.cedar-project.nl:8080/sparql/cedar>

under the graph group <http://lod.cedar-project.nl/resource/r1/cedar-dataset>.

The harmonization rules that have been used are available in human and machine readable format [here](https://github.com/cgueret/Harmonize/tree/master/rules).

Preliminar studies of harmonized queries on the dataset are also available. [This IPhython notebook](http://nbviewer.ipython.org/urls/raw.githubusercontent.com/cgueret/CEDAR-Analysis/master/Analysis%20of%20the%20raw%20data.ipynb) shows the distribution of dimensions in all census datasets. [This other notebook](http://nbviewer.ipython.org/github/cgueret/CEDAR-Analysis/blob/master/Analysis%20of%20harmonized%20data.ipynb) shows time series charts of simple demographic queries that will be the starting point to debug source data errors, conversion mistakes and harmonization misconceptions.
