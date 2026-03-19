---
layout: post
title: "Digital Humanities Congress 2014 @ University of Sheffield - Report"
date: 2014-09-08 09:32:35
description: "The Digital Humanities Congress is a conference held in Sheffield every two years. Organized by the Humanities Research Institute of the University of Sheffield, its purpose is to promote the sharing of knowledge, ideas, and techniques within the digital humanities."
tags: dh dhcongress digital-humanities
categories: cedar conferences presentations trip-reports
thumbnail: /assets/img/2014-09-05-14.11.30-e1410168669812-576x1024.jpg
---

![2014-09-05 14.11.30](/assets/img/2014-09-05-14.11.30-e1410168669812-576x1024.jpg)

The[ Digital Humanities Congress ](http://www.sheffield.ac.uk/hri/dhc)is a conference held in Sheffield every two years. Organized by the [Humanities Research Institute](http://www.sheffield.ac.uk/hri) of the University of Sheffield, its purpose is to promote the sharing of knowledge, ideas, and techniques within the digital humanities. The [program](http://www.hrionline.ac.uk/dhc/) for this year was quite impressive: 47 paper presentations, organized in 18 sessions and 4 plenaries spread over 3 days. Plenaries were placed as the last presentation of each day (except the opening), a format that I find interesting to leave attendants with good food for thought until the next day. It's worth starting to mention a few observations related to content:

- I was very surprised by the **technical quality** of most of the presentations. A DH venue is sometimes a good showcase for key philosophical questions and interesting proposals, and less of an exhibition of working solutions -- but this event showed that the latter is increasingly gaining boost, something really great to see.
- Presented CS research needed to be done, in some cases, in order to solve problems derived from pure **Humanities requirements** (e.g. semantic similarity metrics across photography metadata), which also proves that DH can be inspirational to CS methods.

![2014-09-05 09.43.10](/assets/img/2014-09-05-09.43.10-1024x576.jpg)

- A whole lot of research is being done in **historical photography**. As a surprise, analysing and linking their metadata is much more trending than applying e.g. computer vision methods.
- Besides sessions specifically devoted to semantics and meaning, there were mentions everywhere about the **Semantic Web and Linked Data** as basic paradigms to open up, link and study the meaning of the Humanities on the Web
- It was good to see so many **data-driven** projects. Usually these devote their efforts to (a) increase the degree of structure of their datasets (including their internal/external linkage to other data sources); (b) use CS methods to gain insight into the data (e.g. graph analysis, semantic similarity metrics, data mining); or (c) both.
- Quantitatively, a few more papers were devoted to **literature** than (social) **history**
- **Licensing** of datasets, methods and tools is still an issue in DH and was devoted lots of discussion. Usually CC derived licenses are sufficient, but funding issues or data owner restrictions put sometimes scholars in a pre-openness era position.
- An interesting observation about the culture of this kind of conference: **questions** in the question rounds aren't supposed to be "answered", but to be "followed up". Part of the academic discourse is built live during the discussion round, in contrast with CS, where questions are devoted to disambiguate what’s been just communicated or to criticise assumptions/hypotheses. In DH I find this particularly more thought-exploratory based.

[![2014-09-05 12.35.45](/assets/img/2014-09-05-12.35.45-1024x576.jpg)](/assets/img/2014-09-05-12.35.45.jpg)Our own presentation was scheduled in a session called ["Linking Challenging Data"](http://www.hrionline.ac.uk/dhc/session/36), and we showcased everything CEDAR has produced during 2014: refinement of our 5-star Linked Data [publishing workflow](https://github.com/CEDAR-project/Integrator), the (automatic) [building of concept schemes](https://github.com/CEDAR-project/TabCluster) (to be presented in detail in the [S](http://semstats2014.wordpress.com/)[emStats](http://semstats2014.wordpress.com/) workshop of [ISWC](http://iswc2014.semanticweb.org/)), the monitoring ofdimensions in current Linked Statistical Data (through [LSD Dimensions](https://github.com/albertmeronyo/LSD-Dimensions)), and the analysis of [concept drift](https://github.com/albertmeronyo/ConceptDrift) in the historical censuses. We received acclaim and great feedback, in particular:

- The DH audience is always worried about **trust** of our transformations, and this time was no exception. They were very pleased to know that we implement PROV to keep provenance of all data items (i.e. to the original Excel cell level), and were keen of examining our decision-making process.
- There was great discussion of pros and cons of applying **ontology learning** to historical datasets, and how to model the semantic differences with contemporary versions
- To model concept drift, they pointed out the [**Historical Thesaurus of English**](http://historicalthesaurus.arts.gla.ac.uk/about/), an invaluable linguistic resource to understand dynamics of meaning
- As a general concern, scholars see the **value of LOD** but are skeptical about the usefulness of its current content, claiming that (a) more Humanities datasets need to be published as LOD; and (b) Humanities data needs to be heavily pre-processed before being published in the Semantic Web. This was somehow contradictory with our approach: we publish historical data as-is first, and run all our cleaning and harmonization workflow only afterwards.

[![2014-09-05 16.03.52](/assets/img/2014-09-05-16.03.52-1024x576.jpg)](/assets/img/2014-09-05-16.03.52.jpg)[![2014-09-05 19.26.12](/assets/img/2014-09-05-19.26.12-1024x576.jpg)](/assets/img/2014-09-05-19.26.12.jpg)[![2014-09-05 16.57.47](/assets/img/2014-09-05-16.57.47-1024x576.jpg)](/assets/img/2014-09-05-16.57.47.jpg)

Other miscellaneous notes:

- Lots of discussion about **authenticity, deconstruction and reconstruction of sources** , and what it really means to be a historical source, were very related to our recently accepted EKAW position paper ["What is LinkedHistorical Data?"](https://www.albertmeronyo.org/wp-content/uploads/2014/09/ekaw2014_submission_116_A.pdf)
- There is a tension/trade-off at **digital archives** between materiality of sources (i.e. keeping them as close as possible to their original context) and their preservation for eternity. The more detailed the data/metadata preserved, the more expensive it is to maintain. Some kind of study on priority of archiving seems fundamental here, assuming that we cannot preserve everything at its higher granularity level.
- (Dutch) **Industry** was also present with a great tool called [Node Goat](http://nodegoat.net/), specifically tailored to visualization of DH research

![20140905_160022](/assets/img/20140905_160022-e1410176710584-576x1024.jpg)

- We highly promoted the forthcoming **COMMIT** event in Amsterdam, and the 2015 visiting fellowships at the **eHumanities** Group
- Toby Burrow's presentation [**"Ontologies and the Humanities: Some Issues Affecting the Design of Digital Infrastructure"**](http://www.hrionline.ac.uk/dhc/paper/5), in the "Modeling Meaning" session, was my favourite. He did a fantastic job at pointing major issues affecting the publishing of the DH in the Semantic Web from a critical perspective, including explicit mentions to our research on concept drift. It seems that our networking at Intersect and HuNI in Australia last year worked great!

[![2014-09-06 11.49.30](/assets/img/2014-09-06-11.49.30-1024x576.jpg)](/assets/img/2014-09-06-11.49.30.jpg)[![2014-09-06 11.51.00](/assets/img/2014-09-06-11.51.00-1024x576.jpg)](/assets/img/2014-09-06-11.51.00.jpg)

Overall a great DH conference, with good balanced content, impressive organization, fantastic technical quality and excellent networking. Looking forward to attend again in 2016!
