---
layout: post
title: "CEDAR census RDF dataset alpha release, v0.1"
date: 2014-02-03 16:29:34
description: "We're pleased to announce the first (alpha) release of the Dutch historical censuses dataset as Linked Data. Point your browsers and applications to the SPARQL endpoint"
tags: cedar ehumanities endopint release sparql
categories: cedar demos milestones
---

[![alibobo_w3cSPARQL-logo](http://www.cedar-project.nl/wp-content/uploads/alibobo_w3cSPARQL-logo.png)](http://www.cedar-project.nl/wp-content/uploads/alibobo_w3cSPARQL-logo.png)

We're pleased to announce the first (alpha) release of the Dutch historical censuses dataset as Linked Data. Point your browsers and applications to the SPARQL endpoint

<http://lod.cedar-project.nl:8080/sparql/cedar>

The conversion of [the original dataset in Excel](http://cedar-project.github.io/DataDump/) has been performed with [TabLinker](https://github.com/Data2Semantics/TabLinker).

The dataset is structured in 507 named RDF graphs, one per census file in the original dataset. Each named graph IRI follows the pattern

http://lod.cedar-project.nl/resource/

Since it would be very verbose to write SPARQL for all these graphs at once, a graph group (_warning:_ Virtuoso exclusive feature and thus non-standard SPARQL) has been created in the triplestore to refer to all these 507 graphs at once, with the IRI

http://lod.cedar-project.nl/resource/cedar-dataset

This IRI can be used in the FROM clause of any SPARQL query to launch it against all named graphs of the dataset.

To give some statistics on very preliminary global queries:

Size of the dataset: 110,585,567 triples Total marked cells: 10,272,862 Hierarchical row header cells: 389,132 Data cells: 7,960,911 Column header cells: 61,110 Row property cells: 3,609 Title cells: 2,150 Row hader cells: 1,581,546 Metadata cells; 274,404

Please note that this release consists of the raw census data only (so no annotations and no harmonization layer yet). Please report all kinds of errors, mistakes or inconsistent results you'll surely encounter while querying these data.

Big thanks to [Michael Schuuring](http://leidenuniv.academia.edu/MichaelSchuuring) and [Jetske van der Schaaf](http://dans.knaw.nl/content/contact/medewerkers/jetske-van-der-schaaf), that worked for several weeks exclusively on the arduous task of [marking-up the tables](https://github.com/CEDAR-project/DataDump/tree/master/xls-marked). Big thanks also to [DANS](http://www.dans.knaw.nl) for hosting the [CEDAR LOD server](http://lod.cedar-project.nl/).
