import React, { useState } from "react"

const CommentCard = ({ data }) => {
  return (

    <div className=" flex shadow-sm w-[100%] max-md:w-[360px] bg-slate-50 mb-2">
      <img
        className="h-10 rounded-full my-4 mx-3 "
        src={data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        alt=""
      />
      <div className="flex flex-wrap flex-col justify-center my-3">
        <p className="lowercase font-semibold">
          @{data?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </p>

        <p className="max-md:w-[100%] w-[100%]"> {data?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
        <div className="flex py-1">
          <span className="px-4">
            <img className="h-[20px] cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/126/126473.png" />
            {data?.snippet?.topLevelComment?.snippet?.likeCount}
          </span>
          <span className="mx-4">
            <img className="h-[20px] cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/126/126504.png"/>
           
          </span>
          <span className="mx-4">
            <img className="h-[20px] cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/10191/10191794.png"/>
           
          </span>
        </div>
      </div>
    </div>
  )

}

const CommentList = ({ comments }) => {
  return (
    comments.map((comment, index) =>
      <div>
        <CommentCard key={comment.id} data={comment} />
      </div>
    )
  )
}

const Comments = ({ data }, videoID) => {

  // console.log(data);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="m-2 p-2 w-[1008px]">
      <h1 className="font-bold text-2xl ">Comments:</h1>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer text-[18px] "
        >
          see less...
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer text-[18px]"
        >
          see more...
        </button>
      )}
      {isVisible && <p>{<CommentList comments={data} />}</p>}


    </div>
  )
}

export default Comments;
