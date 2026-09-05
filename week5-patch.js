// Week 5 expansion: Personality and Values
// Primary source: Robbins & Judge, Organizational Behavior, Updated 18th ed., Global Edition, Chapter 4.

packs[5]={
  objectives:[
    "Describe the differences between person-job fit and person-organization fit.",
    "Define personality, describe its determinants, and explain how it is measured.",
    "Describe the strengths and weaknesses of the Myers-Briggs Type Indicator (MBTI) and the Big Five Personality Model.",
    "Explain how personality and situations interact through Situation Strength Theory and Trait Activation Theory.",
    "Contrast terminal and instrumental values and explain how values influence attitudes and behavior at work.",
    "Compare Hofstede’s cultural value dimensions and connect personality, values and fit to quality-oriented organizational behavior."
  ],
  topics:[
    ["Linking Personality and Values to the Workplace","Organizations increasingly consider whether an individual’s personality and values match both the job and the organization. Person-job fit focuses on matching job requirements with personality characteristics; person-organization fit focuses on compatibility between people and organizations."],
    ["Holland’s Personality-Job Fit Theory","Holland’s theory identifies six personality types and proposes that satisfaction and the propensity to leave depend on how well individuals match their personalities to a job: Realistic, Investigative, Social, Conventional, Enterprising and Artistic."],
    ["What Is Personality?","Personality is the sum of ways in which an individual reacts to and interacts with others. Personality is commonly described through measurable traits, and both heredity and environment contribute to its development."],
    ["The Myers-Briggs Type Indicator (MBTI)","The MBTI classifies people using four pairs: Extraverted-Introverted, Sensing-Intuitive, Thinking-Feeling and Judging-Perceiving. The text notes that MBTI can support self-awareness and career guidance, but evidence is mixed and results tend to be unrelated to job performance."],
    ["The Big Five Personality Model","The Big Five Model proposes five basic dimensions that encompass most significant variation in human personality: conscientiousness, emotional stability, extraversion, openness to experience and agreeableness."],
    ["How Big Five Traits Influence OB Criteria","Conscientiousness is a strong predictor of job performance and relates to job knowledge, OCB, lower CWB and safer behavior. Other Big Five traits matter for outcomes such as leadership, teamwork, adaptation, innovation, service and stress depending on the job and context."],
    ["Trait Activation Theory (TAT)","Trait Activation Theory predicts that some situations, events or interventions activate a trait more than others. It helps explain why certain personality traits are more relevant in particular jobs or situations."],
    ["Values and Value Systems","Values are basic convictions that a specific mode of conduct or end-state of existence is personally or socially preferable to its opposite. A value system is a hierarchy based on the ranking of an individual’s values by intensity."],
    ["Terminal and Instrumental Values","Terminal values are desirable end-states of existence - goals a person would like to achieve during a lifetime. Instrumental values are preferable modes of behavior or means of achieving terminal values."],
    ["Hofstede’s Framework","Hofstede’s framework examines cultural values through power distance, individualism versus collectivism, masculinity versus femininity, uncertainty avoidance, and long-term versus short-term orientation. The text also notes the later addition of indulgence versus restraint."],
    ["OB and Quality Connection","Personality and values influence how employees respond to work, teams, change, ethical choices, service demands and improvement opportunities. Quality management benefits when roles, situations and organizational values are aligned with the behaviors the process requires."]
  ],
  activity:"Person-Job-Values Fit Analysis: select a quality-sensitive role. Identify the job demands, the Big Five traits likely to be activated, the values needed for reliable performance, and one risk of poor fit. Present the logic as Role Demand → Relevant Trait/Value → Expected Behavior → Quality Outcome.",
  caseTitle:"Mini Case: Strong Technical Skills, Poor Quality Fit",
  caseText:"A technically strong employee consistently meets individual output targets but resists teamwork, dismisses corrective-action discussions, and treats customer complaints as interruptions. Management tolerates the behavior because the employee is highly productive. Over time, junior staff stop sharing improvement ideas and recurring errors remain unresolved.",
  caseQuestions:[
    "Which personality traits or values may be relevant to the behavior in this case?",
    "What person-job or person-organization fit issues may be present?",
    "Which quality outcomes are being affected?",
    "What should management change in the role, feedback, team process or organizational expectations?"
  ],
  quiz:[
    ["According to the text, personality is:",["A temporary mood","The sum of ways in which an individual reacts to and interacts with others","A set of job skills","A cultural rule"],1],
    ["Which framework has stronger research support for predicting workplace behavior?",["MBTI","Big Five Personality Model","Holland only","No personality framework"],1],
    ["Which Big Five trait describes someone who is responsible, dependable, persistent and organized?",["Agreeableness","Conscientiousness","Extraversion","Openness"],1],
    ["Trait Activation Theory predicts that:",["Traits never change in relevance","Some situations activate a trait more than others","Only values affect behavior","Jobs should ignore personality"],1],
    ["Terminal values are:",["Preferred daily routines","Desirable end-states a person would like to achieve during a lifetime","Job descriptions","Cultural stereotypes"],1]
  ],
  assignment:"For your continuing course project, identify one important personality, values or fit issue that may help explain the selected workplace quality problem. Explain the expected behavior and quality consequence, using Chapter 4 terminology."
};

