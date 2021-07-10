import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Photo from "../photo/Photo";

export default function Photos ()
{
    const dispatch = useDispatch();
    const fetchPhotos = async ()=> {
        const data = await ((await (fetch('https://jsonplaceholder.typicode.com/photos'))).json())
        dispatch({
            type:'SET_PHOTOS',
            payload: data
        })
    }
    useEffect(()=>{
        fetchPhotos()
    },[])
    const photos = useSelector(({photos})=>photos);
    return(
        <div>
            {
                photos.map(val=><Photo key={val.id} item={val}/>)
            }
        </div>
    );
}