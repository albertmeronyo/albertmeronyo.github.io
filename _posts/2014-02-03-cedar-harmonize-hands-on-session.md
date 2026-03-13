---
layout: post
title: "CEDAR Harmonize, hands-on session"
date: 2014-02-03 16:53:13
description: "The 507 census tables contain several dimensions, which correspond to the column and row headers with the properties (gender, marital status, etc.) that the census numbers describe."
tags: alignment cedar ehumanities harmonize normalization
categories: cedar demos milestones
---

[![cedar_300x300](http://www.cedar-project.nl/wp-content/uploads/cedar_300x300.jpg)](http://www.cedar-project.nl/wp-content/uploads/cedar_300x300.jpg)

The 507 census tables contain several dimensions, which correspond to the column and row headers with the properties (gender, marital status, etc.) that the census numbers describe. These dimensions, though, are not coherent between datasets: they can be named differently, and even be defined in non-comparable ranges. One task of harmonization is to add semantics to these dimensions, and align them conveniently.

CEDAR Harmonize ([github repository](https://github.com/CEDAR-project/Harmonize)) is an RDF harmonization layer generator for non-aligned statistical datasets, allowing users to define: 

  * A [harmonization vocabulary](http://lod.cedar-project.nl:8082/harmonize/vocab). In RDF Data Cube terms, this means defining the set of dimensions, concepts, ranges, code lists and codes that will be used to align the variables of the census and their values (for the sake of simplicity, in the interface we only show dimensions and codes). We reuse as many SDMX entities as possible, and define our own otherwise.
  * A [harmonization layer instanciation](http://lod.cedar-project.nl:8082/harmonize/harm). In practical terms, this means that users need to go through all dimensions of all tables and, for each, define: (a) the standard dimension it maps to (semantics & variable definition, e.g. sdmx-dimension:sex); and (b) the standard code it maps to (e.g. sdmx-code:sex-M for the value "Male").
  * [Harmonized queries](http://lod.cedar-project.nl:8082/harmonize/query-iface) over the whole dataset. For the sake of simplicity, right now we allow queries on one single dimension and code, but this will be extended in the future. We also provide facilities for aggregating results and downloading them as CSV.
