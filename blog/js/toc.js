const toc = () => {
    const selector = document.querySelector('#toc');
    if(selector) {
        const getTitle = document.querySelectorAll(`h3[id]`)
        let list = [];
        let number = 1;
        getTitle.forEach(element => {
            const title = element.innerText
            const id = element.getAttribute('id')
            element.textContent = `${number++}. ${title}`;
            list.push(`<li><a href="#${id}">${title}</a></li>`)
            
        })
        selector.insertAdjacentHTML('afterend', `
            <ol>
                ${list.join('')}
            </ol>
        `);
    } 
}

toc();