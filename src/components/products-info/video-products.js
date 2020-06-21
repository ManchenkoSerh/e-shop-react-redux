import React, {useEffect} from "react";

const VideoProduct=({fetchVideoInfo,videoUrl,itemprops})=>{
    useEffect(()=>{
        console.log(itemprops)
        debugger;

        fetchVideoInfo(/*this.props.productsInfo*/)
    },[])
    console.log(videoUrl)
    return(
        <div>

        </div>
    )
}
export default VideoProduct;
