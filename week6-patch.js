// Week 6 expansion: Perception and Individual Decision Making
// Primary source: Robbins & Judge, Organizational Behavior, 18th ed., Chapter 6.
// Teaching applications are adapted to quality-management contexts.

packs[6]={
  objectives:[
    "Explain the factors that influence perception.",
    "Describe attribution theory and distinguish internal from external attributions.",
    "Explain common shortcuts and errors in judging others.",
    "Explain the link between perception and individual decision making.",
    "Contrast the rational decision-making model with bounded rationality and intuition.",
    "Explain how decision biases, individual differences and organizational constraints affect decisions.",
    "Contrast ethical decision criteria and describe the three-stage model of creativity."
  ],
  topics:[
    ["What Is Perception?","Perception is the process by which individuals organize and interpret sensory impressions in order to give meaning to their environment. Behavior is influenced by perceived reality, which may differ from objective reality."],
    ["Factors That Influence Perception","Perception is shaped by factors in the perceiver, the target and the situation. Perceiver factors include attitudes, motives, interests, experience and expectations; target and situational features also shape what is noticed and how it is interpreted."],
    ["Person Perception and Attribution Theory","When observing behavior, people try to determine whether it is internally or externally caused. Attribution judgments depend on distinctiveness, consensus and consistency."],
    ["Fundamental Attribution Error and Self-Serving Bias","The fundamental attribution error is the tendency to underestimate external influences and overestimate internal causes when judging others. Self-serving bias is the tendency to attribute success to internal factors and failure to external factors."],
    ["Common Shortcuts in Judging Others","Selective perception, halo effect, contrast effects and stereotyping help people process information quickly, but they can also distort workplace judgments."],
    ["Perception and Decision Making","Decision making occurs in reaction to a perceived problem. How a person recognizes and frames a problem therefore influences the alternatives considered and the decision reached."],
    ["The Rational Decision-Making Model","The rational model proceeds through defining the problem, identifying decision criteria, allocating weights, developing alternatives, evaluating alternatives and selecting the best alternative."],
    ["Bounded Rationality and Intuition","Managers often work with incomplete information, limited time and cognitive constraints. Bounded rationality leads to satisfactory rather than perfectly optimal choices, while intuition draws on accumulated experience through a largely nonconscious process."],
    ["Common Decision Biases and Errors","Important biases include overconfidence, anchoring, confirmation, availability, escalation of commitment, randomness error, risk aversion and hindsight bias."],
    ["Individual Differences and Organizational Constraints","Decision making is affected by individual differences and by organizational constraints such as performance evaluation, reward systems, formal regulations, time pressures and historical precedents."],
    ["Ethics in Decision Making","Ethical choices can be examined through utilitarian criteria, protection of fundamental rights and justice. Each criterion highlights a different basis for evaluating a decision."],
    ["Creativity and Innovation","The three-stage model links causes of creative behavior to creative behavior and then to creative outcomes or innovation. Creativity supports better alternatives when routine responses are insufficient."],
    ["OB–Quality Connection","Quality decisions improve when managers separate observation from interpretation, test attributions with evidence, recognize biases, use structured decision processes and protect ethical standards before acting."]
  ],
  activity:"Activity 1 — Internal or External? An employee submits the monthly quality report three days late. Use distinctiveness, consensus and consistency before deciding whether the cause is internal or external. Activity 2 — Perception Trap: classify four judgments as attribution error, halo effect, contrast effect or stereotyping, then state what evidence should be checked before acting.",
  caseTitle:"Mini Case: The Quality Complaint That Was Misjudged",
  caseText:"A hospital receives a customer complaint about a long waiting time. The supervisor immediately blames the receptionist for being slow and careless. A later quality review finds system downtime, staff shortage and unclear appointment procedures. The initial judgment led to an unfair response and delayed corrective action.",
  caseQuestions:[
    "What perceptual or attribution error is visible in the supervisor's first judgment?",
    "Which external factors should have been examined before attributing the problem to the receptionist?",
    "Which decision bias could reinforce the supervisor's initial belief?",
    "How would a rational decision-making approach change the response?",
    "What evidence and quality tools would you use before deciding on corrective action?"
  ],
  quiz:[
    ["Which three factors are used in attribution theory to judge whether behavior is internally or externally caused?",["Ability, motivation and opportunity","Distinctiveness, consensus and consistency","Attitudes, values and moods","Cost, time and quality"],1],
    ["The halo effect occurs when:",["One characteristic influences an overall judgment","People attribute success externally","Managers search for all alternatives","A decision is made by a group"],0],
    ["Bounded rationality means that decision makers:",["Always optimize","Operate within limits of information, time and cognitive capacity","Avoid all intuition","Use only quantitative data"],1],
    ["Confirmation bias is the tendency to:",["Seek information that supports an existing belief","Ignore previous decisions","Prefer risky choices","Attribute failure internally"],0],
    ["Which ethical criterion emphasizes fair and impartial application of rules?",["Utilitarianism","Justice","Anchoring","Availability"],1]
  ],
  assignment:"Project milestone: identify the most relevant perception, attribution or decision-making concept that may help explain your selected workplace quality problem. State what evidence would reduce bias before recommending an improvement action."
};

