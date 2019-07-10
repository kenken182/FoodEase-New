import React, { Component } from 'react'
import { Button, Row, Col } from 'antd'

export default class NavBar extends Component {
  render() {
    return (
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <Row>
              <Col style={{paddingLeft: '22%', margin: 0}} span={24} lg={4}>
                <h2 style={{color: 'green', float:'left'}} className="x-large">Food</h2>
                <h2 style={{color: 'white'}} className="x-large">Ease</h2>
              </Col>
            </Row>
            <h3 style={{fontSize: '40px', textAlign: 'left', marginLeft: '15rem', marginTop: -40, marginBottom: '70px'}}> Food ease for foodies </h3>
            <div className="buttons" style={{textAlign:'center'}}>
              <a href="login.html" class="btn btn-primary">Try it out today!</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
