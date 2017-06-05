import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Button from '../Button';
import ListShowcase from '../ListShowcase';
import ListShowcaseItem from '../ListShowcaseItem';

describe('<ListShowcase />', () => {

  const props = {
    lists: [
      {
        id: '#1',
        title: 'List #1',
        todos: [],
      },
      {
        id: '#2',
        title: 'List #2',
        todos: [
          { id: '#1', content: 'Todo #1', completed: false }
        ]
      },
    ],
    onClickListItem: () => { },
  };

  it('renders two <ListShowcaseItem /> components', () => {
    const wrapper = shallow(
      <ListShowcase {...props} />
    );
    expect(wrapper.find(ListShowcaseItem)).to.have.lengthOf(2);
  });

  it('renders "Add new" button', () => {
    const wrapper = shallow(
      <ListShowcase {...props} />
    );
    expect(wrapper.find(Button)).to.have.lengthOf(1);
    expect(wrapper.find(Button).prop('children')).to.be.equal('Add new')
  });

});
