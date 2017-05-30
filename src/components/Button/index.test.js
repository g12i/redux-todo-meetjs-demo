import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('<Button />', () => {

  it('renders children text', () => {
    const wrapper = shallow(
      <Button>Foo</Button>
    );
    expect(wrapper.text()).to.be.equal('Foo');
  });

  it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Button onClick={onClick}>Foo</Button>
    );
    wrapper.find('button').simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });

});
