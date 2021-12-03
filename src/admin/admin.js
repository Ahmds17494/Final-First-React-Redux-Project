import React , {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux'
import axios from 'axios';
import { async } from 'q';
import {AddBooks, AddCategory, deleteCategory} from '../Auth/AuthAction'
import{addDescription} from '../Auth/AuthAction'
import {EditWindow} from '../layout/editWindow'
import {useHistory } from 'react-router-dom'


function Admin() {
  const history =useHistory();
    let key=0;

    const dispatch = useDispatch();
    const [ myData , setMyData]= useState([]);
    const [ myDataCategory , setMyDataCategory]= useState([]);
    const [ myCategory , setMyCategory]= useState([]);
    const [ SelectedCategory , setSelectedCategory]= useState([]);
    const [ filters , setFilters]= useState([]);

   
    

    const [ Category, setCategory ] = useState('');
    const [ Title , setTitle ] = useState('');
    const [ Author , setAuthor ] = useState('');
    
    const [ Price , setPrice ] =useState('');
    const [ Image, setImage ] = useState('');

    // let res = await axios.get('http://localhost:3004/users')
        
    // let Allusers = res.data;
    // console.log('emailData : ' , UserData.email);
    // console.log('Allusers : ' , Allusers  )
    
    // let AuthUser  = Allusers.filter(user=> user.email === UserData.email && user.password === UserData.password)[0]
    // console.log('AuthUser : ' , Allusers);
    


     
  
  
    const inputChange =(e)=>{
        // clean error
     
        switch (e.target.id) {
            case 'SelectedCategory':
                setSelectedCategory(e.target.value)
                break;
            
            case 'Category':
                setCategory(e.target.value)
                break;
            case 'Title':
                setTitle(e.target.value)
                break;
            case 'Author':
                setAuthor(e.target.value)
                break;
            case 'Price':
                setPrice(e.target.value)
                break;
            case 'Image':
                setImage(e.target.value)
                break;         

            default:
                break;
        }
    }
  
    const onSub = async (e)=>{
        e.preventDefault();
        
        let data = { Category:SelectedCategory , Title: Title , Author:Author , Price:Price , Image:Image};
      
        if ( SelectedCategory && Title && Author && Price && Image){
            // invok login function
            console.log(data)
           dispatch( AddBooks(data))
         
           
        }else{
            alert('All Fields Are Requiered')
        }
    }

    const onSubCategory = async (e)=>{
        e.preventDefault();
       
        let data =  { Category:Category }
        if ( Category ){
            
           
           dispatch( AddCategory(data))
           
        }else{
            alert('All Fields Are Requiered')
        }
    }

    const deleteBook = async(e)=>{ 
           
          let id = e.target.id;

           
           let deleteBooks= await axios.delete('http://localhost:3003/books/'+id);
           let resBooks = await axios.get('http://localhost:3003/books'); 
            
               
  }



   const deleteCategory =(Category,id)=>{ 

    return async (e)=>{
         e.preventDefault();
         
         let resBooks = await axios.get('http://localhost:3003/books'); 
         let AllBooks = resBooks.data;    
       
          
         let filters  = AllBooks.filter(user=> user.Category == Category  )
        
         let category= await axios.delete('http://localhost:3003/Category/'+id);
         let deleteBooksCategory = filters.map((x) => axios.delete('http://localhost:3003/books/'+x.id))
        

         
         
        

    
   
     }
   }

   

 const addDescriptionn =(data)=>{ 

  

  return async ()=>{

    window.open("http://localhost:3000/edit", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")



    const config ={ headers:{ 'Content-Type':'application/json'}}
    
    let res = await axios.post('http://localhost:3003/Post',data, config )
  

}
}
 

   
 
 





    const getDataCategory = async()=>{
        try {

            let res_category = await axios.get('http://localhost:3003/category')
            setMyDataCategory(res_category.data);

         
        } catch (error) {
            console.log(error);
        }
  }




    



    
    const getData = async()=>{
        try {
            
        
            let res = await axios.get('http://localhost:3003/books'); 
            console.log(res.data);
            setMyData(res.data);
           
            
            

        } catch (error) {
            console.log(error);
        }
  }

  const getMyCategory = async()=>{
    try {
        let ss= "Romance";
        let res = await axios.get('http://localhost:3003/category'); 
        console.log(res.data);
        setMyCategory(res.data);
       
        
        

    } catch (error) {
        console.log(error);
    }
}

  useEffect(()=>{
      getData();
      getMyCategory();
      getDataCategory();
      
  },[])





    return (
<div>













 
  <div class="container d-flex">
 
  <div class="container">
  <div className="row mt-3"><h3>Add Books</h3></div>
  <form className="p-3">
    <div className="row mt-3">
        <div className="col-6">
        <select id="SelectedCategory" onChange={inputChange}>
                         
      { myCategory.map((myCategory,index) =>  
                 {
                    
                return ( (

                    <option key={index} value={myCategory.Category}>{myCategory.Category}</option>
                     
                    ) ) } )}
            </select>
        </div>
      </div>
      <div className="row mt-3">
      <div className="col-6">
        
        <input type="text" className="form-control" id="Title" placeholder="Book Title" value={Title} onChange={inputChange}  />
      </div>
      </div>
    
    <div className="row mt-3">
      <div className="col-6">
        
        <input type="text" className="form-control" id="Author"  placeholder="Book Author" value={Author} onChange={inputChange} />
      </div>
      </div>
      <div className="row mt-3">
      <div className="col-6">
       
        <input type="text"  className="form-control" id="Price" placeholder="Book Price" value={Price} onChange={inputChange} />
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-6">
       
        <input type="text" className="form-control" id="Image" placeholder="Book Cover" value={Image} onChange={inputChange} />
      </div>
    </div>
    <div className="row mt-3">
    <div className="col-4 mt-3">
      <button type="button" onClick={onSub} className="btn btn-danger ">Add Books</button>
    </div>
    </div>
  </form>
 </div>
 <div class="container category">
  <form className="p-3">
       <div className="row" >
      <div className="col-5">
        
        <input type="text" className="form-control" id="Category" placeholder="Select Category" value={Category}  onChange={inputChange}  />
      </div>
      <div className="col-4 mt-3">
      <button type="button" onClick={onSubCategory} className="btn btn-danger ">Add Category</button>
    </div>
    </div>
      <div className="row">
                  
      { myCategory.map((myCategory,index2) =>  
                 {
                 
                    
                return ( (

                <div className=" row" key={index2} >
                    <div id="Category" className="title col-4" ><h5>{myCategory.Category}</h5></div>
                    <div className="col-3"> <button   onClick={deleteCategory(myCategory.Category,myCategory.id)}  id={myCategory.id}  ><i class="fa fa-trash" aria-hidden="true"></i></button></div>
           
                    </div >
                    ) ) } )}

{/* { filters.map((filters,index) =>  
                 {
                    
                return ( (

                    <div key={index}> 
                    <div> {filters.Category}</div>
                    <div> {filters.id}</div>
                    <div>{filters.Price}</div>
                    
                    </div>
                     
                    ) ) } )} */}


         </div>
     
  
   
  
    
  </form>
  </div>
  </div>


  <div>
                 
                
                 
                        { myDataCategory.map((myDataCategory,index) =>  
                            {
                
                          return ( ( <div key={index} className="container"> <div className="row"> <h1 className="title" id="Category" >{myDataCategory.Category}</h1> </div>
                              
                              
                              
                              <React.Fragment>
                              { myData.map((myData,index) =>  
                            {
           
           
                            
                               
                           return ( (


                             
                           <div key={index}>
                                
                              
                               {( myDataCategory.Category=== myData.Category) ? 
                                    
                                   
                                      <div className="row d-flex  adminDisplay">
                                    <div className="col-3 "><img  src={myData.Image} alt="xx"/> </div>
                                    <div className="col-2 " ><h3>{myData.Title}</h3></div>
                                    <div className="col-2 " ><h3>{myData.Author}</h3></div>
                                    <div className=" col-2 "><h3>{myData.Price}</h3></div>
                                    <div className=" col-1"> <i onClick={addDescriptionn(myData)} class="iconFont fa fa-pencil-square-o" aria-hidden="true"></i></div>
                                    <div className=" col-1"> <i  onClick={deleteBook}  id={myData.id} class="iconFont fa fa-trash" aria-hidden="true"></i></div>
                                   
                                 
           
           
                                </div> : null  }
                                
                                
                      


                            </div>  
                            
                               
                             
                           )
                            )
                        } 
                                         )}
           </React.Fragment> 
                             
                         </div>  )
                            )
                        } 
                                         )}
           

                      </div> 

               





                      </div>



        
    );
}

export default Admin;








// <div className="bookContainer d-flex">
//                                       <div className="row">
//                                     <div className="col-3 left-side  justify-content-start"><img  src={myData.Image} alt="xx"/> </div>
//                                     <div className="col-2 right-side justify-content-end "> </div>
//                                         <span className="bookTitle" >{myData.Title}</span>
//                                         <span className="bookContent" >{myData.Author}</span>
//                                          { myData.OldPrice? 
//                                         <span className="bookOldPrice">{myData.OldPrice}</span> :""}<span  className="bookPrice">{myData.Price}</span>
//                                       <div> <button  onClick={addDescriptionn(myData)}  id={myData.id} > add a new Description</button></div>
//                                       <div> <button   onClick={deleteBook}  id={myData.id}  > Delete the Book</button></div>
                                   
                                    
                                    