module.exports = async function(req, res) { 
    console.log('Home Page');

    const userId = this.req.sessions.userId;

    const allPosts = await Post.find({
        user: userId,
    });

    if (res.wantsJSON) {
        return res.send(allPosts);
    }

    res.view('pages/home', 
        { allPosts }
    );
}