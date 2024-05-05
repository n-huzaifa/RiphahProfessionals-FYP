import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.height = 300
    this.canvas.width = 300
    this.radius = this.canvas.height / 2
    this.ctx.translate(this.radius, this.radius)
    this.radius = this.radius * 0.9
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
    this.drawClock()
  }

  drawClock() {
    this.ctx.clearRect(-this.radius, -this.radius, this.canvas.width, this.canvas.height)
    this.ctx.beginPath()
    this.ctx.arc(0, 0, this.radius, 0, 2 * Math.PI)
    this.ctx.fillStyle = '#fff'
    this.ctx.fill()
    this.drawFace()
    this.drawTime()
  }

  drawFace() {
    this.ctx.beginPath()
    this.ctx.arc(0, 0, this.radius * 0.1, 0, 2 * Math.PI)
    this.ctx.fillStyle = '#333'
    this.ctx.fill()
    this.drawNumbers()
  }

  drawNumbers() {
    this.ctx.font = this.radius * 0.15 + 'px arial'
    this.ctx.textBaseline = 'middle'
    this.ctx.textAlign = 'center'
    for (let num = 1; num < 13; num++) {
      let ang = (num * Math.PI) / 6
      this.ctx.rotate(ang)
      this.ctx.translate(0, -this.radius * 0.85)
      this.ctx.rotate(-ang)
      this.ctx.fillText(num.toString(), 0, 0)
      this.ctx.rotate(ang)
      this.ctx.translate(0, this.radius * 0.85)
      this.ctx.rotate(-ang)
    }
  }

  drawTime() {
    let hour = this.state.date.getHours(),
      minute = this.state.date.getMinutes(),
      second = this.state.date.getSeconds()

    hour = hour % 12
    hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60)
    this.drawHand(hour, this.radius * 0.5, this.radius * 0.07)

    minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60)
    this.drawHand(minute, this.radius * 0.8, this.radius * 0.07)

    second = (second * Math.PI) / 30
    this.drawHand(second, this.radius * 0.9, this.radius * 0.02)
  }

  drawHand(pos, length, width) {
    this.ctx.beginPath()
    this.ctx.lineWidth = width
    this.ctx.lineCap = 'round'
    this.ctx.moveTo(0, 0)
    this.ctx.rotate(pos)
    this.ctx.lineTo(0, -length)
    this.ctx.stroke()
    this.ctx.rotate(-pos)
  }

  render() {
    return <canvas id="canvas"></canvas>
  }
}

export default Clock
