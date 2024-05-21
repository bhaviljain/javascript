let isfetching = false;
let currPage = 1;
let hasMore =  true

let roor = document.getElementById('root')

async function fetchdata() {
    isfetching = true;
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currPage}`)
    let data = await res.json()
    console.log(data);
    isfetching = false
    if(data.length===0)
        {
            hasMore = false
            return
        }
        for(post of data)
            {
                let div = document.createElement('div')
                div.innerHTML = `<h2>${post.title}</h2>
                <p>${post.body}</p>
                `
                roor.appendChild(div)
            }
}
window.addEventListener('scroll', function(e){
    if(isfetching || !hasMore){
        return
    }
    if((window.innerHeight + this.window.scrollY) >= this.document.body.offsetHeight)
        {
            fetchdata()
        }
})

fetchdata()