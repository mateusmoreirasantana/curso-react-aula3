import './Content.css';

import Post from '../Post'

export default function Content() {
  return (
    <div className="posts">

<Post 
  titulo = 'High five, Hyperlink!'
  image ='img/hyperlink.webp' 
  description ='Hyperlink'

/>
<Post 
  titulo = 'Sorry, bro.'
  image ='img/sorry_bro.webp' 
  description ='Sorry, bro.'

/>
   

      
    </div>
  );
}