import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Button from '../Button';
import ListShowcase from '../ListShowcase';
import ListShowcaseItem from '../ListShowcaseItem';

describe('<ListShowcase />', () => {

  const props = {
    lists: [
      {
        id: '#1',
        title: 'List #1',
      },
      {
        id: '#2',
        title: 'List #2',
      },
    ],
  };

  it('renders two <ListShowcaseItem /> components', () => {
    const wrapper = shallow(
      <ListShowcase {...props} />
    );
    expect(wrapper.find(ListShowcaseItem)).to.have.lengthOf(2);
  });

  it('renders "Add new" button', () => {
    const wrapper = mount(
      <ListShowcase {...props} />
    );
    expect(wrapper.find(Button)).to.have.lengthOf(1);
    expect(wrapper.find(Button).text()).to.be.equal('Add new')
  });

});
