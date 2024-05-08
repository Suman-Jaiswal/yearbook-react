import React from 'react'
import Card from './Card'

const h = 120

export default function Page({ comments, name }) {

  return (
    <div style={{
      height: 1754,
      width: 1240,
      backgroundColor: '#eee',
      margin: 'auto',
      position: 'relative',
      padding: 40,
    }}>
      <div className="timeline-track" style={{
        position: 'absolute',
        width: 5,
        height: '100%',
        backgroundColor: '#ccc',
        left: '50%',
        top: 0,
        transform: 'translateX(-50%)'

      }}>
      </div>
      <div className="name d-flex justify-content-center" style={{ position: 'relative', zIndex: 2 }}>
        <div className='p-3 px-4 fw-bold mb-4 fs-4 bg-primary' style={{

          color: 'white',
          borderRadius: 20,
        }} >{name}</div>
      </div>

      {
        comments.map((comment, i) =>
          <div className={`d-flex justify-content-${i % 2 === 0 ? 'start' : 'end'}`} style={{ height: h }} key={i}>
            <Card comment={comment} side={i % 2 === 0 ? 'left' : 'right'} />
          </div>
        )
      }

    </div>
  )
}
