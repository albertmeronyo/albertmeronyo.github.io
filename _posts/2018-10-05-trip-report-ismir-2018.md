---
layout: post
title: "Trip Report: ISMIR 2018"
date: 2018-10-05 15:39:59
description: "Last week I attended ISMIR for the first time, in its 19th conference which happened to come back to Paris where it started. This is the major venue for researchers in Music Information Retrieval (MIR), covering a broad set of communities and backgrounds including computer science, musicology, AI, psychology, ethnography, etc."
tags: ismir ismir2018 linked-data mir musicology
categories: conferences trip-reports
thumbnail: /assets/img/20180925_131150-1024x768.jpg
---

Last week I attended [ISMIR for the first time, in its 19th conference](http://ismir2018.ircam.fr/) which happened to come back to Paris where it started. This is the major venue for researchers in Music Information Retrieval (MIR), covering a broad set of communities and backgrounds including computer science, musicology, AI, psychology, ethnography, etc. The conference had 235 paper submissions, of which [104 were accepted](http://ismir2018.ircam.fr/pages/events-main-program.html) (44.2%).

[![](/assets/img/20180926_085847-1024x768.jpg)](/assets/img/20180926_085847.jpg)

[![](/assets/img/20180925_133800-1024x768.jpg)](/assets/img/20180925_133800.jpg)

For the first time, the presentation format was 4 minutes plus a 1 hour poster session. So the conference sessions were slots of 1.5h with around 18 posters, and a 1h poster session right after, which was nice to get paper insights and direct exchange with the authors. I heard mixed responses to this format: while a few people missed the in-depth related-work discussions, experiment results, etc. of more classic presentations, in general presenters were very comfortable, and personally I enjoyed the continuous engagement in the poster sessions (although this adds x10 to your average conf day energy drop because it's pretty intense):

{% twitter https://twitter.com/jordiponsdotme/status/1046158819938717696 %}

To me, the big topics of the conference were: Deep Learning everywhere, the role of symbolic representations, and datasets and interactive tools.

**Deep learning everywhere**

Without big surprise, MIR researchers massively [use deep learning to learn cognitive functions](http://ismir2018.ircam.fr/doc/pdfs/304_Paper.pdf) related to music. These are typically well-defined tasks in the [MIREX competition](http://www.music-ir.org/mirex/wiki/MIREX_HOME). For example, [Takumi Takahasi et al.](http://ismir2018.ircam.fr/doc/pdfs/63_Paper.pdf) use CNNs and CRNNs to recognize instrumentation with low latency, generating nice instrument visualizations on audio. A general message in papers doing feature separation is that CRNNs outperform MLPs in pretty much any specific task. In the case of instrument recognition, the general use case can be considered solved, although more specific tasks, like [recognizing accompanying instrumentation in jazz solos](http://ismir2018.ircam.fr/doc/pdfs/145_Paper.pdf), are more challenging.

<!-- {% twitter https://twitter.com/functiontelechy/status/1044851668553273344 %} -->

About this, a really interesting finding, and perhaps my favourite paper of the conference, was [Jordi Pons et al. large scale end-to-end learning of music audio](http://ismir2018.ircam.fr/doc/pdfs/191_Paper.pdf), which won the best student paper award (Congrats Jordi!). This work is about scaling up models learned with CRNN via spectrograms, which are the standard audio representation mechanism. What they found is that beyond the threshold of 1M songs, feeding audio representations directly into the network (instead of the spectrograms) starts to pay off, and leads to more performant models. The larger datasets are unfortunately private. In the poster session an interesting discussion point was why this shift in convenient representations is the case, which arises more questions (i.e., what specific knowledge in the new representation is being leveraged?) and I think is well aligned with the call of having a better explainable AI (this was a recurrent topic in the conference).

**The role of symbolic representations**

Symbolic music representation (in MIDI, MusicXML, etc.) is also a big topic in the conference, more in musicologists' side. I found the work of [Christof Weiss et al.](http://ismir2018.ircam.fr/doc/pdfs/23_Paper.pdf) really interesting, in the sense that their studies relying on symbolic representations perform generally worse than those using sub-symbolic (audio-based) methods, although they display the same trending curves:

[![](/assets/img/20180925_144659-1024x768.jpg)](/assets/img/20180925_144659.jpg)

On this line, but from a different perspective, the work of [Daphne Odekerken et al.](https://drive.google.com/file/d/1ivkZtA01e2h-AX-CQwX6ciX9dGrZOohn/view) on estimating chords makes an excellent point on how to use symbolic music background knowledge (in the form of MIDI and tab files) to improve the performance of models otherwise only fed with audio data. I found this to be a great spot to introduce our work on [Symbolic Music Knowledge Graphs](https://midi-ld.github.io/) as support knowledge bases for this kind of workflows.

[![](/assets/img/20180927_091028-e1538741458520-768x1024.jpg)](/assets/img/20180927_091028-e1538741458520.jpg)

Linked Open Data was also very present, and I enjoyed the work of Pasquale Lisena and his colleagues in [DOREMUS](http://www.doremus.org/) on integrating vocabularies for musical datasets. There is a great opportunity here to bring further integration into symbolic music representations, mixing scores, MIDI files, MusicXML, MEI and metadata databases. The work on [OpenMIC](http://ismir2018.ircam.fr/doc/pdfs/248_Paper.pdf) and [Julie Cumming et al.](http://ismir2018.ircam.fr/doc/pdfs/46_Paper.pdf) also made fundamental points to me (especially considering my Semantic Web background) on methodologies for encoding and integrating symbolic corpora --this is way more challenging than one could expect from the outside, as different encodings cover different parts of notation, there's lots of ambiguity, and systematic methods and tools need further work.

{% twitter https://twitter.com/PasqLisena/status/1044574658773880832 %}

Interestingly, some outcomes of papers fitting this topic are ready to integrate to some well-known Semantic Web projects, like [this work on extracting features from crowd-sourced recordings](http://ismir2018.ircam.fr/doc/pdfs/182_Paper.pdf) which could well enrich this [ISWC 2017 dataset describing the Live Music Archives in RDF](https://iswc2017.semanticweb.org/wp-content/uploads/papers/MainProceedings/221.pdf) :-)

I also attended Digital Libraries for Musicology ([DLfM](https://dlfm.web.ox.ac.uk/)) on the last day of ISMIR (devoted to satellite events). This is the forum for musicologists and music data publishers to come together and share ideas. Without big surprise there was a lot of datasets presented (many based on [IRCAM's](https://en.wikipedia.org/wiki/IRCAM) data), OMR (Optical Music Reconigition), [tree-like grammar generation (GTTM)](http://delivery.acm.org/10.1145/3280000/3273037/p26-marsden.pdf?ip=130.37.71.92&id=3273037&acc=OPENTOC&key=0C390721DC3021FF%2E5F9071D3233F7DA5%2EA1150A8641AE19D3%2E9F04A3A78F7D3B8D&__acm__=1538746951_874b6bd18f7526b07169283e658145af), and quite a bit of Linked Data, including the fantastic [MELD](https://github.com/oerc-music/meld), [JazzCats](http://jazzcats.cdhr.anu.edu.au/), and our very own [MIDI Linked Data](https://dlfm.web.ox.ac.uk/sites/default/files/dlfm/documents/media/merono-penuela-et-al-midi-linked-data.pdf). My favourite paper though was Nestor Napoles et al., [Encoding Matters](https://www.researchgate.net/publication/327899433_Encoding_matters), on experiments around translating between different encodings (MusicXML, MEI, etc.) and finding that either software bugs, ambiguities in encodings, or human errors make encodings quite incompatible. Overall this was a greatly inspiring event, with some takaways for me on encoding interoperability and the importance of providing good data provenance in digital libraries.

**Datasets and interactive tools**

Plenty of datasets also took the spot in ISMIR, which I think is great for reproducibility and Open Science. [This collection](https://www.audiocontentanalysis.org/data-sets/) tries to gather the ones used for MIR tasks. Being a huge videogame geek, one of my favourites was the [NES-MDB work](http://ismir2018.ircam.fr/doc/pdfs/265_Paper.pdf) by Chris Donahue et al. at UC San Diego which collects, models, and renders with unparalleled trustworthiness videogame music from the legendary NES system.

On this part though the big spot was for [Rebecca Fiebrink](https://twitter.com/RebeccaFiebrink), who in a fantastic keynote argued in favor of poor-performing, small-data trained machine learning models for awesome live musical instrument creation (spectacularly demoed live). The idea here is a strong focus on users, who can easily train models with their webcams and bodies, quickly deploying musical instruments based on body movement, synth distortion, object manipulation, etc. Her work on the [Wekinator](http://www.wekinator.org/) is famously used by lots of artists and is the perfect example of how non-general models get low scientific interest, but are incredibly useful to musicians (users). The big takeaway was thus again on explainable AI (why does the model produce this output based on this input?), but also on UI/UX design, by breaking the assumption that users always perfectly know what they want (especially in music generation, most users don't want full control on decisions).

<!-- {% twitter https://twitter.com/shockmonger/status/1044915076585730055?s=19 %} -->

Overall, ISMIR 2018 was my first ever experience with the MIR community and I learned a great deal, not just about Music Information Retrieval, but about how AI is quickly deploying in applied domains and its consequences (an active topic of discussion in our recently approved [DARIAH working group on AI and Music](https://www.dariah.eu/activities/working-groups/artificial-intelligence-and-music-aim/)); and how music and computing is an extraordinarily passionate way of doing science. Hope to repeat for years to come!

Random notes:

- All presentations are assumed to contain some music or audio -- well prepared equipment!
- Lots of dataset presentations with annotations to foster reusability and new research -- similar to the [resources track in ISWC](http://iswc2018.semanticweb.org/call-for-resources-track-papers/)
- Links everywhere in all presentations -- most had a link to GitHub
- Having an unconference within the conference is cool -- [having it well attended is even cooler](/assets/img/20180925_212712.jpg)
- [Digital Musicology Study Group meeting](https://pbs.twimg.com/media/DoBDM6mX0AAIzvx.jpg)
- In discussions, people use the expression "X is solved" a lot (most of the times X isn't really solved, but helps at keeping track of the goal)
- The Dark Side is strong [with this one](https://youtu.be/LMKAnJ21738)
- My reductionism of the day: in MIR you're either an "engineer" or a "musicologist"
- Deep [ontological discussions](/assets/img/20180928_131108.jpg) going on
- Food in Paris can be [hard](/assets/img/20180926_090229-e1538746222612.jpg)
- [Skipgrams on notation are cool](http://ismir2018.ircam.fr/doc/pdfs/202_Paper.pdf)
- [MIR researchers know their gear](/assets/img/20180926_104734-e1538744285858.jpg); yes [they do](/assets/img/20180925_170732.jpg)
- And they know how to use it [on a boat trip over the Seine](https://photos.app.goo.gl/5PSNXyacZwBFAuDs5)
