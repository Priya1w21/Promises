const posts=[]
let LastActivityTime=null
function createPost(title){
    return new Promise((resolve)=>{
        setTimeout(()=>{
        const post={title};
        posts.push(post);
        resolve(post)
    },1000);
  })
}
function UpdateLastUserActivityTime(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            LastActivityTime=new Date();
            resolve(LastActivityTime);
        },1000)
    })
}
function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                const poped=posts.pop();
                resolve(poped);
            }else{
                reject('ERROR : ARRAY IS EMPTY');
        }
        },1000)
    });
}
createPost('Post1')
.then(()=>UpdateLastUserActivityTime())
.then((UpdatedTime)=>{
    console.log("Posts",posts);
    console.log("Last Activity Time",UpdatedTime);
    return createPost('Post2');
})
.then(()=>{
    console.log("Post Deleted. Remaining Posts",posts);
})
.catch((Errmsg)=>{
    console.log(Errmsg);
})
