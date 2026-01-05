import React from 'react'
import PageHeaderBlog from '../components/common/pageHeaderBlog'
import BlogCard from '../components/common/blogCard'
import { ScrollRestoration } from 'react-router-dom'

import img_1 from "../assets/img/company1.jpeg"
import img_2 from "../assets/img/company2.png"
import img_3 from "../assets/img/company3.jpeg"
import img_4 from "../assets/img/company4.jpeg"
import img_5 from "../assets/img/company5.jpeg"
import img_6 from "../assets/img/company6.png"
import img_7 from "../assets/img/company7.jpeg"
import img_8 from "../assets/img/company8.png"
import img_9 from "../assets/img/company9.png"
import img_10 from "../assets/img/company10.png"
import img_11 from "../assets/img/company11.jpg"
import img_12 from "../assets/img/company12.png"

const projectsData = [
  {
    id: 4,
    img: img_4,
  },
  {
    id: 5,
    img: img_5,
  },
  {
    id: 6,
    img: img_6,
  },
  {
    id: 7,
    img: img_7,
  },
  {
    id: 8,
    img: img_8,
  },
  {
    id: 9,
    img: img_9,
  },
  {
    id: 10,
    img: img_10,
  },
  {
    id: 11,
    img: img_11,
  },
  {
    id: 12,
    img: img_12,
  },
  {
    id: 1,
    img: img_1,
  },
  {
    id: 2,
    img: img_2,
  },
  {
    id: 3,
    img: img_3,
  },
]

const Blog = () => {
  return (
    <>
      <PageHeaderBlog pageName={"Proyectos"} />
      <div className="blog-area article-area">

        <div
          style={{
            backgroundColor: "#000",
            padding: "60px 20px",
            height: 400,
            marginBottom: 80,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // centra verticalmente
            alignItems: "center",     // centra horizontalmente
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "36px",
              // fontStyle: "italic",
              marginBottom: "10px",
              fontWeight: "800",
            }}
          >
            Nuestra trayectoria nos respalda
          </h2>

          <h3
            style={{
              color: "#f24738", // naranja fuerte
              fontSize: "32px",
              fontWeight: "800",
              letterSpacing: "1px",
              marginBottom: "15px",
              textTransform: "uppercase",
            }}
          >
            Clientes que han confiado en nosotros
          </h3>

          <p
            style={{
              color: "#ffffff",
              fontSize: "28px",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.5",
              fontWeight: "800"
            }}
          >
              Estas son algunas organizaciones
          </p>
        </div>

        <div className="container">

          <div className="row">
            {
              projectsData.map(({ id, img }) => {
                return (
                  <div className="col-lg-4"
                    style={{
                      padding: '1px'
                    }}>
                    <BlogCard key={id} thumb={img} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default Blog