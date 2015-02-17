import Collection from 'ampersand-collection';
import View from 'ampersand-view';
import Panel from './components/panel.js';
import PanelModel from './panel_model.js';

const Panellist = View.extend({
  render: function (opts) {
    this.renderCollection(this.collection, (options) => {
      return new Panel(options);
    });
    return this;
  }
});

export default function (selector, data) {
  const panellist = new Panellist({
    el: document.querySelector(selector),
    collection: new Collection(data, {model: PanelModel})
  });

  panellist.render();
}
