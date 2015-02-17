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

  updateCssProperty({propertyName, fromValue, toValue, offset}, scrollOffsetTop) {
    let positioning = _.contains(['top', 'right', 'bottom', 'left'], propertyName);

    let bounds = this.el.getBoundingClientRect();
    let height = this.el.clientHeight;

    let inMin = bounds.top;
    let inMax = bounds.top + height;
    let inDelta = scrollOffsetTop - inMin + height + offset;
    let output = (fromValue - toValue) / (inMin - inMax) * inDelta;

    if (fromValue > toValue) {
      if (positioning) output = fromValue + output;
      output = output <= toValue ? toValue : output;
      output = output >= fromValue ? fromValue : output;
    }
    else {
      if (positioning) output = toValue - output;
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
