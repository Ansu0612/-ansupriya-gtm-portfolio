export const troubleshootingScenarios = [
  {
    symptom: 'Lots of leads. No pipeline.',
    investigate: ['ICP', 'Qualification', 'Signal', 'Messaging', 'Sales Handoff'],
    detail: {
      hypothesis: 'Volume is being optimized for instead of fit.',
      evidence: 'Compare lead-to-opportunity conversion by ICP tier, not in aggregate.',
      rootCause: 'Often a qualification or handoff gap, not a lead-generation gap.',
      experiment: 'Tighten ICP filters, re-score the existing lead pool, and re-test conversion on the top tier only.',
    },
  },
  {
    symptom: 'Outbound activity is high. Meetings are low.',
    investigate: ['Targeting', 'Timing', 'Relevance', 'Persona', 'Offer'],
    detail: {
      hypothesis: 'The message is reaching the wrong person, or the right person at the wrong moment.',
      evidence: 'Break down reply and meeting rates by persona and by account signal recency.',
      rootCause: 'Usually a relevance or timing problem rather than a volume problem.',
      experiment: 'Re-sequence outbound around a specific trigger signal instead of a fixed cadence.',
    },
  },
  {
    symptom: 'Meetings happen. Opportunities don\'t.',
    investigate: ['Problem Fit', 'Qualification', 'Discovery', 'Use Case', 'Buying Process'],
    detail: {
      hypothesis: 'The meeting was booked on interest, not on a validated problem.',
      evidence: 'Review discovery call notes for a clearly stated business problem and buying process.',
      rootCause: 'Discovery is confirming interest instead of qualifying problem and process.',
      experiment: 'Add a structured discovery framework before any opportunity is created in the pipeline.',
    },
  },
  {
    symptom: 'Good accounts. Poor response.',
    investigate: ['Signal', 'Context', 'Message', 'Channel', 'Timing'],
    detail: {
      hypothesis: 'The account is a fit, but the outreach isn\'t anchored to why now.',
      evidence: 'Check whether messaging references an account-specific signal or is generic across the list.',
      rootCause: 'Personalization is surface-level (name, company) instead of context-level (why this account, why now).',
      experiment: 'Rebuild the top 10 accounts\' outreach around one specific signal each and compare response rates.',
    },
  },
]
