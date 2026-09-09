/*const makePlaceholderImage = (name) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 820">
      <defs>
        <linearGradient id="background" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#174f7a"/>
          <stop offset="1" stop-color="#082a4b"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="35%" r="58%">
          <stop offset="0" stop-color="#a5f4ff" stop-opacity=".58"/>
          <stop offset=".42" stop-color="#2b9ed7" stop-opacity=".2"/>
          <stop offset="1" stop-color="#082a4b" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="600" height="820" fill="url(#background)"/>
      <rect width="600" height="820" fill="url(#glow)"/>

      <g fill="none" stroke="#91edff" stroke-linecap="round">
        <circle cx="300" cy="210" r="52" stroke-width="15" opacity=".9"/>
        <path d="M294 270c-48 62-80 134-88 227" stroke-width="29" opacity=".9"/>
        <path d="M285 304 155 385" stroke-width="27" opacity=".78"/>
        <path d="M300 312 435 390" stroke-width="27" opacity=".78"/>
        <path d="M236 475 152 642" stroke-width="31" opacity=".82"/>
        <path d="M225 470 394 595" stroke-width="31" opacity=".82"/>
      </g>

      <g fill="none" stroke="#50b6ed" opacity=".55">
        <path d="M96 576c113-34 216-29 355-146" stroke-width="9"/>
        <path d="M128 635c129-7 238-52 329-126" stroke-width="7"/>
        <path d="M76 517c84-58 162-89 253-174" stroke-width="5"/>
      </g>

      <text
        x="300"
        y="737"
        fill="#c8f7ff"
        font-family="Arial, sans-serif"
        font-size="24"
        font-weight="700"
        letter-spacing="5"
        text-anchor="middle"
        opacity=".72"
      >
        SPARDHA
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};
*/

const sportsData = [
  {
    id: 'football',
    name: 'Football',
    image: '/images/icons26/football.svg',
    rulebook: '/rulebooks/Spardha26 Football RuleBook.pdf',
    description: 'Fast-paced team competition for players who thrive under pressure.',
  },
  {
    id: 'cricket',
    name: 'Cricket',
    image: '/images/icons26/cricket.svg',
    rulebook: '/rulebooks/Spardha26 Cricket RuleBook.pdf',
    description: 'Bring your best batting, bowling, and fielding to the pitch.',
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    image: '/images/icons26/volleyball.svg',
    rulebook: '/rulebooks/Spardha26 Volleyball Rulebook.pdf',
    description: 'A high-energy contest of timing, teamwork, and precision.',
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis',
    image: '/images/icons26/table-tennis.svg',
    rulebook: '/rulebooks/spardha26 Table Tennis Rule Book.pdf',
    description: 'Quick reflexes and sharp strategy decide every point.',
  },
  {
    id: 'athletics',
    name: 'Athletics',
    image: '/images/icons26/athletics.svg',
    rulebook: '/rulebooks/Spardha26 Athletics RuleBook.pdf',
    description: 'Run, jump, and compete for excellence on the track.',
  },
  {
    id: 'lawn-tennis',
    name: 'Lawn Tennis',
    image: '/images/icons26/lawn-tennis.svg',
    rulebook: '/rulebooks/Spardha26 Lawn Tennis RuleBook.pdf',
    description: 'A test of endurance, control, and court awareness.',
  },
  {
    id: 'basketball',
    name: 'Basketball',
    image: '/images/icons26/basketball.svg',
    rulebook: '/rulebooks/Spardha26 Basketball RuleBook.pdf',
    description: 'Make every possession count in this full-court battle.',
  },
  {
    id: 'badminton',
    name: 'Badminton',
    image: '/images/icons26/badminton.svg',
    rulebook: '/rulebooks/Spardha26 Badminton RuleBook.pdf',
    description: 'Speed, precision, and movement come together on court.',
  },
  {
    id: 'weight-lifting',
    name: 'Weight Lifting',
    image: '/images/icons26/weight-lifting.svg',
    rulebook: '/rulebooks/Spardha26 Weightlifting RuleBook.pdf',
    description: 'Lift with confidence, technique, and controlled strength.',
  },
  {
    id: 'boxing',
    name: 'Boxing',
    image: '/images/icons26/boxing.svg',
    rulebook: '/rulebooks/Spardha26  Boxing RuleBook.pdf',
    description: 'A disciplined contest of power, timing, and focus.',
  },
  {
    id: 'kabaddi',
    name: 'Kabaddi',
    image: '/images/icons26/kabaddi.svg',
    rulebook: '/rulebooks/Spardha26 Kabbadi RuleBook.pdf',
    description: 'Tactical raids and resilient defending decide the match.',
  },
  {
    id: 'squash',
    name: 'Squash',
    image: '/images/icons26/squash.svg',
    rulebook: '/rulebooks/Spardha26 Squash RuleBook.pdf',
    description: 'Own the court with pace, accuracy, and persistence.',
  },
  {
    id: 'handball',
    name: 'Handball',
    image: '/images/icons26/handball.svg',
    rulebook: '/rulebooks/Spardha26 Handball RuleBook.pdf',
    description: 'A dynamic team event built on speed and coordination.',
  },
  {
    id: 'taekwondo',
    name: 'Taekwondo',
    image: '/images/icons26/taekwondo.svg',
    rulebook: '/rulebooks/Spardha26 Taekwondo RuleBook Revised-1.pdf',
    description: 'Demonstrate disciplined technique, balance, and control.',
  },
  {
    id: 'hockey',
    name: 'Hockey',
    image: '/images/icons26/hockey.svg',
    rulebook: '/rulebooks/Spardha26 Hockey RuleBook.pdf',
    description: 'Play with intensity, tactical movement, and teamwork.',
  },
  {
    id: 'kho-kho',
    name: 'Kho-Kho',
    image: '/images/icons26/kho-kho.svg',
    rulebook: '/rulebooks/Spardha26 Kho Kho RuleBook.pdf',
    description: 'A rapid contest of agility, anticipation, and pursuit.',
  },
  {
    id: 'chess',
    name: 'Chess',
    image: '/images/icons26/chess.svg',
    rulebook: '/rulebooks/Spardha26 Chess RuleBook.pdf',
    description: 'Plan ahead, stay composed, and make every move matter.',
  },
];

export default sportsData;
