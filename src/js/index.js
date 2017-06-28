import React from 'react';
import { mount } from '@domain-group/fe-helper';
import ListCampaign from './list-campaign';

mount(React.createFactory(ListCampaign), '.fe-co-list-campaign-entry-point');
