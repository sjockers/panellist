import Collection from 'ampersand-collection';
import View from 'ampersand-view';
import SlideList from './components/slide_list.js';
import PanelModel from './panel_model.js';

const data = [
  {
    image: 'images/142_143_1.png',
    offset: 200,
    transitions: [{
      propertyName: 'opacity',
      fromValue: 0,
      toValue: 1,
      offset: -100
    }],
    subpanels: [
      {
        image: 'images/142_143_2.png',
        position: {
          top: 20,
          left: 30
        },
        transitions: [{
          propertyName: 'opacity',
          fromValue: 0,
          toValue: 1,
          offset: -300
        }]
      },
      {
        image: 'images/142_143_3.png',
        position: {
          bottom: 0,
          right:  0
        },
        transitions: [{
          propertyName: 'opacity',
          fromValue: 0,
          toValue: 1,
          offset: -600
        },
        {
          propertyName: 'top',
          fromValue: 300,
          toValue: 0,
          offset: -600
        }]
      }
    ]
  },
  {
    image: 'images/142_143_1.png',
    offset: 200,
    transitions: [{
      propertyName: 'opacity',
      fromValue: 0,
      toValue: 1,
      offset: -500
    }],
    subpanels: [
      {
        image: 'images/142_143_2.png',
        position: {
          top: 20,
          left: 30
        },
        transitions: [{
          propertyName: 'opacity',
          fromValue: 0,
          toValue: 1,
          offset: -300
        }]
      },
      {
        image: 'images/142_143_3.png',
        position: {
          bottom: 0,
          right:  0
        },
        transitions: [{
          propertyName: 'opacity',
          fromValue: 0,
          toValue: 1,
          offset: -300
        },
        {
          propertyName: 'top',
          fromValue: 300,
          toValue: 0,
          offset: -600
        }]
      }
    ]
  },
  {
    image: 'images/142_143_1.png',
    offset: 200,
    transitions: [{
      propertyName: 'opacity',
      fromValue: 0,
      toValue: 1,
      offset: -100
    }],
    subpanels: [
      {
        image: 'images/142_143_2.png',
        position: {
          top: 20,
          left: 30
        },
        transitions: [{
          propertyName: 'opacity',
          fromValue: 0,
          toValue: 1,
          offset: -300
        }]
      },
      {
        image: 'images/142_143_3.png',
        position: {
          bottom: 0,
          right:  0
        },
        transitions: [{
          propertyName: 'opacity',
          fromValue: 0,
          toValue: 1,
          offset: -300
        },
        {
          propertyName: 'top',
          fromValue: 300,
          toValue: 0,
          offset: -600
        }]
      }
    ]
  }
];

const panels = new Collection(data, {model: PanelModel});

const MainView = View.extend({
	template: '<div data-hook="panellist"></div>',

  render() {
		this.renderWithTemplate();
		this.renderSubview(new SlideList({collection: panels}), '[data-hook=panellist]');
  }
});

const mainView = new MainView({
  el: document.getElementById('content'),
});

mainView.render();
