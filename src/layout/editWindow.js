import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const EditWindow = () => {

  const up = {};
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
      
    
      if (Title && Author && Price && Image){
          // invok login function
        
         ( update())
       
         
      }else{
          alert('All Fields Are Requiered')
      }
  }



    const update = async (e)=>{
       
       
    

          let resBooks = await axios.get('http://localhost:3003/Post'); 
    
          let AllBooks = resBooks.data;
          await axios.delete('http://localhost:3003/Post/'+AllBooks[0].id);

          alert("update done")
         
          
          return axios.put('http://localhost:3003/books/'+AllBooks[0].id, {Category:AllBooks[0].Category ,Title: Title , Author:Author , Price:Price , Image:Image}).then(response => {
              console.log(response)
             


          })


        }
      
     



    return (
        <div>
          <h1> Update Books</h1>
             <div className="row mt-3">
      <div className="col-4">
        
        <input type="text" className="form-control" id="Title" placeholder="Book Title" value={Title} onChange={inputChange}  />
      </div>
      </div>
    
    <div className="row mt-3">
      <div className="col-4">
        
        <input type="text" className="form-control" id="Author"  placeholder="Book Author" value={Author} onChange={inputChange} />
      </div>
      </div>
      <div className="row mt-3">
      <div className="col-4">
       
        <input type="text"  className="form-control" id="Price" placeholder="Book Price" value={Price} onChange={inputChange} />
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-4">
       
        <input type="text" className="form-control" id="Image" placeholder="Book Cover" value={Image} onChange={inputChange} />
      </div>
    </div>
    <div className="row mt-3">
    <div className="col-4 mt-3">
      <button type="button" onClick={onSub} className="btn btn-danger ">UpdateBooks</button>
    </div>
    </div>

          
        </div>
    );
}

export default EditWindow;
