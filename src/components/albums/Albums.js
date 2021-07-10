import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Album from "../album/Album";

export default function Albums ()
{
    const dispatch = useDispatch();
    const fetchAlbums = async ()=> {
        const data = await ((await (fetch('https://jsonplaceholder.typicode.com/albums'))).json())
        dispatch({
            type:'SET_ALBUMS',
            payload: data
        })
    }
    useEffect(()=>{
        fetchAlbums()
    },[])
    const albums = useSelector(({albums})=>albums);
    return(
        <div>
            {
                albums.map(val=><Album key={val.id} item={val}/>)
            }
        </div>
    );
}