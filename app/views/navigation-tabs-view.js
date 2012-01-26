(function($, namespace) {
  namespace.NavigationTabsView = function() {
    var baseOptions = {
      tagName: 'div',
      className: 'tabs'
    };
    var self = new (Backbone.View.extend(baseOptions))();
    var agent = new bulldog.NavigationTabsAgent(self);

    var $el;

    self.render = function() {
      $el = $(self.el);

      $el.unbind('click', self.selectTab);
      $el.empty();

      var locals = agent.getLocals();
      $el.append(JST["tabs"](locals));

      $el.bind('click', self.selectTab);
      return self;
    };

    self.selectTab = function(e) {
      $('.selected', $el).removeClass('selected');
      var newSelection = $(e.target).attr('class');
      agent.selectTab(newSelection);
      self.trigger('tabSelected', newSelection);
    };

    return self;
  }
}(jQuery, bulldog));