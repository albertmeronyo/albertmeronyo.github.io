---
layout: post
title: "Trip Report: ISWC 2019"
date: 2019-11-24 19:29:17
description: "My last trip of the year was in the remote Auckland, New Zealand for the International Semantic Web Conference (ISWC 2019), the main venue for Knowledge Graphs, Web-based Knowledge Bases and AI."
tags: knowledge-graphs linked-data semantic-web
categories: conferences trip-reports
thumbnail: /assets/img/20191027_09020133-1536x1152.jpg
---

![](/assets/img/IMG_7359-1024x768.jpg)

My last trip of the year was in the remote Auckland, New Zealand for the [International Semantic Web Conference (ISWC 2019)](https://iswc2019.semanticweb.org/), the main venue for Knowledge Graphs, Web-based Knowledge Bases and AI. This report is somewhat delayed because you don't travel often to [your antipodes](https://www.geodatos.net/en/antipodes/netherlands) so I spent an extra couple of days to explore these unique and extraordinary lands (thanks [Ingrid](http://ingridarcas.com/) for the beautiful pictures!).

<https://www.instagram.com/p/B4-UvvGDkB_/>

<https://www.instagram.com/p/B4hCAloDaKz/>

So, having said what an awesome place New Zealand is, let's get to business. ISWC had this year [308 delegates from 40 countries](https://twitter.com/albertmeronyo/status/1188551016423116800), 50% of them from Europe. The research track had [42 accepted papers out of 194 submissions ](https://twitter.com/albertmeronyo/status/1188552337586962433)(22% acceptance rate) which is in the line of previous editions. Topics in papers had a large variety (we say this every year, but this was the case perhaps more than ever); databases, data management, querying and knowledge graphs were more prominent.

{% twitter https://twitter.com/albertmeronyo/status/1188551580330541057 %}

I'm basing this report on the [extensive live notes](https://docs.google.com/document/d/1DprwEkq9DE_UMtjE429iWWI1ktbrZH8DctFrdZ2dEgE/edit?usp=sharing) (38 pages!) that [Michael Cochez](https://research.vu.nl/en/persons/michael-cochez) and I wrote during the event. Feel free to dive in the document for specific paper details, as it will be hard to fit everything in this post. I also attended the workshops [QuWeDa](https://sites.google.com/site/quweda2019/programme) and [SemStats](http://semstats.org/2019/) (which was great to come back at, and see that important topics such as [getting more statistical offices on board](http://semstats.org/2019/slides/stent-the-glam-semantic-world-versus-the-statistics-world.pdf) or [the use of provenance](http://semstats.org/2019/slides/cotton-PROV-O-linkage.pdf) have taken up in the community); and the [GraphQL tutorial](https://www.ida.liu.se/research/semanticweb/events/GraphQLTutorialAtISWC2019.shtml) (kudos to the great [Olaf Hartig](http://olafhartig.de/) and [Ruben Taelman](https://www.rubensworks.net/) for the fantastic crash course).

About the main conference, to me the main topics of this year (always subject to my own bias) were: For Knowledge; Dataset Work; and Enterprise Knowledge Graphs.

### For Knowledge

This point was perfectly crystallized in the [keynote by Jérôme Euzenat](https://iswc2019.semanticweb.org/keynote-euzenat/) (from which I happily reused the title for this subsection). His main point is that in the Semantic Web community we have been setting the spot for quite some time on **data** , from where we have reaped great benefits; but data can only take us so far, and by contrast **knowledge** truly lies at the core of every human civilization. I also found interesting his observations on **knowledge discovery** (based on data, but needs re-training) and **knowledge transmission** (which requires articulation and is at the core of various intelligent tasks). Basically he called for **sharing knowledge** (_"who wants to stand on the shoulders of data?"_) and to revisit the fields of eScience (with a more central role of **experiment representation** in scientific reporting) and knowledge evolution (e.g. natural and cultural selection is heavily based on various forms of knowledge).

{% twitter https://twitter.com/gatemezing/status/1188923636817780736 %}

Since representing scholarly workflows gets more important in [my own research](https://arxiv.org/pdf/1809.06532) and [project context](http://www.datalegend.net/), and I intensively worked during my PhD in [concept drift for SW/DH datasets](/assets/pdf/semstats2013_submission_7-1.pdf), I found these fundamental topics to think about as cases with a clear human-infused knowledge side.

I liked the contrast of this with many papers that were on the edge between symbolic and subsymbolic representation and their blending, like the work of Kristiadi et al. on [Incorporating Literals into Knowledge Graph Embeddings](https://arxiv.org/pdf/1802.00934) and in general the role of representation learning as a proxy between linguistic and structured knowledge.

### Dataset Work

With this section I wanted to collapse many papers that in one way or another tried to answer the question "what is this dataset/endpoint all about?". This is an obviously necessary task to automate to lower Knowledge Graph publishing and findability costs. Wang et al. propose a mechanism for [generating dataset snippets](http://ws.nju.edu.cn/datasetsearch/evaluation-iswc2019/online-first.pdf), some kind of dataset samples that are useful for dataset search with respect to keywords and queries. Instead of computing these dataset descriptors, Hasnain et al. [propose a central repository of VoID-like SPARQL endpoint descriptors (SPORTAL)](https://users.dcc.uchile.cl/~ahogan/docs/sportal-ijswis.pdf) in order to find relevant data. Other relevant works looked at [validating SHACL constraints over SPARQL endpoints](http://jreutter.sitios.ing.uc.cl/SHACL_19.pdf) (which got the best research paper award --congrats!), or [monitored and assessed the quality of data in public SPARQL endpoints](http://ceur-ws.org/Vol-2496/paper3.pdf).

{% twitter https://twitter.com/saleem_muhamad/status/1188962075659255808 %}

In many of these approaches **scalability** is a central question and various other papers tried to deal with it. I really enjoyed the use of [SANSA](http://sansa-stack.net/) for [assessing Linked Data quality](http://jens-lehmann.org/files/2019/iswc_dist_quality_assessment.pdf) at scale (with 200GB of semantic data analysed in barely 3 minutes); and in [Sparklify for efficient evaluation of SPARQL queries](https://link.springer.com/chapter/10.1007/978-3-030-30796-7_19). From closer colleagues, the LOD-a-lot [analysis over class equivalence and subproperty relations](https://arxiv.org/abs/1906.08097) shows evidence that knowledge engineers put more effort into class hierarchies than property hierarchies. We probably had an intuition about this, but it's just cool to be able to compute it in 4 hours in an affordable laptop. Also on scalability I presented work on [benchmarking efficient querying of RDF Lists](/assets/pdf/ISWC2019_paper_257.pdf).

![](/assets/img/73324652_903783463355036_5270436767869173760_n-1024x576.jpg)

### Enterprise Knowledge Graphs

If the success of knowledge transfer for scientific field can be at least partly measured on its technologies penetration in industry I think the Semantic Web community can be quite happy. Besides the 16 industry track (thanks [Christophe Guéret](https://cgueret.github.io/) and colleagues) papers, many research, in-use and resource track papers had big industry names on them. The [Microsoft Academic Knolwedge Graph](http://ma-graph.org/) promises to be a core resource in scholarly research, with 8B triples and links to Wikidata, OpenCItations, GRID, etc. and the provision of embeddings as representation. The [use of OWL and SW technology at Pinterest](https://arxiv.org/abs/1907.02106) highlights many lessons regarding knowledge engineering in large organisations that I found incredibly valuable. The deployment of the [Smart Topic Miner in Springer Nature](http://oro.open.ac.uk/62265/) sets a landmark success story on using semantics for automating and enriching scholarly publishing workflows. Even the [first keynote of the conference by Dougal Watt](https://iswc2019.semanticweb.org/keynote-dougal/) was a recognition to industry as a (if not the) key innovator in Semantic Web technologies. His talk was a call to finally moving to a data/knowledge centric (as opposed to application-centric) ecosystem, and left a must-read wish list of technological feats to accomplish (we really need to get to those standard SPARQL transactions):

{% twitter https://twitter.com/juansequeda/status/1188574417862963203 %}

{% twitter https://twitter.com/fabien_gandon/status/1188566693955555328 %}

In summary, I thought this was a really rich and heterogeneous edition of the conference, with many traditional topics like querying and scalability being well represented; and many new ones like blending representations solidifying quickly. I look forward to seeing all of you again [next year in Athens](https://iswc2020.semanticweb.org/)!

### Random notes

- [SemanGit: A Linked Dataset from git](https://dgraux.github.io/publications/SemanGit_ISWC_2019.pdf) \-- really cool resource for both developers and software scholars
- 11 papers were submitted to the reproducibility track, of which only 3 could be directly reproduced and the others required extra work. This is to say this is an incredibly hard task and as a community we should be grateful to [Michael Cochez and the rest of the initiative](https://iswc2019.semanticweb.org/call-for-reproducibility/). We should make this grow!
- Last keynote -- by the astrophysicist [Melanie Johnston-Hollitt](https://en.wikipedia.org/wiki/Melanie_Johnston-Hollitt) showing true [big data problems](https://twitter.com/natadimou/status/1189301079776923648) and a role model for thinking on requirements when [designing instruments of measure](https://photos.app.goo.gl/eZSRzT3M1WEPtdQG8) \--a lesson to be learned
- Auckland -- where awesome jazz clubs sit in basements and [cover The Legend of Zelda games songs](https://photos.app.goo.gl/PNUbNjAiXwSD8Zxv6)
- Huge thanks to the [conference organizers ](https://iswc2019.semanticweb.org/organizing-committee/)\--especially Fabien Gandon
- Get the bigger picture and don't miss other great ISWC 2019 trip reports by [Juan Sequeda](https://twitter.com/juansequeda/status/1193595178281504770) and [Armin Haller](https://twitter.com/rminHaller/status/1190262602812674048)
