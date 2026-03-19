---
layout: post
title: "Trip Report: DHBenelux 2019"
date: 2019-09-17 16:30:06
description: "I spent a few days last week attending the Digital Humanities Benelux (DHBenelux) 2019 Conference in Liège, Belgium. This has become a classic in the DH sphere in Europe, now running for its 6th edition and offering a distinctive, mature, and cohesive view on DH that to me was especially present this year."
tags: dhbenelux digital-humanities linked-data musicology semantic-web
categories: conferences trip-reports
thumbnail: /assets/img/20190912_083931-1-1024x768.jpg
---

I spent a few days last week attending the [Digital Humanities Benelux (DHBenelux) 2019 Conference](http://2019.dhbenelux.org/) in Liège, Belgium. This has become a classic in the DH sphere in Europe, now running for its 6th edition and offering a distinctive, mature, and cohesive view on DH that to me was especially present this year.

We had 42 paper presentations (8 long papers, 34 short), 3 panels, 2 keynotes, and a lively poster & demo session. The organizers were also proud to present the new [DH Benelux Journal](http://journal.dhbenelux.org/), which invites the community to submit full articles based on their conference presentations. The [first volume](http://journal.dhbenelux.org/volume-1-integrating-digital-humanities/) came out just a few hours before the start of the conference with last year's topic "Integrating Digital Humanities".

This edition had a common topic "Digital Humanities in Society". To me, the core topics of the conference were: "we shape our buildings; thereafter they shape us"; AI and Deep Learning on Humanities datasets; and network and text analysis.

### "We shape our buildings; thereafter they shape us"

This is a famous quote by Winston Churchill after WW2 I learned while reading Andrew Keen's [The Internet Is Not the Answer](https://www.goodreads.com/book/show/20763854-the-internet-is-not-the-answer). Back then it had a very specific meaning regarding the reconstruction of the House of Commons, but I like Keen's more general interpretation that buildings have a great influence in our social behavior and culture; and at the same time, it's us who are in charge of designing and building them in concrete ways.

This is to me a good metaphor to explain the influence and impact that digital tools have in the practice of digital scholarship, the main topic of the two excellent keynotes by [Tim Hitchcock](http://www.sussex.ac.uk/profiles/336034) (University of Sussex) and [Helle Strandgaard Jensen](<https://pure.au.dk/portal/en/persons/helle-strandgaard-jensen(485aac19-3feb-4690-9534-ec38dae852d6).html>) (Aarhus University). In computer science we tend to think of keyword-based search and its simple interface as an effective way of retrieving information. However, keyword search has deep implications in the workflows of digital scholarship and historical research in missing often **contextual information** and **the visibility of costs and provenance**.

**Contextual information** was well covered in Hitchcock's talk, which I can't fully cover here in all its rich details but I forward readers to [his own blog](http://historyonics.blogspot.com/2013/12/big-data-for-dead-people-digital.html). It revolved about the concept of the "infinite archive" and the differences between keyword search interfaces and the "old school" systems of libraries and archives, which involved facing their top-down cataloging and categorization of the world when searching. This contextual information (knowledge fields governing the document you look for; its neighbors; their sizes; their density/sparseness; etc.) is typically not shown by general search engines but fundamental to the historian to perceive some "vision of the whole". Then he switched from tool criticism to actual examples where this is addressed --some inspired by the "atlas of knowledge" approach of [Katy Börner](https://ella.sice.indiana.edu/~katy/) (who I had the pleasure to meet in 2012, as a fresh PhD student, in giving a [Sci2 Tool](http://ivl.slis.indiana.edu/km/pres/2012-borner-sci2tutorial-oecd.pdf) tutorial)-- following interfaces like [OldBaileyVoices](https://oldbaileyvoices.org/macroscope.php) where entries are visualized and made accessible in terms of their knowledge category (e.g. the [Library of Congress Classification](https://www.loc.gov/catdir/cpso/lcco/)), their word count, and other catalog metadata. I found this very inspiring since organizing knowledge at Web scale (as hard is it is) is one of the missions of the [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web), so I asked about whether there are fundamental differences in the nature of archive-curated or Web-born knowledge (the short answer is no, and the main difference is apparently institutional). [Contextual text (i.e. text before and after a keyword match) is also key in these processes](https://voyant-tools.org/). So overall, my takeaway was a call for less algorithmic search and more interfaces suited for humanities workflows.

{% twitter https://twitter.com/sclaeyssens/status/1172096146996637697 %}

Jensen's talk had similar foundations on the value of libraries and archives, but with an emphasis on the costs and how hard it is to catalog and archive appropriately. Her punchline was that digital access has become "too easy" and this ease tends to hide from the user the enormous work of cataloging and archiving. This used to be explicit to users before since the moment you crossed the archive's door or asked the librarian for something hard to find. So in a quick and efficient keyword search this value is often not perceived, but there were ideas on how to make it more visible (e.g. through [provenance standards](https://www.w3.org/TR/prov-overview/); I thought also of more explicit [data citations](http://best-practices.dataverse.org/data-citation/) and [alt metrics](https://www.altmetric.com/)):

{% twitter https://twitter.com/albertmeronyo/status/1172458172893880322 %}

These are critical topics that are evidently under research, but we should think more about them in our digital research infrastructures like [CLARIAH](https://twitter.com/j_w_baker/status/1172488912662663168) (which received high appraisal in the conference even from colleagues outside the Benelux) and [Parthenos](https://twitter.com/lilimelgar/status/1172059805546164224).

### AI and Deep Learning on Humanities data

The Deep Learning fever has also reached DH and there were various examples at the conference. AI was explicitly mentioned and encouraged in the call for papers, from both the ethically concerned perspective on digitization and data access; but also more practically on applying DL for typical DH tasks and datasets.

![](/assets/img/20190912_092953-1024x768.jpg)

The latter was exactly what the project of [Sally Chambers](http://2019.dhbenelux.org/wp-content/uploads/sites/13/2019/08/DH_Benelux_2019_paper_72.pdf) (University Ghent) and [Matthia Sabatelli](http://2019.dhbenelux.org/wp-content/uploads/sites/13/2019/08/DH_Benelux_2019_paper_17.pdf) et al. (Uni Liège) did at [INSIGHT](https://www.ghentcdh.ugent.be/projects/insight-intelligent-neural-systems-integrated-heritage-tools) on History and Art. They developed a transfer learning approach for automatically classifying paintings recognizing musical instruments in them, with a model that was originally trained on modern instrument pictures. I found this really interesting as instrument pictures are highly available and transfer learning is relatively cheap; and offers many options for multimodal entity linking with e.g. [symbolic music notations](https://midi-ld.github.io) (disclaimer: my own work), something to look forward to.

{% twitter https://twitter.com/DHBenelux/status/1172152445994176517 %}

### Network and text analysis

Network and text analysis is a classic in DH conferences and it's about processing both unstructured and structured humanities data. I really liked the network analysis work of Ingeborg van Vugt (Utrecht) for [disclosing the social network of librarian Magliabechi](http://2019.dhbenelux.org/wp-content/uploads/sites/13/2019/08/DH_Benelux_2019_paper_31.pdf) through his letters in early Dutch Republic, finding different social capital depending on your position in the network.

{% twitter https://twitter.com/DHBenelux/status/1172059675811958785 %}

This was also present in Julie Birkholz's (University Ghent) [paper](http://2019.dhbenelux.org/wp-content/uploads/sites/13/2019/08/DH_Benelux_2019_paper_60.pdf) which had a really cool punchline questioning visualizations, unjustified network metrics and data incompleteness; and calling for an explicit connection between research questions and specific metrics. This is a path we definitely want to explore in the [next iteration of CLARIAH](https://www.clariah.nl/en/new/news/clariah-plus-granted) in the Netherlands. Julie and I also had together [a demo with a Jupyter Notebook to do network analysis on RDF graphs](https://colab.research.google.com/github/descepolo/rdf-network-analysis/blob/master/rdf-network-analysis.ipynb) without tears that was very well received by the community. [My own paper](http://2019.dhbenelux.org/wp-content/uploads/sites/13/2019/08/DH_Benelux_2019_paper_5.pdf) was more a call for looking into [FAIR principles](https://zenodo.org/record/3409968#.XYCrIPwzbOQ) when we share and reuse objects in musicological research, with practical implications in e.g. multimodal entity linking (journal article coming on this soon).

{% twitter https://twitter.com/albertmeronyo/status/1172069225063731200 %}

![](/assets/img/20190912_175924-1-1024x768.jpg)

<!-- {% twitter https://twitter.com/KBNLresearch/status/1172490168563113984 %} -->

Text analysis is always very present but I especially liked the work of [James Baker](http://2019.dhbenelux.org/wp-content/uploads/sites/13/2019/08/DH_Benelux_2019_paper_3.pdf) et al. (University of Sussex) (slides [here](https://twitter.com/j_w_baker/status/1172138284564262913)) on using [word frequency, word lists, collocation, keyness measures and archival work](https://curatorialvoice.github.io) for identifying style and voice patterns and deliberate language choices of Mary Dorothy George. An excellent example putting to work the concepts of keywords vs archival context discussed in the keynotes. Very much related to this, [Marijn Koolen et al.](http://2019.dhbenelux.org/wp-content/uploads/sites/13/2019/08/DH_Benelux_2019_paper_10.pdf) (KNAW Humanities Cluster) scaled this analysis up to a number of historical text collections and aim at reusing their structural contexts for a more complete and rigorous analysis. So in general: machine-readable text is not enough.

<!-- {% twitter https://twitter.com/TimHitchcock/status/1172139014197043201 %} -->

This is to say that access to text context is not just a requirement from DH scholars but an integral part of collections that must be considered in databases, tools and workflows.

In conclusion, I found this conference has matured to a point it had a distinctive approach to DH than its larger international sister DH2019 (of which I wrote a report about [here](/blog/trip-report-dh2019)), with more history, archives, and explorative tools. I look forward for attending again next year in [Leiden](http://2020.dhbenelux.org/)!

### Random notes

- See also the [notes of James Baker](https://gist.github.com/drjwbaker/ecbaff157b58c12b731d817dff02ea4b)
- Historians [lie in almost every footnote](https://twitter.com/j_w_baker/status/1172089945902780416) :-)
- It's good to see [music performances are spreading](https://twitter.com/aasmanna/status/1172130180665622528?s=19) in academic conferences 🎵
- Thanks to Liliana, Marijn et al. for organizing a [great panel on coding literacy](https://twitter.com/lilimelgar/status/1173609493403447296) that we should have every time
- Congrats to the [best paper award winners](https://twitter.com/DHBenelux/status/1172544809179013122); well deserved!
- We all know how great Belgium is for [food](/assets/img/20190912_203924-e1568714441821.jpg) and [beers](/assets/img/20190913_175714-e1568714465441.jpg) and [chocolate](/assets/img/20190912_212105.jpg), but [rock bars inspired in the 80s](/assets/img/20190912_222702-e1568714504928.jpg) should be the next thing
- Huge thanks to the organizers for an amazing job!

{% twitter https://twitter.com/aasmanna/status/1172497768268685312 %}
