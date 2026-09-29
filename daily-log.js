/* Julie masterclass · daily results log.
   One object per campaign day. Append a new object each day; never rewrite past days
   except to replace a partial read with the final full-day numbers (keep "asOf" honest).
   Source: Meta Ads API, campaign LGV_EN_PPC_ecomm-02 #118149 (52668266203628).
   Test ad sets (TEST2_controlled-purchase…) are excluded from every number. */
window.DAILY_PLAN = {label:'Plan, days 1–3 (per day)', spend:571.4, cpm:20, clicks:264.6, lp:238.1, cart:9.5, checkout:4.8, purchases:3.6, cpa:160, cpl:2.40};

window.DAILY_LOG = [
{
  id:'day-1', day:1, date:'Mon 28 Sep 2026', asOf:'Full day (final)', status:'amber',
  headline:'First full delivery day: $591 spend, 1 purchase ($79 VIP), CPM $298.',
  adsets:[
    {name:'#108813 Set 01 · prospecting', budget:350, spend:461.33, imp:1446, cpm:319.04, clicks:38, lp:34, cart:1, checkout:1, purchases:1, revenue:79},
    {name:'#108814 Set 02 · retargeting', budget:75, spend:129.72, imp:536, cpm:242.01, clicks:14, lp:12, cart:0, checkout:0, purchases:0, revenue:0}
  ],
  verified:[
    'The $79 VIP purchase (11:05 Israel time) is matched to a real order and to ad set #108813, deduplicated to 1 in Meta. This is the GOLDEN CAPI baseline.',
    'Test ad set TEST2 ($0.01, 40 impressions) is excluded.'
  ],
  readout:[
    'CPM $298 on day 1 is in line with the Blueprint launch day 1 ($285).',
    'Cost per LP visit $12.85 vs plan $2.40 (5.4x over). Blueprint launch day 1 was $6.10.',
    '#108813 converts: 34 LP visits, 1 cart, 1 checkout, 1 purchase.'
  ]
},
{
  id:'day-2', day:2, date:'Tue 29 Sep 2026', asOf:'Partial, read at 19:23 Israel time', status:'red',
  headline:'Day 2 so far: $411 spend, 1 purchase ($49), CPM $446. It went up, where the Blueprint launch had dropped 15x by day 2.',
  adsets:[
    {name:'#108813 Set 01 · prospecting', budget:350, spend:214.79, imp:419, cpm:512.63, clicks:12, lp:12, cart:2, checkout:2, purchases:1, revenue:49},
    {name:'#108814 Set 02 · retargeting', budget:75, spend:109.23, imp:288, cpm:379.27, clicks:5, lp:4, cart:0, checkout:0, purchases:0, revenue:0},
    {name:'#108815 Set 03 · Julie 65s (team, new today)', budget:140, spend:86.67, imp:213, cpm:406.90, clicks:3, lp:2, cart:0, checkout:0, purchases:0, revenue:0}
  ],
  verified:[
    'All numbers pulled from the Meta Ads API at 19:23 Israel time. The day is still running in the US.',
    'The $49 purchase (09:00–10:00 Israel time) is counted by Meta (1 browser + 2 server hits, deduplicated to 1). NOT yet matched to a real CRM order.'
  ],
  readout:[
    'CPM rose from $298 to $446 across the campaign; #108813 from $319 to $513. The Blueprint launch went from $285 to $19 on day 2.',
    'Cost per LP visit today $22.82 vs plan $2.40 (9.5x over). Two-day total $15.65.',
    'Conversion is the one thing working: #108813 has 46 LP visits → 3 carts → 3 checkouts → 2 purchases over two days (4.3% vs the plan’s 1.5%). Only 2 purchases, so this is a signal, not proof.',
    'At 4.3% conversion, the plan’s $160 cost per purchase needs a CPM near $170 in #108813 (2x cut), not $20. Days 4–7 ($70) need about $75 (5x). Week 2 ($55) needs about $60 (6x).',
    'Set 03 (#108815) confirms the problem is not only in #108813: the same Julie 65s video at $407 CPM, 2 LP visits.'
  ],
  benchmark:{
    note:'Blueprint launch (ad sets #108807 + #108808 from 3 Sep) vs masterclass (#118149 from 28 Sep), same audience, pixel and purchase optimization.',
    rows:[
      {day:1, bpCpm:285, bpCpl:6.10, mcCpm:298, mcCpl:12.85},
      {day:2, bpCpm:19,  bpCpl:6.80, mcCpm:446, mcCpl:22.82, partial:true},
      {day:3, bpCpm:46,  bpCpl:5.60},
      {day:4, bpCpm:37,  bpCpl:5.00},
      {day:5, bpCpm:38,  bpCpl:4.90},
      {day:8, bpCpm:18,  bpCpl:2.35},
      {day:10,bpCpm:17,  bpCpl:0.89}
    ],
    lesson:'In the Blueprint launch, CPM fell 6x by day 3, but cost per LP visit barely moved ($6.10 → $5.60) until days 8–10. Judge tomorrow on cost per LP visit, not CPM alone.'
  },
  tonight:[
    {what:'#108813 and #108814: no changes.', why:'Under the GOLDEN CAPI tracking freeze until 26 Oct; #108813 is the only ad set with purchases, so it should not be pushed back into learning.'},
    {what:'Budgets unchanged ($565/day across 3 sets; plan $571).', why:'Stays on plan; a budget move now would reset learning without new evidence.'},
    {what:'Pending your approval: 1 test ad in Set 03 (#108815).', why:'Copy of its current ad (masterclass link + tracking parameters inherited, allowed under the freeze), switched to the Blueprint format: single video, 5 primary texts, Apply Now. Only Set 03 re-enters learning. Say “approve set 03 ad”.'}
  ],
  morning:{
    title:'Wednesday 30 Sep, morning checklist (Israel time)',
    items:[
      'Day 2 final numbers per ad set: spend, CPM, cost per LP visit, carts, checkouts, purchases. Replace the partial numbers in this tab.',
      'Match the 29 Sep $49 purchase to a real CRM order (not a test, not internal). Until matched, cost per purchase stays “unverified”.',
      'GOLDEN CAPI guard: run the tracking check; any FAIL is reported first, before any ad discussion.',
      'Ad-level split in #108813: is spend going to the two ads that purchased (Ad#12 video, zoom-gold) or to card-gold ($246, no purchase)?',
      'Early day-3 delivery: note CPM, but do not decide on it. Before about 20:00 Israel time the US day has only a few hundred impressions.',
      'If the Set 03 test ad was approved: confirm it is live, approved by Meta, and has the inherited masterclass link.'
    ]
  },
  scenarios:{
    title:'Day 3 (Wed 30 Sep) end-of-day read → day 4 decision',
    rows:[
      {tone:'green', name:'On the Blueprint curve', test:'Campaign CPM $46–75 and cost per LP visit about $5–6', action:'Hold, touch nothing. Day 4 goes to the plan’s $1,143/day as scheduled, put into what is converting.'},
      {tone:'amber', name:'Cheap impressions, same visits', test:'CPM falls but cost per LP visit stays above $10', action:'Meta is buying cheaper, lower-click impressions (the Blueprint day-2 pattern). Go to day 4’s budget only if purchases hold at or under $160; otherwise hold $571.'},
      {tone:'red', name:'Off the curve', test:'CPM still $300+', action:'Hold $571 on day 4. Doubling spend at $15+ per LP visit burns the week-2 budget. The Set 03 test ad result becomes the deciding lever; if it is also $300+, the cause is the destination, which is frozen and needs your freeze-lift sentence.'},
      {tone:'green', name:'Test ad wins (if approved)', test:'Set 03 test ad CPM ≤ $75 and cost per LP visit ≤ $3 while the original ad stays at $400', action:'The format is the cause. Add the same-format ad to #108813 on day 4 (link inherited) and move day-4 budget behind it.'}
    ]
  },
  risk:'Even a perfect repeat of the Blueprint curve reaches about $1 per LP visit around day 10. The plan needs that on days 4–7, so the real risk is to week 2 (500 sign-ups), not just tomorrow’s CPM.',
  open:[
    'Approve or reject the Set 03 test ad.',
    'Confirm whether the 29 Sep $49 order is a real customer.'
  ]
}
];
