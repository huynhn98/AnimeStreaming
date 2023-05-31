
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Header from './components/Header'
import Home from './pages/Home';
import Content from './pages/Content';
import DescriptionPage from './pages/DescriptionPage';
import WatchPage from './pages/WatchPage';
import BookmarkPage from './pages/BookmarkPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/*' element={<Header/>}>
      <Route index element={<Home/>}/>
      <Route path='/content' element={<Content />} />
      <Route path='/result' element={<DescriptionPage/>} />
      <Route path='/watch' element={<WatchPage/>} />
      <Route path='/bookmarks' element={<BookmarkPage/>} />
    </Route>
  )
)

function App() {

  document.body.style.backgroundColor = "black";
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
