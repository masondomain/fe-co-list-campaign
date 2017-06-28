import ListCampaign from '../js/list-campaign';

const fixtureGroups = [
  {
    component: ListCampaign,
    fixtures: {
      'One Column': {
        props: {
          type: '1-column',
        },
      },
      'Two Columns': {
        props: {
          type: '2-column',
        },
      },
    },
  },
];

export default fixtureGroups;
