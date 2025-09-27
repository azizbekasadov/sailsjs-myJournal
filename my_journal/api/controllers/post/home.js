module.exports = async function(req, res) { 
    console.log('Home Page');

    const allPosts = await Post.find();

    res.view('pages/home', 
        { allPosts }
    );
}