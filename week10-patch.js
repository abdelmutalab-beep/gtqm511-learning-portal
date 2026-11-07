// G TQM 511 • Week 10 course pack (original materials and assessment policy preserved).
// Slide content is based on the Week 10 deck with both Concept Check slides removed.
// Independent practice quiz is formative/ungraded; pre/post reflection remains the only weekly recurring assessed work.
(function(){
  const week=10;
  // Week 10 lecture was rescheduled to Saturday 7 Nov 2026, 15:30–18:30 (Makkah).
  // Change ONLY Week 10, preserving the approved activity intervals and policies.
  const _week10PriorSchedule=weekSchedule;
  weekSchedule=function(w){
    const s=_week10PriorSchedule(w);
    if(Number(w)!==10 || !s) return s;
    const newLecture=new Date("2026-11-07T15:30:00+03:00");
    const delta=newLecture.getTime()-s.lecture.getTime();
    const shifted={...s};
    for(const [key,value] of Object.entries(s)){
      if(value instanceof Date) shifted[key]=new Date(value.getTime()+delta);
    }
    return shifted;
  };

  packs[week]={
    objectives:[
      "Distinguish work groups from work teams by collective goals, positive synergy, complementary skills and mutual accountability.",
      "Identify problem-solving, self-managed, cross-functional, virtual and multiteam team structures.",
      "Evaluate team effectiveness through context, composition and processes.",
      "Develop a quality improvement team charter with shared outcomes and visible ownership.",
      "Apply teamwork theory to a hospital or production quality challenge."
    ],
    topics:[
      ["Work groups versus work teams","A work group mainly exchanges information so people can carry out individual responsibilities. A work team coordinates interdependent contributions to achieve collective outputs with positive synergy and both individual and mutual accountability."],
      ["Four foundations of teamwork","Shared purpose identifies what the team jointly delivers. Positive synergy is added value from coordination. Complementary skills combine technical, problem-solving and interpersonal expertise. Mutual accountability means members accept responsibility for the collective result."],
      ["Problem-solving teams","Members meet to discuss ways of improving quality, work methods and safety. They can suggest corrective actions; implementation authority depends on the organization's structure. Example: ward staff recommend safer handover procedures."],
      ["Self-managed work teams","Members take substantial responsibility for scheduling, coordinating, monitoring and sometimes assigning work. Example: a production cell organizes daily work while meeting quality and safety requirements."],
      ["Cross-functional teams","Members come from different functional areas to solve an interdependent problem. Example: ward, pharmacy, billing and transport redesign hospital discharge together."],
      ["Virtual teams","Members primarily work through digital communication across locations. Example: multisite audit teams reviewing evidence and corrective actions online."],
      ["Multiteam systems","Several interdependent teams coordinate toward a higher-level goal. Example: clinical, IT and operational rollout teams jointly implementing a hospital-wide patient safety program."],
      ["Effective teams: the three pillars","Context: resources, leadership/structure, trust and performance evaluation/rewards. Composition: skills, roles, diversity, size, member preferences. Processes: shared purpose, specific goals, team efficacy, shared mental models, constructive conflict and social loafing control."],
      ["Team context","Provide adequate time and data, relevant authority, supporting leadership, psychologically safe communication and rewards that do not undermine collective performance."],
      ["Team composition","Choose complementary technical, analytic and interpersonal capabilities. Involve frontline staff who understand the process; set clear roles and keep membership manageable."],
      ["Team processes","Write a common purpose and specific measurable goals. Understand the end-to-end process together. Build confidence through feedback, debate assumptions constructively, and make responsibility visible."],
      ["Turning individuals into team players","Select for collaboration as well as expertise, train communication and conflict management, reward shared results, and specify individual action owners to reduce social loafing."],
      ["Quality improvement team charter","Document the customer problem, baseline, measurable target, scope, sponsor, process owner, members, authority, milestones, action ownership and review cadence."],
      ["PDCA and evidence of improvement","Plan an intervention from data, trial the change, study results and act to standardize or revise. Track outcome, process and balancing indicators; confirm sustained performance."],
      ["Case A: delayed discharge","Discharge is delayed after clinical clearance because ward, pharmacy, billing and transport handoffs are fragmented. A cross-functional team should map the pathway, test handoff changes and track clearance-to-exit time, delayed cases and medication safety."],
      ["Case B: production rework","Production, maintenance and quality inspection hold separate meetings while defects persist. A cross-functional problem-solving team should identify causes, trial solutions and monitor first-pass yield, rework rate and safety."],
      ["Design challenge and reflection","Choose a quality gap, explain why interdependence requires a team, select an appropriate team type, build a charter, define baseline and target, propose at least one outcome indicator and one balancing indicator, and give a three-minute pitch."],
      ["Key takeaway","Shared purpose + right team + supportive context + productive processes + credible measurement = the foundation for measurable, sustainable quality improvement."]
    ],
    activity:"In-class Team Design Challenge (25 minutes plus 3-minute presentation): identify one quality gap; select a team type; name a sponsor, process owner and key members; write a team charter with a measurable target, baseline and milestones; identify outcome, process and balancing measures. This is an instructor-led activity, not an extra assessed homework.",
    caseTitle:"Mini Case: Delayed Patient Discharge",
    caseText:"A hospital clears patients clinically, but many remain for hours because pharmacy, billing and transport handoffs are fragmented. No department owns the complete discharge pathway. The team must recommend a shared redesign rather than separate departmental fixes.",
    caseQuestions:[
      "Why is this an interdependent TEAM problem rather than a collection of individual tasks?",
      "Which team structure should be used and which functions must be represented?",
      "Draft the team purpose, scope, sponsor, process owner and authority.",
      "Select an outcome, process and balancing indicator, each with a data source.",
      "What behavior or coordination risk might prevent success and how would you manage it?"
    ],
    quiz:[
      ["Department heads meet monthly to share progress reports. Each head delivers results independently; there is no shared output. This is a:",["Work team","Work group","Self-managed team","Cross-functional team"],1],
      ["A hospital must redesign discharge handoffs across ward, pharmacy, billing and transport. Which team structure is MOST appropriate?",["Single-unit problem-solving team","Single-unit self-managed team","Cross-functional team","Virtual team only"],2],
      ["Problem-solving teams typically:",["Discuss improvements and recommend changes","Have universal authority over policy","Always work remotely","Avoid performance indicators"],0],
      ["A self-managed work team normally:",["Coordinates much of its own work","Works without quality standards","Needs no communication","Has no shared goals"],0],
      ["Which is an example of team CONTEXT?",["Resources, leadership and trust","One individual's personality only","The oldest member's age","One job description only"],0],
      ["Team COMPOSITION concerns:",["Skills, roles, diversity and appropriate size","Only meeting time","Only funding","Only annual revenue"],0],
      ["Which is a productive team PROCESS?",["Common purpose and measurable shared goals","Undefined responsibilities","Silencing disagreement","Avoiding feedback"],0],
      ["To reduce SOCIAL LOAFING, teams should:",["Assign named action owners and review contributions","Hide individual inputs","Expand without coordination","Cancel feedback"],0],
      ["Best proof of quality team success:",["Sustained measured quality improvements","The most meetings","A unanimous vote alone","The largest membership"],0],
      ["A quality improvement team charter should include:",["Purpose, scope, roles, authority, target and measures","Only meeting schedule","Only member names","Only course references"],0]
    ],
    assignment:"Guided Week 10 project milestone (not an additional graded weekly assignment): justify the team required for your selected quality problem, draft a charter with ownership, baseline, outcome and balancing measures, and relate the team design to the final project. Follow the existing Week 15 final individual submission arrangements."
  };
  const common=["Name a workplace quality problem.","Apply accurate Week 10 teamwork concepts to evidence.","Propose roles, actions and measures that can verify improvement."];
  const guide=(expected,model,keywords)=>({expected,model,keywords});
  reviewGuides[week]={
    preclass:guide(["Identify an observable workplace problem involving more than one role or department.","Explain whether the arrangement acts like a work group or an actual work team.","Relate your observation to a quality outcome."],"A good reflection identifies interdependence, shared output and accountability, and separates observed facts from assumptions.",["team","group","shared","goal","quality","responsibility","interdependent"]),
    reflection:guide(["Name a team design or effectiveness concept.","Apply it to a concrete quality problem.","Explain a practical step and a measure of its impact."],"Example: create a cross-functional discharge team, set a common lead-time target, assign handoff owners, and track discharge delays and medication-related balancing measures.",["team","quality","cross-functional","charter","goal","owner","measure"]),
    activity:guide(common,"Select a fitting team type, create a charter with owner and target, then name an outcome and balancing metric.",["team","charter","role","target","owner","measure"]),
    case:guide(common,"An interdepartmental discharge problem needs shared end-to-end ownership, a cross-functional team and measured results.",["discharge","cross-functional","handoff","owner","time","patient"]),
    assignment:guide(common,"Quality gap → team design rationale → charter → roles and authority → quality measures.",["team","charter","roles","quality","baseline","measure"])
  };

  const links={
    ppt:"https://docs.google.com/presentation/d/137hoH6QV_UAA0NGG4L2OFgDMrT4t3YZF/edit?usp=drivesdk&ouid=114608630835662260700&rtpof=true&sd=true",
    pdf:"https://drive.google.com/file/d/1Uj5tvJCyTHI7eEnGqjD4_T6Kh07w3IHd/view?usp=drivesdk",
    guide:"https://docs.google.com/document/d/1TWbsbV8QHDdsPYduCvHMzOFsN7n3obz7/edit?usp=drivesdk&ouid=114608630835662260700&rtpof=true&sd=true",
    worksheet:"https://docs.google.com/document/d/1ASh9mUXfnL25mh5QQGIRB9IXc_jB75RK/edit?usp=drivesdk&ouid=114608630835662260700&rtpof=true&sd=true"
  };
  const lecture=[
    ["Understanding Work Teams and Quality Teams","Building effective work teams to deliver measurable quality improvement."],
    ["Learning Outcomes","Differentiate groups and teams. Identify team types. Analyze context, composition and processes. Design a quality team charter. Evaluate workplace applications."],
    ["Session Roadmap","00–20 Opening; 20–55 Foundations; 55–80 Team types; 80–90 Break; 90–120 Effectiveness; 120–150 Quality practice; 150–180 Apply and assess."],
    ["Work Groups Versus Work Teams","Compare collective goals, individual versus mutual accountability, complementary skills and positive synergy."],
    ["Understanding Teamwork: Core Concepts","Shared purpose. Positive synergy. Complementary skills. Mutual accountability."],
    ["Five Types of Work Teams","Problem-solving. Self-managed. Cross-functional. Virtual. Multiteam systems."],
    ["Team Types in Quality Improvement","Problem-solving: ward handover. Cross-functional: patient journey redesign. Virtual: multisite audit teams."],
    ["Creating Effective Teams: Three Pillars","Context and composition (resources, leadership, trust, skills and roles) plus processes (shared goals, coordination and team efficacy)."],
    ["Team Context: Conditions for Success","Adequate resources; leadership and structure; climate of trust; team-based rewards; decision authority."],
    ["Team Composition: Build the Right Mix","Technical capability; complementary skills; role allocation; appropriate size and willingness to collaborate."],
    ["Team Processes: From Coordination to Results","Common purpose; specific goals; shared mental models; team efficacy; constructive conflict; visible ownership."],
    ["Turning Individuals into Team Players","Select for teamwork; train collaboration; reward shared results; prevent social loafing."],
    ["Designing a High-Impact Quality Team","Team charter; customer and process information; PDCA or structured root-cause method; evidence of impact."],
    ["Case A: Delayed Patient Discharge","Analyze ward, pharmacy, billing and transport handoffs. Form a cross-functional team. Track discharge lead time and patient feedback."],
    ["Case B: Rework in Production","Coordinate production, maintenance and inspection. Track first-pass yield, rework and defects."],
    ["In-class Team Design Challenge","Identify quality gap; choose team type; draft charter; set baseline and targets; present a three-minute pitch."],
    ["Assessment and Individual Assignment","In-class practice and ungraded knowledge check; follow existing major assignment milestones and approved grading policy."],
    ["Key Takeaways","Differentiate teams and groups. Choose the right team. Enable conditions. Prove measurable quality results."]
  ];
  const escapeHtml=(x)=>String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const resources=()=>'<div class="file-actions" style="margin:12px 0">'+
    '<a class="btn good" target="_blank" rel="noopener" href="week10-student-pack.html">Open Student Pack (No Drive Login)</a>'+
    '<a class="btn" target="_blank" rel="noopener" href="'+links.pdf+'">18-slide lecture PDF</a>'+
    '<a class="btn alt" target="_blank" rel="noopener" href="'+links.ppt+'">PowerPoint</a>'+
    '<a class="btn alt" target="_blank" rel="noopener" href="'+links.guide+'">Student Study Guide</a>'+
    '<a class="btn alt" target="_blank" rel="noopener" href="'+links.worksheet+'">Team Charter Worksheet</a></div>'+
    '<p class="muted" style="font-size:12px">Google Drive resources: file opening may require the owner to grant you viewer access. An in-portal lecture version is provided below.</p>';
  const parentTabs=renderWeekTabs;
  renderWeekTabs=function(){
    parentTabs();
    if(Number(currentWeek)===week){
      const b=document.createElement("button");
      b.className="tab"+(currentTab==="practice"?" active":"");
      b.textContent="Practice Quiz • Ungraded";
      b.onclick=()=>{currentTab="practice";renderWeekTabs();renderWeekBody();sendHeartbeat();};
      weekTabs.appendChild(b);
    }
  };
  const parentBody=renderWeekBody;
  renderWeekBody=function(){
    if(Number(currentWeek)!==week){return parentBody();}
    if(currentTab==="slides"){
      const av=activityAvailability(week,"slides");
      if(!adminUnlocked&&!av.open){lockedCard("slides",av);return;}
      let ix=0;
      weekBody.innerHTML='<div class="card"><h3>Week 10 Lecture • 18 slides</h3>'+
      '<p class="muted">The two Concept Check slides have been removed from the presentation; their learning check is included in the ungraded practice quiz.</p>'+
      resources()+
      '<div style="border:1px solid #d5e2e5;border-top:8px solid #10233f;border-radius:12px;padding:24px;min-height:310px;background:#f8fbfc">'+
      '<div id="wk10SlideIndex" style="color:#0b8491;font-weight:bold"></div>'+
      '<h2 id="wk10SlideTitle" style="font-size:26px;margin:13px 0;color:#10233f"></h2>'+
      '<div style="width:84px;height:5px;background:#e5b34b;margin:14px 0"></div>'+
      '<p id="wk10SlideText" style="white-space:pre-line;line-height:1.85;font-size:18px;max-width:800px"></p></div>'+
      '<div class="file-actions"><button id="wk10Prev" class="btn alt">← Previous</button>'+
      '<button id="wk10Next" class="btn">Next →</button></div>'+
      '<div class="notice">Use the Core Content tab for explanations and examples. The Practice Quiz tab contains the two removed Concept Checks and eight additional questions.</div></div>';
      const paint=()=>{
        document.getElementById("wk10SlideIndex").textContent="G TQM 511  |  WEEK 10  |  "+String(ix+1).padStart(2,"0")+" / 18";
        document.getElementById("wk10SlideTitle").textContent=lecture[ix][0];
        document.getElementById("wk10SlideText").textContent=lecture[ix][1];
        document.getElementById("wk10Prev").disabled=ix===0;
        document.getElementById("wk10Next").disabled=ix===17;
      };
      document.getElementById("wk10Prev").onclick=()=>{ix=Math.max(0,ix-1);paint();};
      document.getElementById("wk10Next").onclick=()=>{ix=Math.min(17,ix+1);paint();};
      paint();
      if(!adminUnlocked&&student())markLectureViewed();
      return;
    }
    if(currentTab==="practice"){
      const qs=packs[week].quiz;const qHtml=qs.map((q,i)=>'<div class="topic"><h4>'+(i+1)+'. '+escapeHtml(q[0])+'</h4>'+
        q[1].map((op,j)=>'<label style="display:block;margin:6px 0;padding:8px;border:1px solid #e5e7eb;border-radius:8px">'+
        '<input type="radio" name="wk10practice'+i+'" value="'+j+'" style="width:auto"> '+String.fromCharCode(65+j)+'. '+escapeHtml(op)+'</label>').join('')+
        '<p id="wk10fb'+i+'" class="muted"></p></div>').join('');
      weekBody.innerHTML='<div class="card"><h3>Week 10 • Formative Knowledge Check</h3>'+
      '<div class="success"><b>Practice only.</b> Ten multiple-choice questions, including the two concepts removed from the PowerPoint. This quiz is ungraded; answers are not submitted to central student records.</div>'+
      '<div class="quiz">'+qHtml+'</div>'+
      '<div class="file-actions"><button class="btn" id="wk10Check">Check My Answers</button>'+
      '<button class="btn alt" id="wk10Reset">Try Again</button></div>'+
      '<p class="muted" id="wk10Overall">Choose one answer for each question.</p></div>';
      document.getElementById("wk10Check").onclick=()=>{
        let n=0,done=0;
        const explanations=[
          "This is a work group: department heads exchange information while remaining responsible for independent outputs.",
          "The discharge process crosses functional boundaries, so a cross-functional team is most suitable.",
          "Problem-solving teams may recommend improvements without automatically having full authority.",
          "Self-managed teams organize and coordinate a substantial part of their own work.",
          "Resources, leadership and trust are context conditions.",
          "Skills, roles, diversity and size are composition features.",
          "Shared purpose and specific goals are team processes.",
          "Clear action owners make contributions visible and reduce free-riding.",
          "Sustained quality outcomes are stronger evidence than meeting counts.",
          "A charter captures purpose, scope, accountability, targets and measures."
        ];
        qs.forEach((q,i)=>{
          const ans=document.querySelector('input[name="wk10practice'+i+'"]:checked');
          const fb=document.getElementById('wk10fb'+i);
          if(ans)done++;
          const ok=ans && Number(ans.value)===q[2];
          if(ok)n++;
          fb.textContent=(!ans?"Not answered. ":"")+(ok?"Correct. ":"Correct answer: "+String.fromCharCode(65+q[2])+". ")+explanations[i];
          fb.className=ok?"success":"notice";
        });
        document.getElementById("wk10Overall").textContent="Practice result: "+n+" / "+qs.length+" correct; "+done+" answered. Ungraded, not saved.";
      };
      document.getElementById("wk10Reset").onclick=()=>renderWeekBody();
      return;
    }
    parentBody();
    if((currentTab==='preclass'||currentTab==='reflection')&&!adminUnlocked&&!activityAvailability(week,currentTab).open)return;
    const p=student()?getProg(student().id,week):blankProg();
    if(currentTab==="overview"){
      const div=document.createElement("div");div.className="card";div.style.marginTop="14px";
      div.innerHTML='<h3>Week 10 Student Learning Pack</h3><p>Lecture (18 slides), student study guide, quality-team charter worksheet, two applied cases, independent reading and a ten-question ungraded practice quiz.</p>'+
      resources()+
      '<p><b>Independent-study milestone:</b> '+escapeHtml(packs[week].assignment)+'</p>'+
      '<div class="success">No new graded assignment was added. Existing weekly reflection and major-assignment policies are unchanged.</div>';
      weekBody.appendChild(div);
    }
    if(currentTab==="content"){
      const div=document.createElement("div");div.className="card";div.style.marginTop="14px";
      div.innerHTML='<h3>Additional Week 10 Resources</h3>'+resources()+'<h4>Team Design Activity</h4><p>'+escapeHtml(packs[week].activity)+'</p>'+
      '<h4>Mini Case • '+escapeHtml(packs[week].caseTitle)+'</h4><p>'+escapeHtml(packs[week].caseText)+'</p><ol>'+
      packs[week].caseQuestions.map(x=>'<li>'+escapeHtml(x)+'</li>').join('')+'</ol>';
      weekBody.appendChild(div);
    }
    if(currentTab==="preclass"){
      weekBody.querySelector("h3") && (weekBody.querySelector("h3").textContent="Pre-Class Reflection • Week 10");
      const info=weekBody.querySelector("p");
      if(info)info.textContent="Describe a problem spanning departments or staff. Does the current arrangement behave like a group or a team? Explain the quality impact.";
    }
    if(currentTab==="reflection"){
      weekBody.querySelector("h3") && (weekBody.querySelector("h3").textContent="Post-Class Reflection • Week 10");
      const info=weekBody.querySelector("p");
      if(info)info.textContent="Name one team-design principle you would apply at work, why it fits the quality problem, and the measure you would monitor.";
    }
  };
  try{renderWeeks();}catch(e){console.warn("Week 10 card refresh failed",e);}
})();