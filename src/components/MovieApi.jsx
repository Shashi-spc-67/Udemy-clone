import React, { useState } from 'react'

const Emojidata=[
  {
      id:1,
      name:"kgf",
      imgae:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1804/1281804-h-532fa95c3067"
  },

  {
      id:2,
      name:"moggina manasu",
      image:"https://m.media-amazon.com/images/M/MV5BNTQ2M2RhNzAtZDU4YS00NDhkLWJjNmItYTczZGQxNWYzYWMwXkEyXkFqcGdeQXVyMTAxNTM1ODgy._V1_.jpg"
  },
  {
      id:3,
      name:"Rajahuli",
      image:"https://m.media-amazon.com/images/M/MV5BNTc4NTg4MjYwMV5BMl5BanBnXkFtZTgwMDUxMDA3MjE@._V1_.jpg"
  },
  {
      id:4,
      name:"Googly",
      image:"https://wallpapers.oneindia.com/ph-1024x768/2013/07/googly_1373878259.jpg"
  },
  {
      id:5,
      name:"Santu Straight forward",
      image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/santhu-straight-forward-et00040862-08-10-2016-05-44-37.jpg"
  },
]
function MovieApi() {
let [emoj,setEmoj]=useState("")

let updateChange=(e)=>{
setEmoj(e.target.value)
}

const filterEmoji=Emojidata.filter((emoji)=>{
    let ename=emoji.name.toLowerCase();
    return ename.includes(emoj.toLowerCase())
})

  return (
    <div>
        <h1>Search Emoji</h1>
        <input type='text'placeholder='Search Emoji....' onChange={updateChange}/>
        {filterEmoji.map((emoji)=>{
            <div>
                <img src="{emoji.image" alt="" srcset="" />
            </div>

        }
    
    
    )}
    </div>
  )
}

export default MovieApi
