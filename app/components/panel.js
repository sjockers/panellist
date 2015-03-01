import View from 'ampersand-view';
import DomthingMixin from 'ampersand-domthing-mixin';
import _ from 'underscore';

import ViewScrollMixin from './view-scroll-mixin.js';
import Caption from './caption.js';
import panelTemplate from '../templates/panel.dom';

const Panel = View.extend(DomthingMixin, ViewScrollMixin, {

  template: panelTemplate,

  render() {
    this.renderWithTemplate(this);
    this.renderSubpanels(this.model.subpanels);
    this.renderCaptions(this.model.captions);
    this.registerViewportScrollHandler(this.handleScrolling);
  },

  renderSubpanels(collection) {
    if (collection) {
      this.renderCollection(collection, (options) => {
        return new Panel(options);
      }, this.el.querySelector('[data-hook=subpanels]'));
    }
  },

  renderCaptions(collection) {
    if (collection) {
      this.renderCollection(collection, (options) => {
        return new Caption(options);
      }, this.el.querySelector('[data-hook=captions]'));
    }
  },

  updateCssProperty({propertyName, fromValue, toValue, offset}, scrollOffset) {
    const positioning = _.contains(['top', 'right', 'bottom', 'left'], propertyName);
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    const elementOffset = this.el.getBoundingClientRect().top + document.body.scrollTop;

    const on = elementOffset - viewportHeight;
    const off = on + offset;
    const delta = scrollOffset - on;

    let output = delta / (off - on) * (toValue - fromValue);

    if (fromValue > toValue) {
      output = positioning ? fromValue + output : output;
      output = output <= toValue ? toValue : output;
      output = output >= fromValue ? fromValue : output;
    }
    else {
      output = positioning ? toValue - output : output;
      output = output >= toValue ? toValue : output;
      output = output <= fromValue ? fromValue : output;
    }

    this.el.update(propertyName, output.toString());
  },

  handleScrolling(scrollOffsetTop) {
    this.model.transitions.each( transition => {
      this.updateCssProperty(transition, scrollOffsetTop);
    });
  }
});

export default Panel;
