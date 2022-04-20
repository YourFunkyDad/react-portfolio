import React from 'react'
import Buster from './images/gallery/Buster.jpg';
import Drawing1 from './images/gallery/Drawing1.jpg';
import Drawing2 from './images/gallery/Drawing2.jpg';
import Foto from './images/gallery/Foto-Class.jpg';
import Konqr from './images/gallery/KONQR.jpg';
import Saw from './images/gallery/SAW.jpg';
import Tunnels from './images/gallery/Tunnels.jpg';

function Gallery() {
  return <div className='bigGallery'>Original Drawings and Photos
      <div className='gallery'>
      
      <p><img src={Buster} alt='Buster'></img>"Buster" 2012 graphite<br/>
      The drawing that started it all. The first and original concept of Buster, a face I created that has consistently evolved in the past decade through the power of repetition.</p>
      
      <p><img src={Drawing1} alt='Draw1'></img>"Where'd Ya Get That At?" 2020 pencil & ink <br/>
        They don't think it be like it is, but it do.</p>
      
      <p><img src={Drawing2} alt='Draw2'></img>"Intergalactic Busterino" 2020 pencil & ink <br/>
        A recent, more modern rendition of the classic Buster.</p>
      
      <p><img src={Foto} alt='Foto'></img>'unnamed' 2010 SLR Film & Photoshop<br/>
        An old archived photo from a high school photography class thesis.</p>
      
      <p><img src={Konqr} alt='Konqr'></img>'KONQR' Digital - Cincinnati, OH 2016 <br/>
        Modern Art.</p>
      
      <p><img src={Saw} alt='Saw'></img>'SAW' Digital - Dayton, OH 2017 <br/>
        So-Called "Modern Art".</p>
      
      <p><img src={Tunnels} alt='Tunnels'></img>'Trenches' Cincinnati, OH 2014? <br/>
        Getting your feet wet.</p>
      </div>
  </div>;
}
export default Gallery;
