import React from 'react'
import Story from './Story'
import './Feed.css'

export default function Story_reel() {
  return (
    <div className='story_reel'>
        <Story profile='https://upload.wikimedia.org/wikipedia/commons/c/c0/Official_Photograph_of_Prime_Minister_Narendra_Modi_Potrait.png'
            Image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41yrX7UX6zL._SX322_BO1,204,203,200_.jpg'
            title='Narendra Modi'
        />
        <Story profile='https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg'
            Image='https://www.kelownanow.com/files/files/images/dress%20code.jpg'
            title='Bill Gates'
        />
        <Story profile='https://static.theprint.in/wp-content/uploads/2019/02/Ratan-Tata-image.jpg'
            Image='https://techstory.in/wp-content/uploads/2018/11/1HY8GI1_632_lt.jpg'
            title='Ratan Tata'
        />
        <Story profile='https://lastfm.freetls.fastly.net/i/u/ar0/f1df7c3eb64df572d647ba70e5dfa795.jpg'
            Image='https://cdn.siasat.com/wp-content/uploads/2022/12/Darshan-Raval.jpg'
            title='Darshan Raval'
        />
        <Story profile='https://feeds.abplive.com/onecms/images/uploaded-images/2023/01/23/7d2c77d69308075b4d7114ffc64852391674495966235462_original.jpg?impolicy=abp_cdn&imwidth=650'
            Image='https://static.toiimg.com/thumb/msid-87801615,width-1070,height-580,imgsize-51524,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'
            title='Bhuvan Bam'
        />
    </div>
  )
}
