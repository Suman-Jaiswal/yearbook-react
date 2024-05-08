import React from 'react'

export default function Card({ side, comment }) {
  return (
    <div className='comment-box'
      style={{
        width: 520, height: 200, borderRadius: 40, position: 'relative',
      }}>
      <div className="bullet" style={{
        width: 16,
        height: 16,
        backgroundColor: '#fff',
        borderRadius: '50%',
        border: '3px solid blue',
        position: 'absolute',
        top: 50,
        left: side === 'right' ? -68 : 'calc(100% + 36px)',
        zIndex: 2,
        overflow: 'visible',
        transform: side === 'right' ? 'translate(0, -50%) rotate(45deg)' : 'translate(100%, -50%) rotate(-135deg)'

      }}>
      </div>
      <div className="traingle" style={{
        width: 60,
        height: 60,
        clipPath: side === 'right' ? 'polygon(0 50%, 100% 0, 100% 100%, 0 50%)' : 'polygon(0 0, 100% 50%, 0 100%)',
        backgroundColor: 'white',
        position: 'absolute',
        boxShadow: '1px -1px 5px rgba(0,0,0,0.3)',
        border: '1px dotted #333',
        top: 20,
        left: side === 'right' ? -45 : 'calc(100% - 15px)',
        zIndex: 1
      }}>

      </div>
      <div className='p-4' style={{
        width: '100%', height: '100%', border: '1px dotted #ccc', borderRadius: 40, position: 'relative',
        backgroundColor: 'white',
        zIndex: 2
      }}>
        <div className="name" style={{ fontSize: 18, fontWeight: 'bold' }}>{comment.name}</div>
        <p className='comment fs-6' >{comment.comment}</p>
      </div>
    </div>
  )
}