reviewGuides[5]={
  preclass:{
    expected:["Identify a personality, values or fit issue in a workplace role.","Use a specific Chapter 4 concept.","Explain a possible effect on behavior or quality performance."],
    model:"A strong response identifies a clear workplace example, applies an appropriate concept such as person-job fit, person-organization fit, a Big Five trait or values, and explains how it may influence quality-related behavior.",
    keywords:["personality","values","fit","behavior","quality","trait","job","organization"]
  },
  activity:{
    expected:["Define the role demand.","Identify the relevant trait or value.","Explain why the situation activates or requires it.","Connect the expected behavior to a quality outcome."],
    model:"Model structure: role demand → relevant personality trait/value → situational cue or job requirement → expected employee behavior → quality consequence → one managerial action to strengthen fit.",
    keywords:["role","trait","value","fit","behavior","quality","job","situation"]
  },
  case:{
    expected:["Identify relevant personality or values concepts without stereotyping.","Explain fit issues.","Connect behavior to quality culture and improvement outcomes.","Recommend management action."],
    model:"The case should be analyzed through fit and behavior rather than labels. Management should clarify behavioral expectations, align role and organizational values, use evidence-based feedback, and protect employee voice and continuous improvement.",
    keywords:["fit","personality","values","quality","team","feedback","behavior","improvement"]
  },
  assignment:{
    expected:["Identify one personality, values or fit issue relevant to the selected quality problem.","Use Chapter 4 terminology accurately.","Explain the behavior-quality mechanism.","Suggest a practical managerial implication."],
    model:"Model structure: quality problem → relevant personality/value/fit concept → expected behavior → quality impact → practical management response.",
    keywords:["personality","values","fit","quality","behavior","management","job","organization"]
  },
  reflection:{
    expected:["Name one Chapter 4 concept learned.","Explain how it changes your understanding of workplace behavior.","State one quality-management application."],
    model:"Example: I will consider person-job fit and trait activation when assigning quality roles rather than assuming one personality profile is best for every job. This can improve reliability while reducing stereotyping.",
    keywords:["personality","values","fit","trait","quality","apply","job","behavior"]
  }
};

// Make Week 5 visibly part of the expanded learning path.
try{
  const expanded=[...document.querySelectorAll('.section-head .muted')].find(x=>x.textContent.includes('Weeks 1–4 expanded'));
  if(expanded)expanded.textContent='Weeks 1–5 expanded';
}catch(e){}

// Use the reviewed PDF and PowerPoint files for Week 5.
const __renderWeekBodyBase=renderWeekBody;
renderWeekBody=function(){
  if(currentWeek===5 && currentTab==='slides'){
    const av=activityAvailability(currentWeek,currentTab);
    if(!adminUnlocked && !av.open){lockedCard(currentTab,av);return;}
    weekBody.innerHTML=`<div class="card"><h3>Week 5 Lecture • Personality and Values</h3>
      <div class="file-actions">
        <a class="btn" href="Week5_Lecture.pdf" target="_blank" onclick="markLectureViewed()">Open PDF</a>
        <a class="btn alt" href="Week5_Lecture.pptx" target="_blank" onclick="markLectureViewed()">Open PowerPoint</a>
      </div>
      <iframe class="slide-frame" src="Week5_Lecture.pdf#view=FitH" onload="markLectureViewed()"></iframe>
      <p class="muted">Reviewed lecture files: PDF and editable PowerPoint.</p></div>`;
    return;
  }
  return __renderWeekBodyBase();
};

// Re-render the home path after the Week 5 pack is injected.
try{renderWeeks();}catch(e){}
