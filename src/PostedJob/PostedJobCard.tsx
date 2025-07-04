const PostedJobCard=(props:any)=>{
    return <div className="rounded-xl bg-blue-200 p-2 border-l-2 border-l-blue-950">
        <div className="text-sm font-semibold">{props.jobTitle}</div>
        <div className="text-xs font-medium">{props.location}</div>
        <div className="text-xs">{props.posted}</div>
    </div>
}
export default PostedJobCard;