reviewGuides[6]={
  preclass:{
    expected:["Describe one situation interpreted differently by two people.","Identify a plausible factor affecting perception.","Connect the interpretation difference to a workplace or quality consequence."],
    model:"A strong response gives one concrete situation, explains why the people may have perceived it differently, and identifies what evidence would help distinguish interpretation from fact.",
    keywords:["perception","interpretation","evidence","bias","situation","quality"]
  },
  activity:{
    expected:["Use distinctiveness, consensus and consistency.","Distinguish internal from external attribution.","Identify the perceptual shortcut or bias.","State evidence that should be checked before deciding."],
    model:"Model structure: observed behavior → attribution evidence (distinctiveness, consensus, consistency) → likely internal/external explanation → possible perceptual bias → evidence-based quality response.",
    keywords:["distinctiveness","consensus","consistency","attribution","bias","evidence","quality"]
  },
  case:{
    expected:["Identify the attribution or perceptual error.","Identify missing situational evidence.","Explain one decision bias.","Recommend an evidence-based decision process."],
    model:"The supervisor moved too quickly from observation to an internal attribution. A stronger response tests situational causes, gathers process evidence, checks for confirmation or anchoring bias, and then selects corrective action using a structured decision process.",
    keywords:["attribution","fundamental attribution error","confirmation","anchoring","evidence","decision","quality"]
  },
  assignment:{
    expected:["Select one perception or decision concept relevant to the project problem.","Explain how it affects diagnosis or action.","Identify evidence needed to reduce bias.","Connect the concept to an improvement decision."],
    model:"Model structure: quality problem → perception/decision concept → risk of biased diagnosis → evidence needed → improved decision or action.",
    keywords:["perception","decision","bias","quality","evidence","improvement"]
  },
  reflection:{
    expected:["Name one Chapter 6 concept.","Explain how it changes the way you would make a quality-related judgment.","State one practical action you will apply."],
    model:"Example: Before blaming an employee for a defect, I will test internal and external causes using evidence, because fundamental attribution error can lead to incorrect corrective action.",
    keywords:["perception","attribution","bias","decision","evidence","quality","apply"]
  }
};

// Week 6 is delivered on Saturday, 19 September 2026, 3:30–6:30 PM Makkah time.
// From Week 6 onward, the live teaching slot is 3 hours. Weeks 4–5 retain their historical schedule.
const _week6OriginalWeekSchedule=weekSchedule;
weekSchedule=function(w){
  if(w<6) return _week6OriginalWeekSchedule(w);
  const lecture=addDays(new Date("2026-09-19T15:30:00+03:00"),(w-6)*7);

  const guidedOpen=addDays(lecture,-3);
  guidedOpen.setUTCHours(17,0,0,0); // Wednesday 8:00 PM Makkah

  const preclassOpen=addDays(lecture,-1);
  preclassOpen.setUTCHours(17,0,0,0); // Friday 8:00 PM Makkah

  const preclassReminder=addMinutes(lecture,-240); // 11:30 AM on lecture day
  const preclassClose=new Date(lecture.getTime());

  const slidesOpen=new Date(lecture.getTime());
  slidesOpen.setUTCHours(11,0,0,0); // 2:00 PM Makkah

  const lectureOpen=lecture;
  const lectureClose=addMinutes(lecture,180); // 6:30 PM

  const postclassOpen=new Date(lectureClose.getTime());
  const postclassClose=addDays(lecture,3);
  postclassClose.setUTCHours(20,59,59,999); // Tuesday 11:59 PM Makkah

  const quizOpen=addMinutes(lectureClose,5);
  const quizClose=addMinutes(quizOpen,30);
  const assignmentOpen=addMinutes(lectureClose,30);

  const due=addDays(lecture,5);
  due.setUTCHours(9,0,0,0);
  const lateUntil=addDays(lecture,5);
  lateUntil.setUTCHours(15,0,0,0);

  return {lecture,guidedOpen,preclassOpen,preclassReminder,preclassClose,
    slidesOpen,lectureOpen,lectureClose,postclassOpen,postclassClose,
    quizOpen,quizClose,assignmentOpen,due,lateUntil};
};

