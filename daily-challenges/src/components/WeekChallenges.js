// components/WeekChallenges.js
import React from 'react';

const challenges = [
  require('./Week1/Challenges').default,
  require('./Week2/Challenges2').default,
  require('./Week3/Challenges3').default,
  require('./Week4/Challenges4').default,
  require('./Week5/Challenges5').default,
  require('./Week6/Challenges6').default,
  require('./Week7/Challenges7').default,
  require('./Week8/Challenges8').default,
  require('./Week9/Challenges9').default,
  require('./Week10/Challenges10').default,
  require('./Week11/Challenges11').default,
  require('./Week12/Challenges12').default,
  require('./Week13/Challenges13').default,
  require('./Week14/Challenges14').default,
  require('./Week15/Challenges15').default,
];

const WeekChallenges = ({ week }) => {
  const ChallengeComponent = challenges[week - 1] || null;

  return (
    <div>
      {ChallengeComponent ? <ChallengeComponent /> : <p>Challenge not found.</p>}
    </div>
  );
};

export default WeekChallenges;