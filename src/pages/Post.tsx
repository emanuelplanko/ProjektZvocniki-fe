import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Comment from "../components/Comment";

interface Post {
    title: string
    content: string
}
const Post = () => {
    const params=useParams()
    const[data,setData] = useState<Post | null>(null);
    async function getPost() {
        const res = await axios.get('http://localhost:8080/post/'+params.id, {withCredentials:true});
        setData(res.data)
        console.log(res.data)
    }

    const[comment,setComment] = useState([]);
    async function getComment() {
        const res = await axios.get('http://localhost:8080/post/'+params.id + '/comments', {withCredentials:true});
        setComment(res.data)
        console.log(res.data)
    }

    useEffect(()=>{
        getPost()
        getComment()
    },[])

    if (data==null)
        return <></>

    return (
        <div>
          <div>{data.title}</div>
            <div>{data.content}</div>
            {comment.map((c: any)=><Comment text={c.text} />)}
        </div>
    );

}

export default Post;