
// PostController

module.exports = {
    posts: async function(req, res) {
        const results = await Post.find();
        res.send(results);

        // Post
        //     .find()
        //     .exec(function(error, result) {
        //         if (error) {
        //             res.serverError(error.toString());
        //             return;
        //         }

        //         res.send(result);
        //     }
        // );
    },

    create: function(req, res) {
        const title = req.body.title;
        const postBody = req.body.postBody;

        if (title.length > 0 && postBody.length > 0) {
            sails.log.debug('Title ' + title);
        sails.log.debug('Body: ' + postBody);

        Post.create(
            {
                title: title,
                body: postBody
            }
        )
        .exec(function(error) {
            if (error) {
                console.log('Error: ' + error.toString());
                return res.serverError(error.toString());
            }

            console.log('Finished creating post object');
            return res.redirect('/home');
         })
        } else {
            alert('You must specify title and body');
            return res.end();
        }
    },

    findById: async function(req, res) {
        const postId = req.param('postId');
        const posts = await Post.find();

        const matchedPosts = posts.filter(p => { return p.id == postId });

        if (matchedPosts.length > 0) {
            res.send(matchedPosts);
        } else {
            alert('No Posts Found')
        }
    },

    delete: async function(req, res) {
        const postId = req.param('postId');
        
        await Post.destroy({ id: postId });
        res.send('Trying to delete a post with id: ' + postId);
    }
};