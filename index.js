import passepartout from 'passepartout';

import lighthouse from './lighthouse.json';

import model from './model';

import './style.styl';

const view = ({ model: { lighthouse, watts, seconds } }) => {
  console.log(lighthouse.audits.interactive);

  return [
    [
      { _: 'h1', class: 'sec' },
      Math.round(lighthouse.audits.interactive.rawValue / 100) / 10,
      [{ _: 'p' }, lighthouse.audits.interactive.displayValue],
      [{ _: 'p' }, lighthouse.audits.interactive.rawValue * watts, 'mWh']
    ]
  ];
};
passepartout({ model, view });
