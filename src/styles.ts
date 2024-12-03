import { css } from '@emotion/react';
import horizontal from '../public/images/calendar_backdrop.jpg';
import imageDefault from '../public/images/default_bg.jpg';
import vertical from '../public/images/vertical3.jpg';
import snowman from '../public/images/snowman.jpg';
import img1 from '../public/images/1.jpg';
import img2 from '../public/images/2.jpg';
import img3 from '../public/images/3.jpg';
import img4 from '../public/images/4.jpg';
import img5 from '../public/images/5.jpg';
import img6 from '../public/images/6.jpg';
import img7 from '../public/images/7.jpg';
import img8 from '../public/images/8.jpg';
import img9 from '../public/images/9.jpg';
import img10 from '../public/images/10.jpg';
import img11 from '../public/images/11.jpg';
import img12 from '../public/images/12.jpg';
import img13 from '../public/images/13.jpg';
import img14 from '../public/images/14.jpg';
import img15 from '../public/images/15.jpg';
import img16 from '../public/images/16.jpg';
import img17 from '../public/images/17.jpg';
import img18 from '../public/images/18.jpg';
import img19 from '../public/images/19.jpg';
import img20 from '../public/images/20.jpg';
import img21 from '../public/images/21.jpg';
import img22 from '../public/images/22.jpg';
import img23 from '../public/images/23.jpg';
import img24 from '../public/images/24.jpg';
import frame from '../public/images/frame.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24];

export const dialog = css({
    backgroundImage: `url(${frame})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '& .modal-content': {
        padding: '1.6em',
        'p': {
            marginBottom: '1em'
        }
    }
})
export const bg = (tablet: boolean) => css({
    width: '100%',
    height: tablet ? '100vh' : '100%',
    backgroundImage: tablet ? `url(${snowman})` : `url(${vertical})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
})
export const container = (laptop: boolean) => css({
    display: 'flex',
    width: laptop ? '50%' : '100%',
    marginLeft: laptop ? '10%' : '0',
    padding: '1.8em 0',
});

export const items = (maxWidth: string) => css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: maxWidth,
    gap: '1em',
});

export const item = (size: string, index: number) => css({
    display: 'flex',
    justifyContent: 'center', 
    width: size,
    height: size,  
    border: '1px solid #fff',
    borderRadius: '12px',
    backgroundImage: `url(${imageDefault})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#efefef',
    '&.isOpen': {
        backgroundImage: `url(${images[index]})`
    }
});

export const itemNumber = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '50px',
    height: '50px',
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    fontSize: '24px',
    color: "#fff",
    fontStyle: 'italic',
    borderRadius: '25px',
});

