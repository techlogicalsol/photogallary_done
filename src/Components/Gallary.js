import React from 'react'
import Slider from 'react-slick'


function Gallary(props){

  const {suggestion} = props
 

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {suggestion.forEach(item => (
                                
                         
                            <div className="col-md-2 mb-5" key={item.id}>
                                <img src={`https://picsum.photos/200/350?random=${item.id}`}  className="myImg"/>
                            </div>
                            ))}
                        </div>

                       

                    </div>
                
                </div>    
                
                
            </div>
            
                
           
        </>
    )
}

export default Gallary