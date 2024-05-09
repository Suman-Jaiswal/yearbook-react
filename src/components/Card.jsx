import React from 'react'
const multiple = .5
export default function Card({ side, comment }) {
  return (
    <div className='comment-box'
      style={{
        width: 520 * multiple, height: 200 * multiple, borderRadius: 40 * multiple, position: 'relative',
      }}>
      <div className="bullet" style={{
        width: 16 * multiple,
        height: 16 * multiple,
        backgroundColor: '#fff',
        borderRadius: '50%',
        border: '3px solid blue',
        position: 'absolute',
        top: 50 * multiple,
        left: side === 'right' ? -68 * multiple : `calc(100% + ${36 * multiple}px)`,
        zIndex: 2,
        overflow: 'visible',
        transform: side === 'right' ? 'translate(0, -50%) rotate(45deg)' : 'translate(100%, -50%) rotate(-135deg)'

      }}>
      </div>
      <div className="traingle" style={{
        width: 60 * multiple,
        height: 60 * multiple,
        clipPath: side === 'right' ? 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)' : 'polygon(0 0, 100% 50%, 0 100%)',
        backgroundColor: 'white',
        position: 'absolute',
        boxShadow: '1px -1px 5px rgba(0,0,0,0.3)',
        border: '1px dotted #333',
        top: 20 * multiple,
        left: side === 'right' ? -45 * multiple : `calc(100% - ${15 * multiple}px)`,
        zIndex: 1
      }}>

      </div>
      <div style={{
        padding: 20 * multiple,
        width: '100%', height: '100%', border: '1px dotted #ccc', borderRadius: 40 * multiple, position: 'relative',
        backgroundColor: 'white',
        zIndex: 2
      }}>
        <div className="name" style={{ fontSize: 18 * multiple, fontWeight: 'bold' }}>{comment.name}</div>
        <p className='comment' style={{
          fontSize: 16 * multiple,
        }} >{comment.comment}</p>
      </div>
    </div>
  )
}
