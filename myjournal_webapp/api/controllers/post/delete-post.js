module.exports = {
  friendlyName: 'Delete post',
  description: '',
  inputs: {
    id: {
        type: 'string',
        required: true
    }
  },
  exits: {
    invalid: {
      description: 'This was an invalid post to delete'
    }
  },

  fn: async function (inputs) {
    console.log('We are in delete post action');

    console.log('Trying to destroy Post object with id: ' + inputs.id);
    const deletedObject = await Post.destroy(
      {
        id: inputs.id
      }
    ).fetch();

    console.log(deletedObject);

    if (deletedObject.length == 0) {
      throw({
        invalid: { error: 'Record does not exist' }
      });
    }

    return;
  }
};
