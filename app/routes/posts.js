import Ember from 'ember';

export default Ember.Route.extend({


  model() { // this is referred to as a model hook
    return this.store.findAll('post');
  },


  actions: {
    delete(post){
      if (confirm('Are you sure you want to delete this post?')){
        post.destroyRecord();
        this.transitionTo('posts');
      }
    },
    savePost(category, message) {
      var params = {
        category: category,
        message: message
      };
      var newPost =
      this.store.createRecord('post', params);
      newPost.save();

      this.transitionTo('posts');
    }
  }
});
