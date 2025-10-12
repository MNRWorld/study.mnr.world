// @ts-nocheck
export default function EligibilityPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!doctype html>
<html lang="bn">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>University Eligibility Checker — প্রো স্টাইল</title>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#0f1724; /* dark navy */
      --card:#0b1220;
      --muted:#94a3b8;
      --accent:#7c3aed; /* violet */
      --glass: rgba(255,255,255,0.04);
      font-family: 'Hind Siliguri', system-ui, sans-serif;
    }
    *{box-sizing:border-box}
    body{margin:0;background:linear-gradient(180deg,#071027 0%, var(--bg) 100%);color:#e6eef8;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:28px}
    .wrap{width:100%;max-width:980px}
    header{display:flex;gap:16px;align-items:center;margin-bottom:18px}
    .logo{width:64px;height:64px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#4c1d95);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;box-shadow:0 6px 24px rgba(124,58,237,0.18)}
    h1{font-size:20px;margin:0}
    p.lead{margin:0;color:var(--muted);font-size:13px}.grid{display:grid;grid-template-columns:1fr 400px;gap:16px}
@media(max-width:920px){.grid{grid-template-columns:1fr}}

.card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:14px;padding:18px;box-shadow:0 6px 30px rgba(2,6,23,0.6)}
label{display:block;font-size:13px;color:var(--muted);margin-bottom:6px}
.row{display:flex;gap:12px}
input[type=number],select,input[type=text]{width:100%;padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit;font-size:14px}
.small{font-size:12px;color:var(--muted)}
.hint{font-size:12px;color:var(--muted);margin-top:8px}

.actions{display:flex;gap:12px;margin-top:12px}
.btn{padding:10px 14px;border-radius:10px;border:0;background:var(--accent);color:white;font-weight:600;cursor:pointer}
.btn.edge{background:transparent;border:1px solid rgba(255,255,255,0.06)}

.result{margin-top:14px;padding:12px;border-radius:10px;background:linear-gradient(180deg, rgba(124,58,237,0.06), rgba(255,255,255,0.01));}
.ok{color:#6ee7b7;font-weight:600}
.no{color:#fb7185;font-weight:700}

.circulars{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:12px}
.citem{padding:10px;border-radius:10px;background:var(--glass);border:1px solid rgba(255,255,255,0.025)}
.note{font-size:13px;color:var(--muted);margin-top:10px;background:rgba(255,255,255,0.02);padding:10px;border-radius:8px}

.dlist{margin-top:10px;display:flex;flex-direction:column;gap:6px}
.ditem{display:flex;justify-content:space-between;align-items:center;padding:8px;border-radius:8px;background:rgba(255,255,255,0.01);border:1px solid rgba(255,255,255,0.02)}

footer{margin-top:12px;color:var(--muted);font-size:13px;text-align:center}

  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="logo">UE</div>
      <div>
        <h1>University Eligibility Checker</h1>
        <p class="lead">প্রো লেভেল UI — Hind Siliguri ফন্ট ব্যবহার করা হয়েছে। ইনপুট দিন এবং চেক করুন কে এলিজিবল।</p>
      </div>
    </header><div class="grid">
  <section class="card">
    <h3 style="margin-top:0">শিক্ষার্থী তথ্য</h3>
    <div style="display:grid;gap:10px;margin-top:10px">
      <div>
        <label>Student Name</label>
        <input id="name" type="text" placeholder="নাম লিখুন (ঐচ্ছিক)" />
      </div>

      <div class="row">
        <div style="flex:1">
          <label>SSC Year</label>
          <input id="ssc" type="number" min="1900" max="2100" value="2019" />
        </div>
        <div style="width:140px">
          <label>SSC GPA</label>
          <input id="ssc_gpa" type="number" min="0" max="5" step="0.01" value="5" />
        </div>
      </div>

      <div class="row">
        <div style="flex:1">
          <label>HSC Year</label>
          <input id="hsc" type="number" min="1900" max="2100" value="2021" />
        </div>
        <div style="width:140px">
          <label>HSC GPA</label>
          <input id="hsc_gpa" type="number" min="0" max="5" step="0.01" value="5" />
        </div>
      </div>

      <div>
        <label>Department / Apply for</label>
        <select id="dept">
          <option value="medical">Medical</option>
          <option value="engineering">Engineering</option>
          <option value="university">University (General)</option>
        </select>
      </div>

      <div style="display:flex;gap:12px;align-items:center">
        <input id="second_timer" type="checkbox" />
        <label for="second_timer" style="margin:0">Second-timer / সেকেন্ড টাইম আবেদন করছেন?</label>
      </div>

      <hr style="border:none;border-top:1px solid rgba(255,255,255,0.03);margin:8px 0">

      <h4 style="margin:0">পাঠ্য বিষয়গুলোর মার্ক (প্রতি বিষয় ০–১০০)</h4>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-top:8px">
        <div>
          <label>Physics (ফিজিক্স)</label>
          <input id="marks_physics" type="number" min="0" max="100" value="80" />
        </div>
        <div>
          <label>Chemistry (কেমিস্ট্রি)</label>
          <input id="marks_chemistry" type="number" min="0" max="100" value="80" />
        </div>
        <div>
          <label>Math (ম্যাথ)</label>
          <input id="marks_math" type="number" min="0" max="100" value="80" />
        </div>
        <div>
          <label>Biology (বায়োলজি)</label>
          <input id="marks_bio" type="number" min="0" max="100" value="80" />
        </div>
        <div>
          <label>English (ইংরেজি)</label>
          <input id="marks_eng" type="number" min="0" max="100" value="80" />
        </div>
      </div>

      <div class="actions">
        <button id="checkBtn" class="btn">Check Eligibility</button>
        <button id="resetBtn" class="btn edge">Reset</button>
      </div>

      <div class="note">
        <strong>নোট:</strong> SSC এবং HSC এর মধ্যে gap সর্বোচ্চ ২ বছর হতে হবে (HSC year - SSC year ≤ 2)। মেডিকেল/ইঞ্জিনিয়ারিং/ভার্সিটি - HSC GPA ৫.০০ এর কম হলে <strong>-2 মার্ক</strong> কাটা যাবে। যদি আপনি সেকেন্ড টাইম হন তাহলে <strong>-5 মার্ক</strong> কাটা হবে। (এই ডিডাকশনগুলো মোট ভর্তি পরীক্ষার মার্ক থেকে কাটা হবে।)
      </div>
    </div>
  </section>

  <aside class="card">
    <h3 style="margin-top:0">রেজাল্ট & সার্কুলার</h3>
    <div id="output" class="result">
      ফর্ম পূরণ করে "Check Eligibility" ক্লিক করুন।
    </div>

    <div id="circularsWrap" style="display:none">
      <h4 style="margin:12px 0 6px 0">আপনার বিভাগের সংশ্লিষ্ট সার্কুলার</h4>
      <div id="circulars" class="circulars"></div>
    </div>

    <div class="dlist" id="deductions" style="display:none"></div>

    <footer>
      Developed for you — প্রো স্টাইল UI. Modify circular links as needed.
    </footer>
  </aside>
</div>

  </div>
  <script>
    // Department circular samples (change URLs to real ones if available)
    const CIRCULARS = {
      medical: [
        {title:'Medical Circular 2025 - A',desc:'Admission circular for Medical (sample).'},
        {title:'Medical Notice - Scholarships',desc:'Medical scholarship notice.'}
      ],
      engineering:[
        {title:'Engineering Circular 2025',desc:'Admission circular for Engineering.'},
        {title:'Engineering Eligibility FAQ',desc:'Important FAQ and schedule.'}
      ],
      university:[
        {title:'University General Circular',desc:'General admission circular.'},
        {title:'Merit & Waiting List Info',desc:'Merit list schedule and rules.'}
      ]
    };

    // Configurable thresholds (percentage) per department
    const THRESHOLDS = {
      medical: 85,      // require 85%
      engineering: 80,  // require 80%
      university: 60    // require 60%
    };

    function computeDeductions(dept, hsc_gpa, isSecond){
      const deductions = [];
      if(hsc_gpa < 5){
        deductions.push({label:'HSC GPA < 5.00 → Deduct 2 marks',value:2});
      }
      if(isSecond){
        deductions.push({label:'Second-timer → Deduct 5 marks',value:5});
      }
      return deductions;
    }

    function showCirculars(dept){
      const wrap = document.getElementById('circulars');
      wrap.innerHTML='';
      (CIRCULARS[dept]||[]).forEach(c=>{
        const el = document.createElement('div'); el.className='citem';
        el.innerHTML = \`<h4>\${c.title}</h4><div class="small">\${c.desc}</div><div style="margin-top:8px"><button class="btn edge" onclick="alert('Open circular: \${c.title}')">View</button></div>\`;
        wrap.appendChild(el);
      });
    }

    document.getElementById('checkBtn').addEventListener('click', ()=>{
      const ssc = Number(document.getElementById('ssc').value);
      const hsc = Number(document.getElementById('hsc').value);
      const hsc_gpa = Number(document.getElementById('hsc_gpa').value) || 0;
      const dept = document.getElementById('dept').value;
      const second = document.getElementById('second_timer').checked;
      const name = document.getElementById('name').value || 'আপনি';

      // Subject marks
      const mPhy = Number(document.getElementById('marks_physics').value) || 0;
      const mChem = Number(document.getElementById('marks_chemistry').value) || 0;
      const mMath = Number(document.getElementById('marks_math').value) || 0;
      const mBio = Number(document.getElementById('marks_bio').value) || 0;
      const mEng = Number(document.getElementById('marks_eng').value) || 0;

      const out = document.getElementById('output');
      const gap = hsc - ssc;
      const eligibleByGap = (!isNaN(ssc) && !isNaN(hsc) && gap <= 2 && gap >= 0);

      // Reset circulars area
      document.getElementById('circularsWrap').style.display='none';
      document.getElementById('deductions').style.display='none';

      let html = '';
      if(!Number.isFinite(ssc) || !Number.isFinite(hsc)){
        html = \`<div class='no'>অনুগ্রহ করে সঠিক বছর লিখুন।</div>\`;
        out.innerHTML = html; return;
      }

      if(!eligibleByGap){
        html += \`<div class='no'>দুঃখিত \${name}, আপনি এলিজিবল নন। SSC ও HSC সালের মধ্যে ব্যবধান (gap) দুই বছরের বেশি — SSC: \${ssc}, HSC: \${hsc} (gap = \${gap}).</div>\`;
        html += \`<div class='hint'>শর্ত পূরণ করতে হবে: HSC year - SSC year ≤ 2</div>\`;
        out.innerHTML = html; return;
      }

      // Calculate totals
      const subjectTotal = mPhy + mChem + mMath + mBio + mEng; // out of 500
      const maxTotal = 500;

      // Apply deductions (deductions are in marks, subtracted from subjectTotal)
      const deductions = computeDeductions(dept, hsc_gpa, second);
      const totalDeduct = deductions.reduce((s,d)=>s+d.value,0);
      const adjustedTotal = Math.max(0, subjectTotal - totalDeduct);
      const percentage = (adjustedTotal / maxTotal) * 100;

      // Threshold check
      const required = THRESHOLDS[dept] || 60;
      const eligibleByMarks = percentage >= required;

      // Compose result
      html += \`<div class='ok'>শিক্ষার্থী: <strong>\${name}</strong></div>\`;
      html += \`<div class='small' style='margin-top:8px'>Raw Total: <strong>\${subjectTotal} / \${maxTotal}</strong>. After deductions: <strong>\${adjustedTotal} / \${maxTotal}</strong>. শতাংশ: <strong>\${percentage.toFixed(2)}%</strong>.</div>\`;
      html += \`<div style='margin-top:8px'>Department Required: <strong>\${required}%</strong>.</div>\`;

      if(eligibleByMarks){
        html += \`<div class='ok' style='margin-top:10px'>অভিনন্দন — আপনি আমার সিস্টেম অনুযায়ী এলিজিবল।</div>\`;
        // show circulars
        showCirculars(dept);
        document.getElementById('circularsWrap').style.display='block';
      } else {
        html += \`<div class='no' style='margin-top:10px'>দুঃখিত — আপনার শতাংশ \${percentage.toFixed(02)}%। কর্তিত মান প্রয়োজনীয়তার নিচে: \${required}%।</div>\`;
      }

      out.innerHTML = html;

      // Show deduction breakdown
      const dlist = document.getElementById('deductions');
      dlist.style.display = 'flex';
      dlist.innerHTML = '';
      if(deductions.length === 0){
        const e = document.createElement('div'); e.className='ditem'; e.innerHTML = \`<div>No deductions applied</div><div>0</div>\`; dlist.appendChild(e);
      } else {
        deductions.forEach(d=>{
          const e = document.createElement('div'); e.className='ditem'; e.innerHTML = \`<div>\${d.label}</div><div>-\${d.value}</div>\`; dlist.appendChild(e);
        });
        const tot = document.createElement('div'); tot.className='ditem'; tot.innerHTML = \`<div style='font-weight:700'>Total Deduction</div><div style='font-weight:700'>-\${totalDeduct}</div>\`; dlist.appendChild(tot);
      }

      const noteArea = document.createElement('div'); noteArea.className='note';
      noteArea.innerHTML = \`<strong>Policy note for \${dept.charAt(0).toUpperCase()+dept.slice(1)}:</strong> Percentage thresholds are configurable in the code (THRESHOLDS). HSC GPA & second-timer deductions are applied as marks subtractions before percentage calculation.\`;
      dlist.appendChild(noteArea);

    });

    document.getElementById('resetBtn').addEventListener('click', ()=>{
      document.getElementById('name').value='';
      document.getElementById('ssc').value=2019;
      document.getElementById('ssc_gpa').value=5;
      document.getElementById('hsc').value=2021;
      document.getElementById('hsc_gpa').value=5;
      document.getElementById('dept').value='medical';
      document.getElementById('second_timer').checked=false;
      document.getElementById('marks_physics').value=80;
      document.getElementById('marks_chemistry').value=80;
      document.getElementById('marks_math').value=80;
      document.getElementById('marks_bio').value=80;
      document.getElementById('marks_eng').value=80;
      document.getElementById('output').innerHTML = 'ফর্ম পূরণ করে "Check Eligibility" ক্লিক করুন।';
      document.getElementById('circularsWrap').style.display='none';
      document.getElementById('deductions').style.display='none';
    });
  </script>
</body>
</html>
` }} />
  );
}