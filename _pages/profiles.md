---
layout: page
permalink: /people/
title: People
description: Members of the KCL Knowledge Graphs Lab under my supervision
nav: true
nav_order: 7
---
<!--
  LAB MEMBERS GRID
  ================
  To add a photo for any member, replace the inner <div class="avatar ..."> block
  with a plain <img> tag, e.g.:
 
    <img src="/assets/img/team/bohui-zhang.jpg" alt="Bohui Zhang">
 
  Square-crop your photos before adding them — any resolution works, CSS handles sizing.
  Suggested path: /assets/img/team/<firstname-lastname>.jpg
-->
 
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
 
<style>
  .lab-members {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    color: #000;
  }
 
  .lab-members h2 {
    font-family: Roboto, sans-serif;
    font-size: 32px;
    font-weight: 300;
    line-height: 1.2;
    margin: 2rem 0 1rem;
    color: #000;
  }
 
  .lab-members hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 0 1.5rem;
  }
 
  .members-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 16px;
    margin-bottom: 2.5rem;
  }
 
  .member-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
 
  /* Square photo / placeholder container */
  .member-card .photo-wrap {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    margin-bottom: 8px;
    background: #f5f5f5;
  }
 
  .member-card .photo-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
 
  /* Initials placeholder — remove once real photo is supplied */
  .member-card .avatar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto, sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
  }
 
  .member-card .name {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #000;
    line-height: 1.35;
    margin: 0 0 2px;
  }
 
  .member-card .role {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #000;
    line-height: 1.4;
    margin: 0;
  }
 
  /* Previous members — slightly muted, recovers on hover */
  .members-grid.previous .member-card .name,
  .members-grid.previous .member-card .role {
    color: #555;
  }
  .members-grid.previous .member-card:hover .name,
  .members-grid.previous .member-card:hover .role {
    color: #000;
    transition: color 0.15s ease;
  }
</style>
 
