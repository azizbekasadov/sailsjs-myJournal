module.explore = {
    attributes: {
        title: {
            type: 'string',
            require: true
        }, 
        body: {
            type: 'string',
            required: true
        },
        user: {
            model: 'user'
        }
    }
}