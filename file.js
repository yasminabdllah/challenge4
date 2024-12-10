let content=[
    {
        history:"I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
    
    },
    {
        vision:"Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal"

        
    },
    {
        goals:"I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
    },
]
let title

document.querySelectorAll('button').forEach(button =>{
    
button.addEventListener('click', function(){
    document.querySelectorAll('button').forEach(btn => btn.classList.remove("active"));
    title=this.id

    this.classList.add("active")
    contentFlip(title);

})});

let aboutContet=document.getElementById("aboutContet")
function contentFlip(title){
    let showcontent=content.find(item=> item[title])
    aboutContet.innerHTML=`

    <h4 >${title}</h4>
    <p>
        ${showcontent[title]}

    </p>
    
    `
    
}

contentFlip('history')
