import React from 'react'
import Card from './Card'

const multiple = .5
const h = 120 * multiple

export default function Page({ comments, name }) {

  return (
    <div style={{
      height: 1754 * multiple,
      width: 1240 * multiple,
      backgroundColor: '#eee',
      margin: 'auto',
      position: 'relative',
      padding: 40 * multiple,
    }}>
      <div className="timeline-track" style={{
        position: 'absolute',
        width: 5 * multiple,
        height: '100%',
        backgroundColor: '#ccc',
        left: '50%',
        top: 0,
        transform: 'translateX(-50%)'

      }}>
      </div>
      <div className="name d-flex justify-content-center" style={{ position: 'relative', zIndex: 2 }}>
        <div className=' fw-bold mb-4 bg-primary' style={{
          padding: 20 * multiple,
          fontSize: 24 * multiple,
          color: 'white',
          borderRadius: 20 * multiple,
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
