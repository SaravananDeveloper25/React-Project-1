import React,{useEffect} from 'react'
import './studentzone.css'
import { Container, Row, Col } from 'react-bootstrap'
import Resume from './Resume'
import PlacedStudent from './PlacedStudent'
function StudentZone() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ }}>
      <div className='zone-banner'>
        <h3>Student Zone</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, animi consectetur culpa in dolore commodi molestiae. Quod laudantium doloribus sapiente perferendis asperiores, eum molestias soluta quos autem laboriosam consectetur culpa!</p>
      </div>
      <section className='iq' style={{ textAlign: "center" }}>
        <span style={{ fontWeight: 700, fontSize: "1.5rem", borderBottom: "5px solid red" }}>Placement Eligibility Test</span>
        <section></section>
        <div className='placement-test'>
          <Container>

            <Row>
              <Col id='col1'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit, quisquam aliquam illo numquam enim delectus eos! Ipsum adipisci deserunt nihil ea nobis assumenda! Quia quae enim alias omnis. Illo.</p>
              </Col>
              <Col id='col2'>
                <img src="https://picsum.photos/200/300" alt="Placent Test" height="200px" width="300px" />
                <button>Take Test</button>
              </Col>
            </Row>

          </Container>
        </div>

      </section>
      <section className='sr' style={{ textAlign: "center" }}>
        <span style={{ fontWeight: 700, fontSize: "1.5rem", borderBottom: "5px solid red" }}>Sample Resume</span>
        <Resume />
      </section>
      <section style={{ textAlign: "center" }}>
      <span style={{ fontWeight: 700, fontSize: "1.5rem", borderBottom: "5px solid red" }}>Placement list</span>
        <section></section>
        <PlacedStudent/>
      </section>
      <section style={{ textAlign: "center" }}>
        <span style={{ fontWeight: 700, fontSize: "1.5rem", borderBottom: "5px solid red" }}>Intenrship</span>
        <section></section>
        <Container style={{ background: '#fff', padding: '20px', boxShadow: '0px 0px 2px 2px rgb(0,0,100,.7)' }}>
          <Row style={{ textAlign: 'left' }}>

            <Col xl={8} md={6}>
              <h3 style={{ width: '200px', borderBottom: '4px solid', color: 'blue', padding: '5px' }}>Lorem, ipsum.</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque pariatur unde non cupiditate, rerum quasi maxime fuga, nulla molestias, nostrum iste earum tempore sunt omnis similique suscipit quaerat nemo quo.</p>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'center'}}>
              <img src="https://picsum.photos/200/300" alt="" height={200} width={300}/>
            </Col>

          </Row>
          <Row style={{ textAlign: 'left',marginTop:'20px' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="https://picsum.photos/200/300" alt="" height={200} width={300} />
            </Col>
            <Col md={6} xl={8}>
              <h3 style={{ width: '200px', borderBottom: '4px solid', color: 'blue', padding: '5px' }}>Lorem, ipsum.</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque pariatur unde non cupiditate, rerum quasi maxime fuga, nulla molestias, nostrum iste earum tempore sunt omnis similique suscipit quaerat nemo quo.</p>
            </Col>

          </Row>
          <div style={{ textAlign: 'left',marginTop:'20px' }}>
          <h3 style={{ width: '200px', borderBottom: '4px solid', color: 'blue', padding: '5px' }}>Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus harum debitis cum eius, beatae sapiente atque porro dicta tempora libero, necessitatibus deserunt quia et voluptatum perspiciatis placeat! Quibusdam aperiam et velit autem rerum deleniti voluptatum, cumque placeat, voluptatem distinctio, laboriosam obcaecati itaque? Voluptate, facilis, ipsa, consectetur fuga at neque repellendus reiciendis vel placeat alias veniam inventore sint quidem optio magni id. Cumque, sit voluptatem. Ratione quibusdam sed, eaque voluptate magnam optio tempora officiis atque temporibus accusamus quasi repellat, quidem inventore harum recusandae placeat. Accusamus voluptatibus ullam, aut ad non consequatur vero cumque. Sequi quae aperiam, sint nulla autem commodi quas tenetur eius? Quasi, sed nesciunt possimus quo maxime accusantium vel assumenda minima quis quam expedita odit. Et consequuntur quidem natus explicabo voluptates iusto velit, placeat maxime praesentium architecto harum doloremque laborum quasi inventore beatae porro, repellendus voluptatem assumenda nesciunt eligendi impedit cupiditate. Quibusdam eligendi repellat obcaecati iste laborum eaque amet tempore voluptas vero! Est quia similique expedita! Dolores, nobis magni eos ratione quas maxime praesentium fugiat tenetur eveniet eligendi a temporibus similique repellat ipsum. Doloremque amet eaque voluptates quod minus et error delectus doloribus? Fugiat nulla, ullam, accusantium aut inventore nemo perspiciatis repudiandae voluptas dignissimos neque harum corporis aliquid consequuntur?.</p>

          </div>
        </Container>
      </section>
      <section style={{ textAlign: "center" }}>
       
      <span style={{ fontWeight: 700, fontSize: "1.5rem", borderBottom: "5px solid red" }}>OnJob Support</span>
      <section></section>
      <Container style={{ background: '#fff', padding: '20px', boxShadow: '0px 0px 2px 2px rgb(0,0,100,.7)',textAlign:'left' }}>
        <section></section>
      <h3 style={{ width: '200px', borderBottom: '4px solid', color: 'blue', padding: '5px' }}>Job Suport</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur eum ipsam non nesciunt dignissimos, tempora sequi error vel voluptas pariatur atque eius magnam deleniti officiis eligendi! Porro, laborum amet!</p>
        <section></section>
        <h3 style={{ width: '200px', borderBottom: '4px solid', color: 'blue', padding: '5px' }}>Our Promise</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat necessitatibus, incidunt cumque officia voluptas culpa harum alias assumenda magni quibusdam et repellendus nesciunt veniam adipisci molestiae quaerat id temporibus quod.</p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, vero.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, vero.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, vero.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, vero.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, vero.</li>
        </ul>
        <section></section>
        <h3 style={{ width: '250px', borderBottom: '4px solid', color: 'blue', padding: '5px' }}>Why Choose us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatum ut aspernatur culpa. Consequatur reiciendis culpa eos quas blanditiis a, rem quod, ratione commodi, deleniti obcaecati quasi quaerat quam in?</p>
        <section></section>
        <h3 style={{ width: '150px', borderBottom: '4px solid', color: 'blue', padding: '5px' }}>We offer</h3>
        <Row style={{textAlign:'justify'}}>
          <Col style={{padding:'30px',margin:'30px',boxShadow:'0px 0px 2px 2px gray'}}>
            <h3 style={{textAlign:'center'}}>Heading</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, quibusdam. Magni, reiciendis eos natus harum dolorem optio recusandae quaerat? Nulla est debitis fugiat sint, porro aliquam non voluptate eaque necessitatibus?</p>
          </Col>
          <Col style={{padding:'30px',margin:'30px',boxShadow:'0px 0px 2px 2px gray'}}>
            <h3 style={{textAlign:'center'}}>Heading</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, quibusdam. Magni, reiciendis eos natus harum dolorem optio recusandae quaerat? Nulla est debitis fugiat sint, porro aliquam non voluptate eaque necessitatibus?</p>
          </Col>
          <Col style={{padding:'30px',margin:'30px',boxShadow:'0px 0px 2px 2px gray'}}>
            <h3 style={{textAlign:'center'}}>Heading</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, quibusdam. Magni, reiciendis eos natus harum dolorem optio recusandae quaerat? Nulla est debitis fugiat sint, porro aliquam non voluptate eaque necessitatibus?</p>
          </Col>
        </Row>
      </Container>
      </section>
      <section></section>
    </div>
  )
}

export default StudentZone