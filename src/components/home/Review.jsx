import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

import style from './style.module.css'

const cards = [
  {
    "name":'Priya Sharma',
    "review":'Attending training at Getin Technologies in Bengaluru was an exceptional experience. The instructors were knowledgeable and patient, ensuring everyone understood the concepts thoroughly. The hands-on approach to learning made complex topics easy to grasp. I highly recommend Getin for anyone looking to enhance their skills in software development.',
    "star":'⭐️⭐️⭐️⭐️⭐️'
  },
  {
    "name":'Rohan',
    "review":`I enrolled in a Python programming course at Getin Technologies, and I'm extremely satisfied with my decision. The course structure was well-designed, covering everything from basic syntax to advanced topics. The instructors were supportive, always ready to clarify doubts. The practical exercises helped reinforce my understanding. Kudos to Getin for their commitment to providing quality training!`,
    "star":'⭐️⭐️⭐️⭐️⭐️'
  },
  {
    "name":'Aishwarya ',
    "review":`Choosing Getin Technologies for my Java training was one of the best decisions I've made. The trainers were not only experts in their field but also excellent communicators, making complex concepts easy to understand. The training environment was conducive to learning, with modern facilities and access to resources. I'm grateful for the valuable skills I've gained here.`,
    "star":'⭐️⭐️⭐️⭐️⭐️'
  },
  {
    "name":'Siddharth',
    "review":`I recently completed a web development course at Getin Technologies, and I couldn't be happier with the outcome. The curriculum was comprehensive, covering both frontend and backend technologies. The instructors were passionate about teaching and went above and beyond to ensure every student succeeded. Thanks to Getin, I now feel confident to pursue a career in web development. Highly recommended!`,
    "star":'⭐️⭐️⭐️⭐️⭐️'
  },

]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
       {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={style.deck} key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            <div>
              <h2>{cards[i].name}</h2>
              <h5>{cards[i].star}</h5>
              <p>{cards[i].review}</p>
            </div>
          </animated.div>
        </animated.div>
      ))}
    </>
  )
}

export default function App() {
  return (
    <div className={style.container}>
      <Deck />
    </div>
  )
}
