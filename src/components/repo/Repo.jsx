import React,{useState,useEffect} from 'react'
import './repo.css'
import Pagination from '@mui/material/Pagination';
import Repocard from '../repocard/Repocard'
const Repo = ({repodata}) => {
    const [page, setPage] = useState(1);
    const [dt, setDt] = useState([]);

    useEffect(() => {
        var d =[];
      for(var i =(page-1)*6 ;i<page*6;i++)
      {
        d.push(<Repocard repo={repodata[i]} key={repodata[i].id}></Repocard>)
      }
      setDt(d);
    }, [page])
    
   
  return (
   <>
    <div className='data'> {
        dt
    }
    
    </div>
    <Pagination count={repodata.length/6} onChange={(pn)=>{setPage(pn.target.textContent)}} hidePrevButton hideNextButton style={{ display:"Flex", justifyContent:"center"}} variant="outlined" />
    </>
  )
}

export default Repo