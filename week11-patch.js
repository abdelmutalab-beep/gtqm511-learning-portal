// G TQM 511 | Week 11 • Communication and Quality Performance.
// Based on instructor's 18-slide PowerPoint and PDF (14 November 2026).
// Preserves existing grading: weekly Pre-/Post-Class Reflections; 10-question practice ungraded.
(function(){
  const week=11;
  const originalSchedule=weekSchedule;
  weekSchedule=function(w){
    const s=originalSchedule(w);
    if(Number(w)!==week || !s)return s;
    // Confirmed actual Week 11 lecture start: Sat 14 Nov 2026, 20:00 GMT / 23:00 Makkah.
    const approved=new Date("2026-11-14T20:00:00Z");
    const lectureClose=new Date(approved.getTime()+180*60000);
    return {...s,
      lecture:approved,lectureOpen:approved,lectureClose,
      guidedOpen:new Date("2026-11-11T17:00:00Z"), // Wednesday 20:00 Makkah
      preclassOpen:new Date("2026-11-13T17:00:00Z"), // Friday 20:00 Makkah
      preclassReminder:new Date(approved.getTime()-240*60000),
      preclassClose:approved, // close at exactly 20:00 GMT
      slidesOpen:new Date("2026-11-14T11:00:00Z"), // Saturday 14:00 Makkah
      postclassOpen:lectureClose,
      postclassClose:new Date("2026-11-17T20:59:59.999Z"),
      quizOpen:new Date(lectureClose.getTime()+5*60000),
      quizClose:new Date(lectureClose.getTime()+35*60000),
      assignmentOpen:new Date(lectureClose.getTime()+30*60000)
    };
  };
  packs[week]={"objectives":["Explain how communication supports quality policy, process control and improvement.","Select communication methods according to audience, purpose, urgency, complexity and risk.","Design a communication plan for quality objectives, process changes and performance results.","Interpret quality indicators using definitions, baseline, target, trends and data limits.","Apply two-way communication and performance review to a service quality case."],"topics":[["What Is Communication?","Communication is the exchange of information that builds shared understanding and helps people coordinate action. Clarify the purpose and audience, use an appropriate message and channel, and verify understanding through response and feedback."],["Functions of Communication","Communication helps coordinate behavior, motivate people through goals and feedback, express concerns and emotions, and provide information for decisions. These functions support quality standards, reporting and improvement."],["The Communication Process: Practical Steps","Define purpose and audience; prepare clear, accurate, actionable information; choose the channel and timing; confirm the message was understood and follow up on unresolved questions."],["Communication Process Model","Sender → encoding → channel → receiver / decoding → feedback. Noise may distort meaning at any stage. Feedback checks that the sender's intended meaning was received and guides appropriate action."],["Direction of Communication","Downward communication conveys objectives, work instructions and changes; upward communication carries concerns, suggestions and evidence; horizontal communication coordinates handoffs across processes and departments."],["Channels and Active Listening","Written procedures, checklists and dashboards give consistent references and traceability. Briefings and direct conversation support questions and timely clarification. Ask for facts, confirm understanding and respond to concerns."],["Channel Richness","Written records offer traceability but limited immediate cues; email or dashboards reach many people but feedback may be delayed; live calls enable interactive questions; face-to-face discussion provides voice, expression and immediate feedback. Choose the channel according to complexity and urgency."],["Speaking Up and Closing the Feedback Loop","Make it safe and simple for people to raise a quality concern. Acknowledge it, clarify the risk, assign an owner, act, and report the outcome back. Reporting alone does not close the communication loop."],["Planning Communication Around Work","Specify the audience, message, channel, timing, sender or process owner, expected action and method of checking understanding. Match the plan to process changes, risks and decision points."],["Quality Performance Information","A useful performance report states objective, indicator calculation, unit and denominator, source and period, baseline and target, responsible owner and action when performance deviates."],["Types of Quality Indicators","Outcome measures show customer and quality results (complaints per 1,000 orders). Process measures show whether work steps occurred as intended (checks completed on time). Balancing measures detect unintended effects elsewhere (damage rate alongside faster delivery)."],["Reading Performance Trends","Compare multiple periods, interpret the gap to target, segment only comparable data, verify data quality before assigning causes, choose an action and owner, and recheck results."],["Dashboards and Performance Conversations","Use a small number of clearly defined indicators with units, periods, source, baseline and target. Explain exceptions and limitations; discuss evidence, record actions, owners and dates and follow up."],["Case: Rising Customer Complaints","Over six weeks a service center sees increasing complaints about delayed responses. The quality lead briefs customer service and operations using a defined complaint rate and trend. The team checks workload, handoffs, response times and categories, tests one change and rechecks results."],["Applied Challenge: Communicate a Quality Gap","In small groups, prepare a two-minute performance briefing: define the audience and quality gap, show a relevant indicator and comparison period, choose a clear visual or summary, and request a specific action with owner, timing and follow-up."],["Key Takeaways","Make communication usable: match audience, message, channel and risk. Make it two-way: invite concerns, verify understanding and respond. Make quality information clear: define measures, show targets and trends, and report data limits."]],"activity":"In-class group activity: Communicate a Quality Gap. Prepare a two-minute briefing. First define a quality problem and audience; second show evidence with indicator, period, target and a simple visual; third request one action, owner, due date and a follow-up check. Instructor-led; no extra weekly grade.","caseTitle":"Mini Case: Rising Customer Complaints","caseText":"A service center has received more customer complaints about slow responses over six weeks. The quality lead has a complaint trend, but departments disagree on whether workload, handoffs or delayed approvals are responsible. The team needs a clear communication plan and evidence-based action.","caseQuestions":["Which stakeholder groups need the quality information, and what should each group understand or do?","Which rate, reporting period, baseline and target should the quality lead explain?","Which channel would best support timely discussion and a traceable decision, and why?","What further process information should be checked before attributing a cause?","Propose one improvement action, name an owner and a review date, and select an outcome and balancing measure."],"quiz":[["Which statement BEST describes communication in the Week 11 lecture?",["The exchange of information that builds shared understanding and coordinates action","Publishing reports without checking responses","Giving instructions with no opportunity for feedback","Using the fastest available technology"],0],["An employee alerts senior management to a safety problem. This is primarily:",["Downward communication","Horizontal communication","Upward communication","External marketing"],2],["Within the communication process, encoding means:",["Evaluating the outcome indicator","Turning an intended meaning into words, symbols or data","Removing the receiver from a discussion","Selecting a corrective action owner"],1],["Which element helps verify that the receiver understood the message?",["Message length","Formality alone","Technical vocabulary","Feedback"],3],["A sensitive and complex change requires immediate discussion and clarification. Which channel is most appropriate?",["Only a static report","A face-to-face or live interactive discussion","An unattended dashboard","An unsigned notice"],1],["Which communication plan is most complete?",["Audience, message, channel, timing, owner and understanding check","Only the sender and email address","Only a list of documents","Only a presentation format"],0],["Customer complaints per 1,000 orders is most directly an example of:",["A balancing measure only","An employee attitude measure","An outcome measure","A meeting attendance measure"],2],["The percentage of required inspections completed on time is:",["A market share measure","A process measure","A financial profit measure","An unrelated demographic measure"],1],["Why should a team track damage rates while seeking faster deliveries?",["To remove the need for a target","Because damage is always unrelated","To count extra messages","To check for unintended adverse effects using a balancing measure"],3],["Complaints have risen over six weeks. What is the BEST first response?",["Blame the service staff immediately","Ignore the trend if the current month is below target","Validate indicator definitions and trends, review handoffs and workload, then assign a tested action","Replace every process without collecting evidence"],2]],"assignment":"Guided project milestone (not a separate graded assignment): draft a short quality communication plan for the workplace problem in your existing individual project, specifying audience, indicator, baseline, target, channel, owner, feedback and review date. Final individual project submission remains in Week 15."};
  reviewGuides[week]={"preclass":{"expected":["Describe one real quality issue associated with unclear messages, channel mismatch or missing feedback.","Identify sender, receiver and affected process.","Suggest the evidence needed to distinguish misunderstanding from other causes."],"model":"A clear observation about communication failure, its quality consequence and a proposed verification of understanding.","keywords":["communication","message","feedback","quality","channel","audience"]},"reflection":{"expected":["Select a relevant quality indicator, including definition and reporting period.","Describe the audience, channel, timing and feedback mechanism.","Explain what action and follow-up would be expected."],"model":"A strong answer connects a measurable signal to a target audience, two-way communication, ownership and rechecking quality results.","keywords":["indicator","quality","baseline","target","feedback","action","owner"]},"activity":{"expected":["State the quality gap and who must respond.","Show evidence and appropriate communication channel.","Identify the next step, owner and review date."],"model":"Audience → credible quality signal → concise briefing → action owner → follow-up and balancing metric.","keywords":["quality","communication","indicator","audience","owner","action"]},"case":{"expected":["Diagnose problems in message and feedback flow.","Describe useful indicators and process evidence.","Recommend a channel and action ownership.","Explain how outcomes will be reviewed."],"model":"Communicate the complaint trend, review cross-functional data and choose an actionable, traceable follow-up.","keywords":["complaints","handoff","baseline","trend","channel","feedback","owner"]},"assignment":{"expected":["Connect communication problems to the ongoing project quality gap.","Design an audience-message-channel-timing-owner-feedback plan.","Explain how effectiveness will be monitored."],"model":"Project problem → communication risk → communication plan → quality evidence → review.","keywords":["communication","quality","plan","indicator","owner","feedback"]}};
  const lecture=[["Communication and Quality Performance","How clear communication helps people use quality information and improve results."],["Learning Outcomes","Explain communication's quality role; select channels; design plans; interpret indicators; apply findings to quality cases."],["Session Roadmap","00–20 opening; 20–50 communication; 50–80 channels; 80–90 break; 90–120 measures; 120–150 review; 150–180 apply and assess."],["What Is Communication?","The exchange of information that builds shared understanding and helps people coordinate action. Sender and purpose; message and channel; receiver and feedback."],["Functions of Communication","Coordinate behavior; motivate; express concerns; support decisions."],["Concept Check: Which Function?","QUICK VOTE — A supervisor explains a weekly defect-reduction target and gives feedback on progress. Which communication function is most directly involved?\nA. Coordinate behavior   B. Motivate   C. Express concerns   D. Support decisions\nDiscuss the evidence for your vote."],["The Communication Process","Define purpose → prepare message → select channel/timing → confirm understanding and follow up."],["Communication Process Model","Sender → encoding → channel → receiver/decoding → feedback. Noise can affect each stage."],["Concept Check: Find the Missing Link","PROCESS DIAGNOSIS — Sender → Encode → Channel → Decode → ?\nThe receiver read an inspection notice but still follows the old checklist. Identify the missing link that verifies understanding.\nThink → Pair → Share (45 seconds)."],["Communication Flow, Channels, and Feedback","Downward, upward and horizontal flows; written information; direct conversations; listening; speaking up and responding."],["Channel Richness","Compare reports, emails/dashboards, live calls and face-to-face conversations. Richer channels offer more cues and faster feedback."],["Concept Check: Match the Channel","MATCHING CHALLENGE — Match situations A–C to channels 1–3.\nA. Urgent safety defect needs rapid clarification across locations.\nB. Revised inspection method must remain a reliable shift reference.\nC. Sensitive disagreement about a new process requires dialogue.\n1. Controlled written SOP   2. Live call / briefing   3. Face-to-face meeting."],["Communication Channels and Speaking Up","Choose usable procedures and dashboards or responsive briefings; invite concerns and show follow-up."],["Plan Communication Around the Work","Specify audience, message, channel, timing, responsible owner and how understanding is confirmed."],["Quality Performance Information","Objective → measure and denominator → baseline and target → owner and audience → response."],["Choosing Quality Indicators","Outcome, process and balancing measures. Make definitions, denominators and comparison periods explicit."],["Concept Check: Data Detective","READ THE DENOMINATOR — Period A: 20 complaints / 500 orders. Period B: 24 complaints / 800 orders.\nComplaint rate = Complaints ÷ Orders × 1,000.\nDespite the higher count, did the complaint rate increase, decrease or stay unchanged? Explain why."],["Reading Performance Trends","Compare periods; check target; segment; verify data; decide and record; review the impact."],["Dashboards and Performance Conversations","Show focused measures with units and targets; discuss exceptions; assign owners and follow-up dates."],["Case: Rising Customer Complaints","Share the trend, investigate workload/handoffs and response times, agree on one change, and verify its impact."],["Applied Challenge: Communicate a Quality Gap","Prepare a two-minute briefing: define audience; show indicator, target and period; request one action, owner and follow-up."],["Key Takeaways","Make communication usable and two-way; define measures and trends; connect performance evidence to action."]];
  
const links={
  ppt:"https://docs.google.com/presentation/d/1xYRPi2NcT1T8G_Lqo-nsPScgbcIrzdLD/edit",
  pdf:"https://drive.google.com/file/d/1z5BB3hZwv9W5XkrVPgKmC1XP7zJJhUri/view",
  pack:"week11-student-pack.html"
};
const esc=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const resources=()=>'<div class="file-actions" style="margin:14px 0">'+
'<a class="btn good" target="_blank" rel="noopener" href="'+links.pack+'">Student Pack • No Drive Login</a>'+
'<a class="btn alt" target="_blank" rel="noopener" href="'+links.pdf+'">Original 18-slide PDF</a>'+
'<a class="btn alt" target="_blank" rel="noopener" href="'+links.ppt+'">Original PowerPoint</a>'+
'</div><p class="muted" style="font-size:12px">Original PDF and PowerPoint are stored in Google Drive; the file owner must allow Viewer access for students. The interactive lecture and student pack open directly on this site.</p>';

  const oldTabs=renderWeekTabs;
  renderWeekTabs=function(){
    oldTabs();
    if(Number(currentWeek)===week){
      const b=document.createElement("button");
      b.className="tab"+(currentTab==="practice"?" active":"");
      b.textContent="Practice Quiz • Ungraded";
      b.onclick=()=>{currentTab="practice";renderWeekTabs();renderWeekBody();sendHeartbeat();};
      weekTabs.appendChild(b);
    }
  };
  const oldRender=renderWeekBody;
  renderWeekBody=function(){
    if(Number(currentWeek)!==week){return oldRender();}
    if(currentTab==="slides"){
      const a=activityAvailability(week,"slides");
      if(!adminUnlocked&&!a.open){lockedCard("slides",a);return;}
      let index=0;
      weekBody.innerHTML='<div class="card"><h3>Week 11 Lecture • 22 sections (including 4 Concept Checks)</h3>'+
       '<p class="muted">Communication and Quality Performance • based on the approved instructor lecture. The expanded 22-section browser lecture includes four Concept Checks and does not require Google Drive access.</p>'+
       resources()+
       '<div style="border:1px solid #d7e3e9;border-top:8px solid #142640;border-radius:12px;padding:23px;min-height:290px;background:#f6f9fb">'+
       '<div id="wk11Index" style="font-size:13px;font-weight:bold;color:#21878e"></div>'+
       '<h2 id="wk11Title" style="font-size:27px;color:#142640;margin:14px 0"></h2>'+
       '<div style="height:5px;width:95px;background:#e4b647;margin:15px 0"></div>'+
       '<p id="wk11Text" style="font-size:18px;line-height:1.9;white-space:pre-line"></p></div>'+
       '<div class="file-actions"><button class="btn alt" id="wk11Previous">← Previous</button>'+
       '<button class="btn" id="wk11Next">Next →</button></div>'+
       '<p class="muted">For diagrams from the original deck, use the PowerPoint or PDF links (file sharing by the owner may be required).</p></div>';
      const paint=()=>{
        document.getElementById("wk11Index").textContent="G TQM 511  |  WEEK 11  |  SLIDE "+String(index+1).padStart(2,"0")+" / "+lecture.length;
        document.getElementById("wk11Title").textContent=lecture[index][0];
        document.getElementById("wk11Text").textContent=lecture[index][1];
        document.getElementById("wk11Previous").disabled=index===0;
        document.getElementById("wk11Next").disabled=index===lecture.length-1;
      };
      document.getElementById("wk11Previous").onclick=()=>{index=Math.max(0,index-1);paint()};
      document.getElementById("wk11Next").onclick=()=>{index=Math.min(lecture.length-1,index+1);paint()};
      paint();if(!adminUnlocked&&student())markLectureViewed();return;
    }
    if(currentTab==="practice"){
      const qs=packs[week].quiz;
      const quiz=qs.map((q,i)=>'<div class="topic"><h4>'+String(i+1)+'. '+esc(q[0])+'</h4>'+
        q[1].map((opt,j)=>'<label style="display:block;padding:9px;border:1px solid #e5e7eb;border-radius:8px;margin:6px 0"><input type="radio" style="width:auto" name="w11pr'+i+'" value="'+j+'"> '+String.fromCharCode(65+j)+'. '+esc(opt)+'</label>').join('')+
        '<p id="w11fb'+i+'" class="muted"></p></div>').join('');
      weekBody.innerHTML='<div class="card"><h3>Week 11 • Formative Knowledge Check</h3>'+
      '<div class="success"><b>Practice only</b> • 10 questions, not graded and not submitted to student records.</div>'+
      quiz+'<div class="file-actions"><button id="w11Check" class="btn">Check My Answers</button>'+
      '<button id="w11Again" class="btn alt">Try Again</button></div>'+
      '<p class="muted" id="w11Overall">Please choose one answer for each question.</p></div>';
      document.getElementById("w11Check").onclick=()=>{
        let points=0,answered=0;
        qs.forEach((q,i)=>{
          const selected=document.querySelector('input[name="w11pr'+i+'"]:checked');
          const correct=selected && Number(selected.value)===q[2];
          if(selected)answered++;
          if(correct)points++;
          const element=document.getElementById("w11fb"+i);
          element.textContent=(correct?"Correct. ":"Correct answer: "+String.fromCharCode(65+q[2])+". ")+q[1][q[2]];
          element.className=correct?"success":"notice";
        });
        document.getElementById("w11Overall").textContent="Practice: "+points+" / "+qs.length+" correct; "+answered+" answered. Not graded or saved.";
      };
      document.getElementById("w11Again").onclick=()=>renderWeekBody();
      return;
    }
    oldRender();
    if(!adminUnlocked&&!activityAvailability(week,currentTab).open)return;
    if(currentTab==="overview"){
      const d=document.createElement("div");d.className="card";d.style.marginTop="14px";
      d.innerHTML='<h3>Week 11 Student Learning Pack</h3>'+
       '<p>Original 18-slide lecture, enhanced 22-section browser lecture, printable study guide and communication plan worksheet, case application and ungraded 10-question quiz.</p>'+
       resources()+'<p><b>Independent study:</b> '+esc(packs[week].assignment)+'</p>'+
       '<div class="success">The course assessment scheme is unchanged. No additional graded weekly assignment has been introduced.</div>';
      weekBody.appendChild(d);
    }
    if(currentTab==="content"){
      const d=document.createElement("div");d.className="card";d.style.marginTop="14px";
      d.innerHTML='<h3>Week 11 • Additional Learning Resources</h3>'+resources()+
      '<h4>In-class communication activity</h4><p>'+esc(packs[week].activity)+'</p>'+
      '<h4>Applied case: '+esc(packs[week].caseTitle)+'</h4><p>'+esc(packs[week].caseText)+'</p><ol>'+
      packs[week].caseQuestions.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ol>';
      weekBody.appendChild(d);
    }
    if(currentTab==="preclass"){
      const h=weekBody.querySelector("h3");if(h)h.textContent="Pre-Class Reflection • Week 11";
      const p=weekBody.querySelector("p");if(p)p.textContent="Describe one case where an unclear message, inappropriate channel or missing feedback affected quality. Who needed information and what should have been clarified?";
    }
    if(currentTab==="reflection"){
      const h=weekBody.querySelector("h3");if(h)h.textContent="Post-Class Reflection • Week 11";
      const p=weekBody.querySelector("p");if(p)p.textContent="Choose one workplace quality indicator. Explain how you would communicate its definition, baseline, target and trend to the relevant audience, obtain feedback and agree a follow-up action.";
    }
  };
  try{renderWeeks()}catch(e){console.warn("Could not refresh Week 11 card",e)}
})();