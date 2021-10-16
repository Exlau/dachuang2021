import req from './request'

export const uploadPost = (postData) => {
    const path = '/post/upload'
    return req({
        method: 'POST',
        url: path,
        data: postData
    })
}


export const getPosts = (postNum, sortByHit) => {
    const path = `/post/get/${postNum}/${sortByHit}`
    return req({
        method: 'GET',
        url: path,
    })
}

export const getAPost = (postID) => {
    const path = `/post/getByPostId/${postID}`
    return req({
        method: 'GET',
        url: path
    })
}