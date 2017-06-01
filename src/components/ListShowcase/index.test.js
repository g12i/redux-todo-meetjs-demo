import React from 'react';
import sinon from 'sinon';
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
    onClickAddNewList: () => { },
  };

  it('renders two <ListShowcaseItem /> components', () => {
    const wrapper = shallow(
      <ListShowcase {...props} />
    );
    expect(wrapper.find(ListShowcaseItem)).to.have.lengthOf(2);
  });

  it('renders clikable "Add new" button', () => {
    const onClickAddNewList = sinon.spy();
    const wrapper = mount(
      <ListShowcase {...props} onClickAddNewList={onClickAddNewList} />
    );
    expect(wrapper.find(Button)).to.have.lengthOf(1);
    expect(wrapper.find(Button).text()).to.be.equal('Add new');
    wrapper.find(Button).simulate('click')
    expect(onClickAddNewList).to.have.property('callCount', 1);
  });

});
