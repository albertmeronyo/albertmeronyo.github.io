---
layout: post
title: "Trip report: ISWC 2020"
date: 2020-11-24 18:24:18
description: "Three weeks ago I attended the first online International Semantic Web Conference, originally planned to happen in Athens, Greece. ISWC is the prime venue for Semantic Web and Knowledge Graphs."
tags: knowledge-graphs linked-data semantic-web
categories: conferences trip-reports
thumbnail: /assets/img/athens_acropolis_560.jpg
---

Three weeks ago I attended the first online [International Semantic Web ](https://iswc2020.semanticweb.org/)[Conference](https://iswc2020.semanticweb.org/), originally planned to happen in Athens, Greece. ISWC is the prime venue for Semantic Web and Knowledge Graphs. Despite the ongoing pandemic (or thanks to it?) ISWC's attendance grew considerably this year: we had 534 delegates, and workshops and tutorials typically peaked at 40-70 attendees. A huge thanks to the [organising committee ](https://iswc2020.semanticweb.org/organization/organizing-committee/)who noticeably put an incredible effort to make this the best online conference of the year, by far! This was also the first conference I attended with my new [Lecturer in Computer Science at King's College London](https://www.kcl.ac.uk/research/dai) hat :-)

![](/assets/img/20201103_130253-1024x768.jpg)

The research track had an acceptance rate of 22%, in line with prevous ISWC editions; and 685 reviews were provided for 170 submissions (around 4 reviews per paper which is great).

![](/assets/img/20201103_130846-1024x768.jpg)

### Workshops and Tutorials

Satellite events worked in general very well in the online setting; I particularly enjoyed the extra high availability of recorded presentations and slide decks through the whole conference. I co-organised the [SPARQL Endpoints and Web API (SWApi)](https://d2klab.github.io/swapi2020/) tutorial with the great [Pasquale Lisena](http://pasqlisena.github.io/). I would very much encourage you to have a look at our materials if you work on the Knowledge Graph access/API area. Big thanks to all 39 participants who dropped by. A lot is happening here and we are tidying up a compilation of materials through another medium for next year, so stayed tuned!

{% twitter https://twitter.com/PasqLisena/status/1323257259263201282 %}

I also attended the [Wikidata Workshop](https://wikidataworkshop.github.io/) and the [tutorial on Common Sense Knowledge Graphs](https://usc-isi-i2.github.io/ISWC20/), which showed many interesting connections around how humans do knowledge engineering from a practical, large-scale view. Wikidata has become the prime lab to study this as shown by [Lydia Pintscher](http://www.lydiapintscher.de/about.php) and [Kat Thornton](https://web.library.yale.edu/sd/staff/24311) great keynotes: Wikidata has more edits than any other Wikimedia project; has become a central data-hub for them (54% of Wikimedia articles use data from Wikidata through 6.5M queries a day --I found this a great argument for [query management for knowledge graphs](https://github.com/CLARIAH/wp4-queries)). In general content growth is outpacing community growth, so automated techniques (e.g. machine learning for data quality) to help keep up are much needed. It was nice to see this community reflecting on knowledge engineering issues from a practical perspective (I found [this video from BBC Scotland on "what is soup?"](https://www.youtube.com/watch?v=Y1HVTNxwt7w&ab_channel=BBCScotland-Comedy) hilarious). Kat spoke about the use of [ShEx](https://shex.io/shex-semantics/) "E namespace" schemas for modelling domains, which can be linked to each other and reminded me a lot of [Ontology Design Patterns](http://ontologydesignpatterns.org/wiki/Main_Page). Many good papers on [NER for Wikidata](https://github.com/wetneb/opentapioca), [similarity metrics](https://wikidataworkshop.github.io/papers/Wikidata_Workshop_2020_paper_16.pdf), [engineering around syncing ontology edits](https://wikidataworkshop.github.io/papers/Wikidata_Workshop_2020_paper_7.pdf) and [suggesting citations for Wikidata's claims based on Wikipedia's external references](https://wikidataworkshop.github.io/papers/Wikidata_Workshop_2020_paper_15.pdf) were presented. I think these were all very interesting approaches to practical, large-scale knowledge engineering and I'm looking forward of what we can learn from such a large social lab.

{% twitter https://twitter.com/dgarijov/status/1323315366886432769?s=03 %}

I'm using [Filip Ilievski](https://usc-isi-i2.github.io/ilievski/)'s excellent paper on [commonsense knowledge on Wikidata](https://arxiv.org/abs/2008.08114) (interestingly small in size, as it happens with T-Boxes) to smooth-transition to the [tutorial on Common Sense Knowledge Graphs](https://usc-isi-i2.github.io/ISWC20/) (CSKG) from which I learned a great deal. CSKG represent "shared conceptions" among humans and of course the goal is to make them available to computers. So this is some sort of "world knowledge" that goes from basic physics to social behaviour (I look at this kind of knowledge a bit more from a [Cultural AI perspective](https://docs.google.com/presentation/d/1Ky-PSKmduooSjgTW92CiCvMkd2XXEsp8mnU3q2SMi3E/edit?usp=sharing)).

![](/assets/img/20201102_161522-1024x768.jpg)

Many thanks to the [organisers](https://usc-isi-i2.github.io/ISWC20/) who did a great archeological effort to historically reflect on CSKG, putting together a great resource for semantic web researchers interested in CSKG. CSKG have actually been around for quite some time in a variety of forms, from [Cyc](https://en.wikipedia.org/wiki/Cyc) (a large symbolic common sense knowledge base, but with limited top-down reasoning) to [COMET](https://arxiv.org/abs/1906.05317) (a tensor-based, common sense knowledge generator based on query answering). So an obvious goal here is integration and interoperability across modalities and CSKGs, for which [some work](https://arxiv.org/pdf/2001.02314.pdf) (and [more](https://arxiv.org/pdf/1811.10830.pdf)) has been already proposed (e.g. [VL-BERT](https://arxiv.org/abs/1908.08530)); although many challenges remain regarding granularity of relations, variety of representations (e.g. symbolic vs language models), and foremost a tiny overlap of concepts/entities between different CSKGs. Hyper-relational graphs like property graphs to qualify relations are being very useful here. Overall I thought these are vibrant communities addressing key issues around knowledge communities and the Web.

![](/assets/img/20201102_184205-1024x768.jpg)

### Main conference

I thought the big topics for this year at ISWC were: keeping reality in check, semantic programming, and hybrid KG ecosystems.

#### Keeping reality in check

To me this was one of the big takeaways of the conference, as it was present in both vision sessions (a fantastic initiative that I'd love to continue seeing in ISWC) and many papers. This revolves around how the big questions of the semantic web (sharing common conceptualisations, usefulness of systems and the Web, knowledge engineering, reasoning) relate to real-world scenarios and observable social behaviour. [Carole Goble](https://www.research.manchester.ac.uk/portal/carole.goble.html) brilliantly summarised this as "reality" and I pretty much agree. I thought [Miriam Fernandez](http://kmi.open.ac.uk/people/member/miriam-fernandez)'s idea of having human-centric evaluation metrics, e.g. inspired by some sort of "semantic web clinical trials" evaluating actual impact of systems on humans, is a great way of advancing towards this. Similarly [Elena Simperl](https://www.kcl.ac.uk/people/elena-simperl) made a call to arms to ask again important questions about knowledge engineering in the light of the new apps and requirements: for example, what is the [Jupyter Notebook](https://jupyter.org) for knowledge engineering? And the fact that this wave of AI will not succeed until we understand how knowledge engineering works in the 21st century (e.g. in Wikidata where knowledge engineering happens quite tacitly at large scale). On a more ethical side [Jeni Tennison](https://theodi.org/person/jeni-tennison/) reminded us that knowledge is power, and the visions we have for data dictate how our societies will work in the future (I thought this was a very lucid call to concentrate on data institutions and ensuring they empower society); and [Helena Deus](https://www.linkedin.com/in/helenadeus/) focused on FAIR , how it can (literally) save lives, the importance of generalisations, and the explicit declaration of intent for which data are collected as a means to address data bias. In a way these were all examples of "back to basics" in the semantic web, but thinking more specifically about the realities of today and tomorrow.

![](/assets/img/Screenshot-2020-11-06-at-14.16.17-1024x572.png)

{% twitter https://twitter.com/juansequeda/status/1324004333663510532 %}

A lot of papers touched upon this "keep reality in check" from two angles: ontology engineering, and empirical user behaviour. On the ontology engineering side, work on Cultural heritage and Digital Humanities that [extends CIDOC CRM for archaeology and represents knowledge about excavation sites](https://link.springer.com/chapter/10.1007/978-3-030-62466-8_43) sets a great example; and the [explanation ontology](https://arxiv.org/abs/2010.01479) offers an interesting model of explanations for user-centered AI. On the more empirical side, it was interesting to see [Google Dataset Searches by the Numbers](https://arxiv.org/abs/2006.06894), which showed an impressive index of 31M datasets from 4.8K domains, from which structured data accounts 2/3 of all data downloads (would be nice to see what are the most frequent metadata properties in the datasets more often downloaded/appeared in top search results?); and I loved the excellent motivation and results of [Revealing Secrets in SPARQL Sessions](https://arxiv.org/abs/2009.06625) that looked into query intention prediction and recommendation, as I think [query management for knowledge graphs](https://docs.google.com/presentation/d/12JzTCxP4RAhJ6YkEK1us-LWjXj5f0qTjeGNkNL1NYJc/edit?usp=sharing) will continue raising in importance.

![](/assets/img/Screenshot-2020-11-03-at-17.26.05-1024x575.png)

#### Semantic Programming

This was a surprisingly popular topic that I think historically is more connected to [ESWC](https://2021.eswc-conferences.org), but it was nice to see it so well covered at ISWC this year. It certainly covers aspects of semantic web programming, but this time it was mainly about how knowledge graphs can support and empower developers, and bring intelligence to various coding activities. I thought [Kavitha Srinivas](https://iswc2020.semanticweb.org/program/keynote-speaker-kavitha-srinivas/) keynote, describing the [Graph4Code Knowledge Graph](https://arxiv.org/abs/2002.09440), was clearly spot on and revealed many interesting applications like helping developers understand what code is trying to do at the semantic level by integrating different sources (code, documentation, class hierarchy, programming fora on the Web); so not just an arbitrary syntactic RDF conversion, but a KG construction pursuing a clear research question. I thought the use of transitivity in SPARQL was a clever way of doing model recommendation through reasoning; and [RDF*/SPARQL*](https://blog.liu.se/olafhartig/2019/01/10/position-statement-rdf-star-and-sparql-star/) found yet another application since direct edge annotations are needed here. There was also a call for standardising function calling in SPARQL (we have worked on creative workaround for this with [Scry](/assets/pdf/scry-linked-data_A-CR.pdf)).

![](/assets/img/Screenshot-2020-11-03-at-13.43.57-1024x572.png)

Of course, this is not to say that programming _for_ the Semantic Web and providing tools for developers to interact with knowledge graphs was not a topic on itself. For example [LDflex is a read/write Linked Data abstraction for front-end Web developers](https://github.com/LDflex/LDflex) that lets coders work with RDF using simple JS expressions over a single JS object that can be read, written and "awaited" for through one single JSON-LD mapping object. With a more CLI taste, [HDTCat](https://arxiv.org/abs/1809.06859) makes [HDT](https://www.rdfhdt.org) (the Header-Dictionary-Triples compression format for RDF) scalable by introducing a linear operator that leverages sorted dictionaries to enable fast joining of HDT files; the interface is as simple as

```bash
hdtCat rdf1.hdt rdf2.hdt > hdtJoin.hdt
```

 [SPARQAL](https://arxiv.org/pdf/2004.01816.pdf) is an analytics recursive extension for SPARQL similar to TigerGraph GSQL and LD-Script. More on the knowledge graph access side, [Daniel Garijo et al. presented OBA](https://arxiv.org/abs/2007.09206), a really neat way of producing more RESTful OpenAPI specifications by mapping ontologies to object schemas. It was really cool to see this using components of our very [grlc](/assets/pdf/SALAD2016_paper_4.pdf). I thought these were all really interesting approaches that showed a caring community for its tools and users.

#### Hybrid Knowledge Graph ecosystems

The third main trend of the conference was to me the blooming of hybrid knowledge graph ecosystems. We have seen many examples now of hybrid symbolic-neural models, where e.g. ontologies are used to improve neural models, or neural models are used to improve ontologies (with interesting challenges like few/0 shot learning, trust, or bias). So I thought this hybrid trend showed having grown from eventual techniques, to be a common and key component in large knowledge graph infrastructures that are now basically hybrid in essence (similarly to how [modern processors have dedicated hardware for neural tasks](https://en.wikipedia.org/wiki/Apple_A11)).

![](/assets/img/Screenshot-2020-11-05-at-13.14.44-1024x598.png)

I thought this was quite noticeable in the keynotes of [Larry Hunter](https://iswc2020.semanticweb.org/program/lawrence-hunter/) and [Guotong Xie](https://iswc2020.semanticweb.org/program/keynote-speaker-guotong-xie/), both focused on biomedicine applications of large ecosystems of blended symbolic/subsymbolic representations. The limitations that hybrid KG want to overcome is that machine learning alone suffers from data bias; while knowledge representation alone suffers from nuanced exceptions in local data. Both projects build large hybrid KG infrastructures to integrate diseases, products, treatments, etc.; automating linking where possible (with ML) but also leveraging reasoning (with KR) for answering questions around the "why" of phenomena. An interesting point here is that at this scale hypothesis management is really needed and KGs can truly help (if you're interested in this, [we're recruiting](https://safeandtrustedai.org/project/1531/)). I thought that the techniques displayed in both projects were truly impressive: computing the transitive closure of the graph and _then_ computing node embeddings for compound similarity; using [GPT-3](https://openai.com/blog/openai-api/) for biomedical texts; or daisy chaining BERT, LSTM and CRF for NER and linkage. It was mind-blowing to see some of these pair with physician performance at diagnosis --so much has changed since the days of expert systems. It was nice to see also a good set of papers on scientific knowledge graphs as an example of these blooming ecosystems --[AI-KG: an Automatically Generated Knowledge Graph of Artificial Intelligence](http://oro.open.ac.uk/71736/) being a good example.

![The Acropolis of Athens](https://lp-cms-production.imgix.net/2019-06/GettyImages-88786323_super.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1312)

All in all, I thought this was an excellent ISWC edition with top-notch quality papers and high attendance and engagement, despite the ongoing pandemic. [Huge thanks to the marvellous work of the organisers](https://twitter.com/samstwitting/status/1323623579381059584), who undoubtedly had put together the best online event of the year (at least regarding my own experience). I can't wait to see all of you again, hopefully face to face, next year in Albany!

#### Misc notes

- Don't forget to read through the fantastic [Juan Sequeda's trip report](http://www.juansequeda.com/blog/2020/11/16/international-semantic-web-conference-iswc-2020-trip-report/) for the bigger picture :-)
- Congrats to all best [paper award winners](https://twitter.com/iswc_conf/status/1324763096272015360)
- Really excited about [Tentris](https://twitter.com/saleem_muhamad/status/1300395262914035712), a tensor-based triplestore
- [Squirrel – Crawling RDF Knowledge Graphs on the Web](https://link.springer.com/chapter/10.1007/978-3-030-62466-8_3)
- [Refining Node Embeddings via Semantic Proximity](https://link.springer.com/chapter/10.1007/978-3-030-62419-4_5) -making random walks semantic
- The [Vision track](https://twitter.com/iswc_conf/status/1318646963676585985) seems a continuation to the ESWC panel earlier this year; fantastic idea and can't wait to attend future editions
- [Conference proceedings](https://twitter.com/Philipp_Mayr/status/1323197102869090308)
- Nice take-aways from [the Ontology Matching workshop](https://twitter.com/juansequeda/status/1323263471794982913)
- Cool [tools for building Knowledge Graphs](https://twitter.com/umutsims/status/1323271944943403008)
- Add your pictures with [Amrapali Zaveri to her Wikidata page](https://www.wikidata.org/wiki/Q34315853) (we miss you, Amrapali)
- Nice usage of Slack for conferences; interactions were great, especially during talks, and much more direct than twitter convos (although not so nicely referenceable)
- The [vision of Semantic Web written as early as 1965](https://twitter.com/lysander07/status/1323997238545309697)
- Interesting Q&A model of having a panel after attending paper presentations; questions still very much paper-focused, but could be interesting to explore the role of the discussant like in [ESSHC](https://esshc.socialhistory.org)
- Papers in this ISWC about explainable AI: [Bhowmik and Delo, Explainable Link Prediction for Emerging Entities in Knowledge Graphs](https://arxiv.org/abs/2005.00637);  
  [Gad-Elrab et al., ExCut: Explainable Embedding-based Clustering over Knowledge Graphs](http://resources.mpi-inf.mpg.de/d5/excut/ExCut_TR.pdf); [Denaux and Gomez-Perez, Linked Credibility Reviews for Explainable Misinformation Detection](https://arxiv.org/abs/2008.12742); [Chari et al., Explanation Ontology: A Model of Explanations for User-Centered AI](https://arxiv.org/abs/2010.01479)
