// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-bio",
          title: "Bio",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bio/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Members of the KCL Knowledge Graphs Lab under my supervision",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-trips",
          title: "Trips",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/trips/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-ai-amp-society-article-on-hermeneutic-prompting-featured-in-forbes",
          title: 'AI &amp;amp; SOCIETY article on hermeneutic prompting featured in Forbes',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-our-cube-mt-paper-on-benchmarking-multimodal-knowledge-graphs-with-generative-ai-has-been-accepted-at-eswc-2026-best-resource-paper-award-nominee",
          title: 'Our CUBE-MT paper on benchmarking multimodal knowledge graphs with generative AI has been...',
          description: "",
          section: "News",},{id: "news-maayan-and-katharine-have-both-passed-their-18-month-upgrade-vivas-congratulations",
          title: 'Maayan and Katharine have both passed their 18-month upgrade vivas — congratulations! 🎉...',
          description: "",
          section: "News",},{id: "news-xin-fan-s-knowml-paper-on-intrusion-detection-with-knowledge-graphs-has-been-accepted-at-usenix-security-2026",
          title: 'Xin Fan’s KnowML paper on intrusion detection with knowledge graphs has been accepted...',
          description: "",
          section: "News",},{id: "news-yihang-s-ontoscope-and-ontochat-for-user-story-generation-papers-have-been-accepted-at-iui-2026-and-acm-tist-respectively",
          title: 'Yihang’s OntoScope and Ontochat for user story generation papers have been accepted at...',
          description: "",
          section: "News",},{id: "news-arunav-et-al-s-paper-on-extended-neon-gpt-advancing-llm-powered-ontology-learning-through-ontology-reuse-and-automated-verification-has-been-accepted-at-the-semantic-web-journal",
          title: 'Arunav et al’s paper on Extended NeOn-GPT: Advancing LLM-Powered Ontology Learning Through Ontology...',
          description: "",
          section: "News",},{id: "news-michelle-s-paper-on-inequalities-and-challenges-in-representing-ethnicity-data-on-wikidata-has-been-accepted-at-facct-2026-and-is-now-available-online",
          title: 'Michelle’s paper on inequalities and challenges in representing ethnicity data on Wikidata has...',
          description: "",
          section: "News",},{id: "news-ma-ayan-s-paper-tp-ont-an-ontology-for-enhanced-reasoning-in-ai-task-planning-has-been-accepted-at-iswc-2026",
          title: 'Ma’ayan’s paper TP-ONT: An Ontology for Enhanced Reasoning in AI Task Planning has...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},];
