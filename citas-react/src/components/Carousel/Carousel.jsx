import img1 from './imgs/carousel1.jpeg'
import img2 from './imgs/img2.jpg'
import './Carrousel.css'


function Carousel(){
    return(
        <div id="carrousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src={img1} className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Carousel