// Tailor Week 6 learner prompts and in-class notices while keeping the portal's existing save/review logic.
const _week6BaseRenderWeekBody=renderWeekBody;
renderWeekBody=function(){
  _week6BaseRenderWeekBody();
  if(currentWeek!==6) return;
  const s=student(),p=s?getProg(s.id,6):blankProg(),sch=weekSchedule(6);

  if(currentTab==="preclass"){
    weekBody.innerHTML=`<div class="card"><h3>Pre-Class Reflection</h3>
      <p><b>Prompt:</b> Describe one situation where two people interpreted the same workplace event differently. What factor may have caused the difference in perception, and what evidence could clarify the situation?</p>
      <textarea id="preClassText" placeholder="Write a short pre-class reflection...">${p.preClassText||""}</textarea>
      <div class="file-actions"><button class="btn good" onclick="savePreClassReflection()">Save Pre-Class Reflection</button></div>
      <p class="muted">Closes at lecture start: ${fmtRiyadh(sch.preclassClose)} • ${p.preClassReflection?"Completed ✓":"Not yet completed"}</p>
      ${reviewPanelStudent(p.reviews.preclass)}</div>`;
  }

  if(currentTab==="activity"){
    weekBody.innerHTML=`<div class="card"><h3>In-Class Activity — Perception & Attribution</h3>
      <div class="notice"><b>In-class only:</b> ${fmtRiyadh(sch.lectureOpen)} → ${fmtRiyadh(sch.lectureClose)}</div>
      <h4>Activity 1 — Internal or External?</h4>
      <p>An employee submits the monthly quality report three days late. Before judging, analyze <b>distinctiveness, consensus and consistency</b>. Decide whether the evidence supports an internal or external attribution.</p>
      <h4>Activity 2 — Perception Trap</h4>
      <p>Classify each statement using: Fundamental Attribution Error, Halo Effect, Contrast Effect, or Stereotyping. Then state what evidence should be checked before acting.</p>
      <ol>
        <li>“He is always late; therefore, he does not care about quality.”</li>
        <li>“She communicates very well; therefore, she must be an excellent manager.”</li>
        <li>“The previous audit team was excellent, so this team looks weak.”</li>
        <li>“Employees from this department always resist change.”</li>
      </ol>
      <textarea id="activityText" placeholder="Write your group/activity response...">${p.activityText||""}</textarea>
      <div class="file-actions"><button class="btn good" onclick="submitActivity()">Submit Activity</button></div>
      ${reviewPanelStudent(p.reviews.activity)}</div>`;
  }

  if(currentTab==="case"){
    const d=packs[6];
    weekBody.innerHTML=`<div class="card"><h3>Mini Case / Application</h3>
      <div class="notice"><b>In-class only:</b> ${fmtRiyadh(sch.lectureOpen)} → ${fmtRiyadh(sch.lectureClose)}</div>
      <h4>${d.caseTitle}</h4><p>${d.caseText}</p>
      <ol>${d.caseQuestions.map(x=>`<li style="margin:8px 0">${x}</li>`).join("")}</ol>
      <textarea id="caseText" placeholder="Write your case analysis...">${p.caseText||""}</textarea>
      <div class="file-actions"><button class="btn good" onclick="submitCase()">Submit Mini Case</button></div>
      ${reviewPanelStudent(p.reviews.case)}</div>`;
  }

  if(currentTab==="reflection"){
    weekBody.innerHTML=`<div class="card"><h3>Post-Class Reflection</h3>
      <p><b>Prompt:</b> Identify one quality-related decision where perception, attribution or bias could lead to a wrong conclusion. Explain one evidence-based action you will use to improve the decision.</p>
      <textarea id="reflectionText" placeholder="Write your post-class reflection...">${p.reflectionText||""}</textarea>
      <div class="file-actions"><button class="btn good" onclick="saveReflection()">Save Reflection</button></div>
      <p class="muted">Open after class until ${fmtRiyadh(sch.postclassClose)} • ${p.reflection?"Completed ✓":"Not yet completed"}</p>
      ${reviewPanelStudent(p.reviews.reflection)}</div>`;
  }
};
