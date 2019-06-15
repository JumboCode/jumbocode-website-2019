import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Mono"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Helvetica+Neue"
        rel="stylesheet"
      />
      <title>JumboCode</title>
    </Helmet>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Contact />
    {/* <Footer /> */}
  </Layout>
);

export default IndexPage;
