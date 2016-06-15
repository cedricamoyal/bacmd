var app = app || {};

 app.AppView = Backbone.View.extend({
  el: "#main", //referere an existing element with the id of main

  render: function() {
    console.log ("App view should be rendered now")
    var appViewTemplate = $("#appViewTemplate").html();
    //set the html of the element with the id of main to be that appViewTemplate, make sure to use the keyword 'this'

    this.$el.html(appViewTemplate)
}
});


    // Create a new instance of something called the SecretInputView which should be defined in views/SecretInputView.js
       // Put all of the content from the secretInputViewTemplate onto the page - this should be put in the div with the ID of secretForm

       // Create the file
       // Make sure app is defined
       // Create the factory or constructor (extend Backbone.View)
         // el: "#secretForm"
         // We will need a render method
       // Create the instance
       // Call render on the instance
