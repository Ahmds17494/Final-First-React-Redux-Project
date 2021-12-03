import React , {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux'
import axios from 'axios';
import { async } from 'q';
import {AddBooks, AddCategory} from '../Auth/AuthAction'
import {DisplayBook} from './displayBook'



function Books () {
   
    
     
    const dispatch = useDispatch();
    const [ myData , setMyData]= useState([]);
    const [ myDataCategory , setMyDataCategory]= useState([]);
    const [dataLength , setDataLength] = useState([]);
    
    const[ numOfBooks , setNumOfBooks] = useState();
  


 



    const getDataCategory = async()=>{
        try {

            let res_category = await axios.get('http://localhost:3003/category')
            setMyDataCategory(res_category.data);

         
        } catch (error) {
            console.log(error);
        }
  }



  
  
   

  const addDescriptionn =(data)=>{ 
      

  

    return async ()=>{
  
      
      
      window.open("http://localhost:3000/display", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")
  
      const config ={ headers:{ 'Content-Type':'application/json'}}
      
      let res = await axios.post('http://localhost:3003/Display',data, config )

     
      
   



    
    
  }
  }
    



    
    const getData = async()=>{
        try {
            
            let ss= "Romance";
            let res = await axios.get('http://localhost:3003/books'); 
            console.log(res.data);
            setMyData(res.data);
           
            
            

        } catch (error) {
            console.log(error);
        }
  }

  
  useEffect(()=>{
      getData();
     
      getDataCategory();
  },[])




    return ( 
<div>
  


  <div>
                 
               

                 


                
                 
  { myDataCategory.map((myDataCategory,index) =>  
                            {
                
                          return ( ( <div key={index} className="container"> <div className="row"> <h1 className="title" id="Category" >Best Books For {myDataCategory.Category} Lovers</h1> </div>
                              
                              <div className="container">
                              <div className="row userDisplay ">
                              <React.Fragment>
                              { myData.map((myData,index) =>  
                            {
           
           
                            
                               
                           return ( ( <React.Fragment>


                             
                      
                              
                               {( myDataCategory.Category=== myData.Category) ? 

                                <div className="col-3 d-flex userBooks">
                                <div className=""><img id="imgHover" src={myData.Image} alt="xx" onClick={addDescriptionn(myData)}/> </div>
                                <i class="fa fa-heart-o iconFont" aria-hidden="true"></i>
                               
                                



                                </div>


                                : null  }
                                
                                
                      


                          
                               
                             
                            </React.Fragment>  )
                            )
                        } 
                                         )}
           </React.Fragment> 
                             
           </div> </div> </div>  )
                            )
                        } 
                                         )}
           

                 
                     
                

        
                     
                 </div>
                 
                      </div> 
                     

        
    );
}

export default Books;
