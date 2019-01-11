import passepartout from 'passepartout';

import lighthouse from './lighthouse.json';

import model from './model';

import './style.styl';

const view = ({
  model: { lighthouse, watts, seconds, lighthouseUrl, loading }
}) => {
  console.log(lighthouse.audits.interactive);

  return [
    [
      [{ _: 'h1' }, 'mesure.website.energy'],
      [{ _: 'input' }],

      Math.round(lighthouse.audits.interactive.rawValue / 100) / 10,
      [{ _: 'p' }, lighthouse.audits.interactive.displayValue],
      [
        { _: 'p', class: 'result' },
        lighthouse.audits.interactive.rawValue * watts,
        'mWh'
      ],
      [{ _: 'a', href: 'https://website.energy' }, 'link text']
    ]
  ];
};
passepartout({ model, view });
