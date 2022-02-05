import './App.scss';
import getApi from './data.json';
import Search from './Components/Search/Search';
import ApiItem from './Components/ApiItem';
import { useState } from 'react';


function App() {
  const [search,setSearch] = useState('')
  const [apis,setApis] = useState(getApi)

  const toggleBookmark = (id) => {
    setApis(
        apis.map((api)=>{
          if(api.id === id){
            api.bookmark = !api.bookmark;
          }
          return api
        })
    );
  };

  return (
    <div className="App">
      
      <h3>Teknorder-de istediyiniz texnoloji mehsullari tapa bilersiniz</h3>
      <Search search={search} setSearch={setSearch} placeholder="Search.." />
      
      <div className="container">
        <h4>İstədiyiniz məhsul yoxdursa sifariş edin, 1 həftəyə alın!</h4>
        <div className="api-list">

          {apis
            .filter((api) => 
            api.name.toLowerCase().includes(search.toLowerCase()))
           .map((api) =>( 
            <ApiItem key={api.id} api={api} toggleBookmark={toggleBookmark} /> 
          ))}
              
        </div>
        <div className='container'>
          <h4>YourBookMarks</h4>
          <div className="api-list">

          {apis
            .filter((api) => 
            api.bookmark == true)
           .map((api) =>( 
            <ApiItem key={api.id} api={api} toggleBookmark={toggleBookmark}/> 
          ))}
              
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