<div class="lab-members">
 
  <h2>Current</h2>
  <hr>
  <div class="members-grid">
 
    <!-- Ioannis Reklos — swap avatar for: <img src="/assets/img/team/ioannis-reklos.jpg" alt="Ioannis Reklos"> -->
    <div class="member-card">
      <div class="photo-wrap">
        <div class="avatar" style="background:#EEEDFE; color:#3C3489;">IR</div>
      </div>
      <p class="name">Ioannis Reklos</p>
      <p class="role">PhD student</p>
    </div>
 
    <!-- Chiara di Bonaventura — swap for: <img src="/assets/img/team/chiara-di-bonaventura.jpg" alt="Chiara di Bonaventura"> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/chiara-di-bonaventura.jpg" alt="Chiara di Bonaventura">
      </div>
      <p class="name">Chiara di Bonaventura</p>
      <p class="role">PhD student</p>
    </div>
 
    <!-- Michelle Nwachukwu — swap for: <img src="/assets/img/team/michelle-nwachukwu.jpg" alt="Michelle Nwachukwu"> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/michelle-nwachukwu.jpg" alt="Michelle Nwachukwu">
      </div>
      <p class="name">Michelle Nwachukwu</p>
      <p class="role">PhD student</p>
    </div>
 
    <!-- Katharine Sparks — swap for: <img src="/assets/img/team/katharine-sparks.jpg" alt="Katharine Sparks"> -->
    <div class="member-card">
      <div class="photo-wrap">
        <div class="avatar" style="background:#FBEAF0; color:#72243E;">KS</div>
      </div>
      <p class="name">Katharine Sparks</p>
      <p class="role">PhD student</p>
    </div>
 
    <!-- Bohui Zhang — swap for: <img src="/assets/img/team/bohui-zhang.jpg" alt="Bohui Zhang"> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/bohui-zhang.webp" alt="Bohui Zhang"> 
      </div>
      <p class="name">Bohui Zhang</p>
      <p class="role">PhD student</p>
    </div>
 
    <!-- Yihang Zhao — swap for: <img src="/assets/img/team/yihang-zhao.jpg" alt="Yihang Zhao"> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/yihang-zhao.webp" alt="Yihang Zhao">
      </div>
      <p class="name">Yihang Zhao</p>
      <p class="role">PhD student</p>
    </div>
 
    <!-- Arunav Das — swap for: <img src="/assets/img/team/arunav-das.jpg" alt="Arunav Das"> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/arunav-das.jpg" alt="Arunav Das">
      </div>
      <p class="name">Arunav Das</p>
      <p class="role">PhD student</p>
    </div>
 
    <!-- Maayan Armony — swap for: <img src="/assets/img/team/maayan-armony.jpg" alt="Maayan Armony"> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/maayan-armony.jpg" alt="Maayan Armony"> 
      </div>
      <p class="name">Maayan Armony</p>
      <p class="role">PhD student</p>
    </div>
 
    <!-- Shuyin Ouyang — swap for: <img src="/assets/img/team/shuyin-ouyang.jpg" alt="Shuyin Ouyang"> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/shuyin-ouyang.jpg" alt="Shuyin Ouyang">
      </div>
      <p class="name">Shuyin Ouyang</p>
      <p class="role">PhD student</p>
    </div>
 
  </div><!-- /.members-grid -->
 
  <h2>Previous</h2>
  <hr>
  <div class="members-grid previous">
 
    <!-- Xin Fan Guo — swap for: <div class="avatar" style="background:#EEEDFE; color:#3C3489;">XG</div> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/xin-fan-guo.jpg" alt="Xin Fan Guo">
      </div>
      <p class="name">Xin Fan Guo</p>
      <p class="role">PhD student (now at Imperial College London)</p>
    </div>
 
    <!-- Nitisha Jain — swap for: <div class="avatar" style="background:#E1F5EE; color:#085041;">NJ</div> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/nitisha-jain.jpg" alt="Nitisha Jain">
      </div>
      <p class="name">Nitisha Jain</p>
      <p class="role">Research Associate (now a LASR Fellow)</p>
    </div>
 
    <!-- Jongmo Kim — swap for: <div class="avatar" style="background:#FAECE7; color:#712B13;">JK</div> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/jongmo-kim.jpg" alt="Jongmo Kim">
      </div>
      <p class="name">Jongmo Kim</p>
      <p class="role">Research Associate</p>
    </div>
 
    <!-- Jacopo de Berardinis — swap for: <div class="avatar" style="background:#FBEAF0; color:#72243E;">JB</div> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/jacopo-de-berardinis.jpg" alt="Jacopo de Berardinis">
      </div>
      <p class="name">Jacopo de Berardinis</p>
      <p class="role">Research Associate (now Lecturer at University of Liverpool)</p>
    </div>
 
    <!-- Elisavet Koutsiana — swap for: <div class="avatar" style="background:#E6F1FB; color:#0C447C;">EK</div> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/elisavet-koutsiana.jpg" alt="Elisavet Koutsiana">
      </div>
      <p class="name">Elisavet Koutsiana</p>
      <p class="role">PhD student (now at EY Greece)</p>
    </div>
 
    <!-- David Abián — swap for: <div class="avatar" style="background:#EAF3DE; color:#27500A;">DA</div> -->
    <div class="member-card">
      <div class="photo-wrap">
        <img src="/assets/img/team/david-abian.jpg" alt="David Abián">
      </div>
      <p class="name">David Abián</p>
      <p class="role">PhD student</p>
    </div>
 
    <!-- Ruud Skipper — swap for: <div class="avatar" style="background:#FAEEDA; color:#633806;">RS</div> -->
    <div class="member-card">
      <div class="photo-wrap"> 
        <img src="/assets/img/team/ruud-skipper.jpg" alt="Ruud Skipper">
      </div>
      <p class="name">Ruud Skipper</p>
      <p class="role">PhD student</p>
    </div>
 
  </div><!-- /.members-grid.previous -->
 
</div><!-- /.lab-members -->